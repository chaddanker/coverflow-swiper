    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
        
      },
      keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
      pagination: {
        el: '.swiper-pagination',
      },
        direction: 'horizontal',
  loop: false,

    });
swiper.slideTo(1);
 