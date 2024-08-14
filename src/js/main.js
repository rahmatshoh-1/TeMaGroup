const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    centeredSlides: false,
        freeMode: true,
    // freeMode:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    autoplay: {
      delay: 0.5,
      disableOnInteraction: false,
       },
  });

let menu = document.getElementById('menu').addEventListener('click',toggleCloseMenu)

function toggleCloseMenu(){
    document.getElementById('itemMenu').classList.toggle('hidden')
}
