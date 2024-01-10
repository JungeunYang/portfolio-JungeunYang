// Matter.js module aliases
const { Engine, Render, Runner, Bodies, World } = Matter;

// Function to run the Matter.js animation
const runMatterAnimation = () => {
  // Create an engine
  const engine = Engine.create();

  // Get the .view element and its dimensions
  const viewElement = document.querySelector('.view');
  const viewWidth = viewElement.offsetWidth;
  const viewHeight = viewElement.offsetHeight;

  // Create a renderer within the .view element
  const render = Render.create({
    element: viewElement,
    engine: engine,
    options: {
      width: viewWidth,
      height: viewHeight,
      background: 'transparent',
      wireframes: false, // Set to true for wireframe view
    },
  });

  // Create a runner
  const runner = Runner.create();

  // Add the runner to the engine
  Runner.run(runner, engine);

  // Create an array to hold the falling images
  const fallingImages = [];

  // Load images with filenames
  const imageFilenames = Array.from({ length: 9 }, (_, index) => `img/item${index + 1}.svg`);

  // Function to load images and create falling images with original sizes
  const createFallingImage = (imageUrl, index) => {
    const img = new Image();
    img.onload = function () {
      const angle = Math.random() * Math.PI * 2; // Random angle in radians
      const fallingImage = Bodies.rectangle(
        Math.random() * viewWidth,
        Math.random() * -400, // Adjusted initial vertical position
        img.width,
        img.height,
        {
          render: {
            sprite: {
              texture: img.src,
            },
          },
          restitution: 0.8, // Adjust restitution to control bouncing
          friction: 0.7, // Adjust friction to control sliding
          angle: angle, // Set the initial rotation angle
          angularVelocity: 0.02 * (Math.random() - 0.5), // Random angular velocity
        }
      );
      fallingImages.push(fallingImage);

      if (index === imageFilenames.length - 1) {
        // All images loaded, add them to the world
        World.add(engine.world, fallingImages);
      }
    };
    img.src = imageUrl;
  };

  // Add walls to prevent images from leaving the screen
  const wallOptions = { isStatic: true, render: { visible: true, opacity: 0 } };
  World.add(engine.world, [
    Bodies.rectangle(viewWidth / 2, viewHeight, viewWidth, 50, wallOptions), // Bottom wall
    Bodies.rectangle(viewWidth, viewHeight / 2, 200, viewHeight, wallOptions), // Right wall
    Bodies.rectangle(0, viewHeight / 2, 50, viewHeight, wallOptions), // Left wall
  ]);

  // Set gravity to control falling speed
  engine.world.gravity.y = 1.6; // Higher values increase gravity

  // Stagger the creation of falling images with a delay
  imageFilenames.forEach((imageUrl, index) => {
    setTimeout(() => {
      createFallingImage(imageUrl, index);
    }, index * 100); // Adjust the delay
  });

  // Run the engine
  Runner.run(runner, engine);

  // Run the renderer
  Render.run(render);
};

// Run the animation when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(runMatterAnimation, 1000);
});
