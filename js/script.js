$(function () {
  /* visual */
  const visualTL = gsap.timeline({ defaults: { duration: 0.5, ease: 'steps(1)' } });
  const $window = $(window);
  const $gnb = $('nav > .gnb');

  // visualTL.set('.row1, .row2, .row3', { backgroundColor: 'blue' });
  visualTL.to('.row1', { backgroundColor: 'gray' });
  visualTL.to('.row2', { backgroundColor: 'gray' });
  visualTL.to('.row3', { backgroundColor: 'gray' });
  visualTL.to('.row1', { backgroundColor: '#FF826F' });
  visualTL.to('.row2', { backgroundColor: '#FF826F' });
  visualTL.to('.row3', { backgroundColor: '#FF826F' });
  visualTL.to('.row1', { backgroundColor: 'var(--main-color)' });
  visualTL.to('.row2', { backgroundColor: 'var(--main-color)' });
  visualTL.to('.row3', { backgroundColor: 'var(--main-color)' });
  visualTL.to('.row1', { backgroundColor: 'gray' });
  visualTL.to('.row2', { backgroundColor: 'gray' });
  visualTL.to('.row3', { backgroundColor: 'gray' });
  visualTL.to('.row1', { backgroundColor: '#FF826F' });
  visualTL.to('.row2', { backgroundColor: '#FF826F' });
  visualTL.to('.row3', { backgroundColor: '#FF826F' });
  visualTL.to('.row1', { backgroundColor: 'var(--main-color)' });
  visualTL.to('.row2', { backgroundColor: 'var(--main-color)' });
  visualTL.to('.row3', { backgroundColor: 'var(--main-color)' });

  /* 햄버거메뉴 */
  let i = 0;
  //마우스 클릭했을때 햄버거 바가 엑스 되는거
  $('.menu').on('click', function (e) {
    e.preventDefault;

    if (i == 0) {
      $('.menu-line:nth-of-type(2)').animate({ top: '50%' }, function () {
        $('.menu-line:nth-of-type(1)').css({ display: 'none' });
        $('.menu-line:nth-of-type(2)').animate({ rotate: '45deg' });
      });
      $('.menu-line:nth-of-type(3)').animate({ top: '50%' }, function () {
        $('.menu-line:nth-of-type(3)').animate({ rotate: '-45deg' });
      });
      i += 1;
    }
    // 마우스 한번 더 클릭했을 때 엑스가 햄버거 바가 되는거
    else {
      $('.menu-line:nth-of-type(2)').animate({ rotate: '0deg' }, function () {
        $('.menu-line:nth-of-type(1)').css({ display: 'block' });
        $('.menu-line:nth-of-type(2)').animate({ top: '0', transform: 'trnaslateY(-50%)' });
      });
      $('.menu-line:nth-of-type(3)').animate({ rotate: '0deg' }, function () {
        $('.menu-line:nth-of-type(3)').animate({ top: '100%' });
      });
      i -= 1;
    }
  });

  // 마우스가 section2에 들어왔을 때
  // section2의 offset().top 값을 가지고 옴
  // console.log($('.section2').offset().top);

  $window.on('scroll', function () {
    // 사용자의 (세로)스크롤 값을 구해서
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= $('.section2').offset().top) {
      $gnb.addClass('active');
    } else {
      $gnb.removeClass('active');
    }
  });

  // 마우스 휠을 조작했을 때 : wheel
  // $window.on('wheel', function (e) {
  //   if (e.originalEvent.wheelDelta > 0) {
  //     $gnb.removeClass('hide');
  //   } else {
  //     $gnb.addClass('hide');
  //   }
  // });

  gsap.registerPlugin(ScrollTrigger);

  // lenis
  // const lenis = new Lenis({
  //   duration: 1,
  //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   smoothWheel: true,
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // lenis.on('scroll', ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });

  const horizontal = document.querySelector('.about-me');
  const hCon = gsap.utils.toArray('.about-me > div');
  // console.log(
  //   'horizontal.offsetWidth: ',
  //   horizontal.offsetWidth,
  //   'innerWidth: ',
  //   innerWidth,
  //   'scroll END: ',
  //   horizontal.offsetWidth - innerWidth,
  //   'hCon.length: ',
  //   hCon.length
  // );

  const tl = gsap.to(hCon, {
    xPercent: -100 * (hCon.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.section3',
      start: '0% 0%',
      end: () => '+=' + (horizontal.offsetWidth - innerWidth),
      pin: true,
      // markers: true,
      scrub: 1,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section4',
      start: '0% 0%',
      end: '100% 0',
      pin: true,
      // markers: true,
      scrub: 1,
    },
  });

  tl2.from('.sec4-1 h4', { autoAlpha: 0, y: 100 });
  tl2.from('.sec4-1-con', { autoAlpha: 0, y: 100 }, '-=.3');

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section4',
      start: '50% 0%',
      end: '100% 0%',
      pin: true,
      // markers: true,
      scrub: 1,
    },
  });
  tl3.from('.sec4-2 h4', { autoAlpha: 0, y: 100 });
  tl3.from('.sec4-2-con', { autoAlpha: 0, y: 100 }, '-=.3');
  // 이소룡 참고

  const $workList = $('.works-list > li');
  const $workInfo = $('.works-list-info');
  const $workItem = $('.works-list-item');

  tabAction(0);

  $workList.on('click', function (e) {
    e.preventDefault;

    let idx = $(this).index();

    tabAction(idx);
  });

  function tabAction(index) {
    $workInfo.hide();
    $workInfo.eq(index).show();

    $workList.removeClass('on');
    $workList.eq(index).addClass('on');
  }

  // 첫번재 탭 열기
  let tIdx = 0;
  tabAction(0);
  // 처음 함수가 호출될 때는 tIdx=0, 첫번째 리스트가 대상이 된다.
  attachClickHandler($workItem.eq(tIdx).find('li'));

  $workList.on('click', function (e) {
    e.preventDefault();

    tIdx = $(this).index();
    // 클릭한 탭 열기
    tabAction(tIdx);

    // 대상 works-list-item 구하기
    let target = $workItem.eq(tIdx).find('li');
    console.log(target);

    // 탭메뉴를 선택하면 일단 active 삭제
    target.removeClass('active');

    // 대상 works-list-item에 이벤트 걸기
    attachClickHandler(target);
  });

  // 대상 works-list-item에 이벤트
  function attachClickHandler(target) {
    target.on('click', function () {
      console.log(target);

      // active 클래스 부여한 요소의 가로 크기 수정(css)
      let wIdx = $(this).index();
      target.removeClass('active');
      target.eq(wIdx).addClass('active');

      $(document).mouseup(function (e) {
        if (target.eq(wIdx).has(e.target).length === 0) {
          target.eq(wIdx).removeClass('active');
        }
      });
    });
  }
});
