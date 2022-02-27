const ProjectsSwiper = new Swiper('.projects__swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper__button-next_projects'
  },
});


const StatisticsSwiper = new Swiper('.statistics__swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper__button-next_principles'
  },
});



const BenefitsSwiper = new Swiper('.benefits__swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper__button-next_benefits'
  },



});