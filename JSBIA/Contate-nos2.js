/*Slider Cards*/ 

/*Para os slids poderem passar para o lado*/
const swiper = new Swiper('.swiper-container', { /*Swiper:Cria Carrosséis ou slides na web (Carrosséis de textos ou imagens).*/
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    paginationClickable: true,
    watchSlidesProgress: true,
     loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });