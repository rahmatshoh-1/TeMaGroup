const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
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
  });

let menu = document.getElementById('menu').addEventListener('click',toggleCloseMenu)

function toggleCloseMenu(){
    document.getElementById('itemMenu').classList.toggle('hidden')
}