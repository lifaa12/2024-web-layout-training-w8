import './assets/scss/all.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// banner
const bannerSwiper = new Swiper('.banner-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,  
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,   
  },
  breakpoints:{
    992:{
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 40,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.banner-swiper-next',
    prevEl: '.banner-swiper-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },

  // 以下程式碼參考自gpt
  on: {
    slideChange: function () {
      document.querySelectorAll('.filter').forEach(filter => {
        filter.classList.remove('act');
      });
      const activeSlide = this.slides[this.activeIndex];
      const filter = activeSlide.querySelector('.filter');
      if (filter) {
        filter.classList.add('act');
      }
    },
  },
});

// 行動版募資卡片
const fundraisingMbSwiper = new Swiper('.fundraising-card-mb', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 24,
  slidesPerView: 1.3,
  autoplay: {
    delay: 2000,  
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,   
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// 推薦購買卡片
const recommendSwiper = new Swiper('.recommend-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1.1,
   spaceBetween: 24,
   autoplay: {
    delay: 2000,  
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,   
  },
  breakpoints:{
    992:{
      slidesPerView: 4,
    },
    576:{
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommend-swiper-next',
    prevEl: '.recommend-swiper-prev',
  },
});

// 行動版講師
const indexTeacherSwiper = new Swiper('.index-teacher-mb-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,  
    disableOnInteraction: false,  
    pauseOnMouseEnter: true,   
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});