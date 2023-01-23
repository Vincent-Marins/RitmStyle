new Swiper('.comment__container',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },

  mousewheel: {
    sensitivity: 1,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },

  slideToClickedSlide: true,

  watchOverflow: true,

  slidesPerGroup: 1,

  centeredSlides: true,

  initialSlide: 0,

  loop: true,

  loopedSlides: 3,

  speed: 800,

});