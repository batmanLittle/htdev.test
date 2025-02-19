import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let companySwiper = null;

function initSwiper() {
  companySwiper = new Swiper(".company__swiper", {
    slidesPerView: window.innerWidth < 700 ? 1 : 2,
    spaceBetween: window.innerWidth < 700 ? 0 : 26,
    breakpoints: {
      700: { slidesPerView: 2, spaceBetween: 26 },
      0: { slidesPerView: 1, spaceBetween: 0 },
    },
    loop: false,
    grabCursor: true,
    pagination: {
      el: ".company__content .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    navigation: {
      nextEl: ".company__swiper-right",
      prevEl: ".company__swiper-left",
    },
    modules: [Pagination, Navigation],
  });
}

function checkAndInitSlider() {
  const screenWidth = window.innerWidth;
  const swiperWrapper = document.querySelector(
    ".company__swiper .swiper-wrapper"
  );

  if (!swiperWrapper) return;

  if (screenWidth < 1020) {
    if (!companySwiper) {
      initSwiper();
    } else {
      companySwiper.update();
    }
  } else {
    if (companySwiper) {
      companySwiper.destroy(true, true);
      companySwiper = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", checkAndInitSlider);
window.addEventListener("resize", checkAndInitSlider);
