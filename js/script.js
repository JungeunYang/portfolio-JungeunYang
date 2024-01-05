$(function () {
  /* visual */
  const visualTL = gsap.timeline({ defaults: { duration: 0.5, ease: 'steps(1)' } });
  const $window = $(window);
  const $gnb = $('nav > .gnb');

  // visualTL.set('.row1, .row2, .row3', { backgroundColor: 'blue' });
  visualTL.to('.row1', { backgroundColor: 'gray' });
  visualTL.to('.row2', { backgroundColor: 'gray' });
  visualTL.to('.row3', { backgroundColor: 'gray' });
  visualTL.to('.row1', { backgroundColor: 'red' });
  visualTL.to('.row2', { backgroundColor: 'red' });
  visualTL.to('.row3', { backgroundColor: 'red' });
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
  console.log($('.section2').offset().top);

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
});
