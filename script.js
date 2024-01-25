var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",//4
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:1000,
    },
  });