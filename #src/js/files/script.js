document.addEventListener('DOMContentLoaded', () => {
    const sliderMain = new Swiper('.slider_main', {
       freeMode: true,
       mousewheel: true,
       centeredSlides: true,
       parallax: true,
       breakpoints: {
         0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
         },
         680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
         }
       },
    });

    const sliderBg = new Swiper('.slider_bg', {
      centeredSlides: true,
      parallax: true,
      slidesPerView: 3.5,
      spaceBetween: 60,
   });

   sliderMain.controller.control = sliderBg;

   const sliderItems = document.querySelectorAll('.slider__item');

   sliderItems.forEach(item => {
      item.addEventListener('click', () => {
         item.classList.toggle('_open');
      });
   });

   const description = document.querySelector('.description');

   sliderMain.on('slideChange', () => {
      sliderMain.activeIndex > 0 ? description.classList.add('_hidden') : description.classList.remove('_hidden');
   })

}); // end