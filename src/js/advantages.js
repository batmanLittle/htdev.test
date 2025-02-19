import plusIcon from "../images/icon-plus.svg";
import closeIcon from "../images/icon-close.svg";
import img1 from "../images/adv-img1.webp";
import img2 from "../images/adv-img2.webp";
import img3 from "../images/adv-img3.webp";
import img4 from "../images/adv-img4.webp";
import img5 from "../images/adv-img5.webp";
import img6 from "../images/adv-img6.webp";
import img7 from "../images/adv-img7.webp";
import img8 from "../images/adv-img8.webp";
import img9 from "../images/adv-img9.webp";
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function renderAdvantagesList() {
  const swiperContainer = document.querySelector(
    ".advantages__swiper .swiper-wrapper"
  );
  if (!swiperContainer) return;

  const advantages = [
    {
      title: "Уверенность в завтрашнем дне",
      img: img1,
      imgAlt: "Мужчина с ребенком на закате",
      text: "ООО «Conecom», российское подразделение французского концерна Lesaffre. Мы компания, которая честно ведет свой бизнес на территории РФ, соблюдая законодательство и гарантируя стабильность и уверенность в завтрашнем дне.",
    },
    {
      title: "Безопасность на рабочем месте – приоритет №1",
      img: img2,
      imgAlt: "Сотрудник в цехе осматривает оборудование",
      text: "Вопросам безопасности и качества пищевой продукции в нашей компании уделяется повышенное внимание. Все производства группы DuffBeer в России постоянно работают над улучшением процессов и стремятся сделать все возможное, чтобы рабочий процесс был максимально безопасным и комфортным.",
    },
    {
      title: "Стабильная заработная <br> плата",
      img: img3,
      imgAlt: "Мужчина смотрит вдаль",
      text: "Мы обеспечиваем нашим сотрудникам стабильную заработную плату в соответствии с рынком региона. Средний стаж работы в нашей компании – 7 лет.",
    },
    {
      title: "Заботимся о здоровье сотрудников",
      img: img4,
      imgAlt: "Медицинский работник проводит осмотр сотрудника",
      text: "Каждый сотрудник в нашей компании обеспечен полисом добровольного медицинского страхования. Кроме того, на каждом заводе есть медицинский пункт для сотрудников. Осуществляется страхование от несчастных случаев с первого дня работы.",
    },
    {
      title:
        "Предоставление удобной спецодежды и СИЗ для производственного персонала",
      img: img5,
      imgAlt: "Работник в спецодежде на производстве",
      text: "Мы предоставляем удобные СИЗ и спецодежду и в случае износа или порчи обмениваются на новые.",
    },
    {
      title:
        "Обучение: различные программы обучения и профессиональные тренинги",
      img: img6,
      imgAlt: "Сотрудники на тренинге в учебном классе",
      text: "Мы уделяем много внимания развитию наших сотрудников. В компании работает Внутренний центр обучений и ежегодно проводится большое количество обучающих мероприятий как локально на заводах, так и в головном офисе DuffBeer во Франции.",
    },
    {
      title: "Возможности для реализации творческого потенциала",
      img: img7,
      imgAlt: "Группа сотрудников радуется на корпоративном мероприятии",
      text: "Мы ставим перед собой амбициозные и интересные цели, а реализация задач является командной работой сотрудников из различных подразделений.  Мы также принимаем активное участие в работе над кросс-функциональными проектам с коллегами из других стран присутствия DuffBeer.",
    },
    {
      title: "Мы - семейная компания и любим проводить время вместе",
      img: img8,
      imgAlt: "Сотрудники с детьми на семейном празднике компании",
      text: "Ежегодно мы проводим корпоративные мероприятия не только для наших сотрудников, но и для семей наших сотрудников. А корпоративные подарки для детей сотрудников – наша добрая предновогодняя традиция.",
    },
    {
      title: "Мы - социально ответственная компания и заботимся об окружающих",
      img: img9,
      imgAlt: "Сотрудник ухаживает за растениями возле офиса компании",
      text: "Наша миссия лежит в основе социально-корпоративной ответственности. Мы ведем свою деятельность в соответствии с тремя основными правилами:  мы заботимся о людях; наша деятельность устойчива по своей природе; мы заботимся об окружающей среде.",
    },
  ];

  // Очищаем контейнер перед рендерингом
  swiperContainer.innerHTML = advantages
    .map(
      (adv) => `
    <div class="swiper-slide">
      <div class="advantages__item-box">
        <div class="advantages__item">
          <div class="advantages__item-img">
            <img src="${adv.img}" alt="${adv.imgAlt}" />
          </div>
          <div class="advantages__item-btm">
            <div class="advantages__item-title"> <h3>${adv.title}</h3></div>
            <button class="advantages__item-btn toggle-btn">
              <img alt="иконка плюс" src="${plusIcon}" />
            </button>
          </div>
        </div>
        <div class="advantages__item advantages__item-invisible">
            <div class="advantages__item-txt"> <p>${adv.text}</p></div>
          <button class="advantages__item-btn close-btn">
            <img alt="иконка закрытия" src="${closeIcon}" />
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Добавляем обработчики событий для кнопок
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const itemBox = event.target.closest(".advantages__item-box");
      itemBox.classList.toggle("active");
    });
  });

  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const itemBox = event.target.closest(".advantages__item-box");
      itemBox.classList.remove("active");
    });
  });
}

let advantagesSwiper = null;

function initSwiper() {
  advantagesSwiper = new Swiper(".advantages__swiper", {
    slidesPerView: window.innerWidth < 700 ? 1 : 2,
    spaceBetween: 25,
    breakpoints: {
      700: { slidesPerView: 2 }, // От 700px – 2 слайда
      0: { slidesPerView: 1 }, // До 700px – 1 слайд
    },
    loop: false,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    navigation: {
      nextEl: ".advantages__swiper-right",
      prevEl: ".advantages__swiper-left",
    },
    modules: [Pagination, Navigation],
  });
}

function checkAndInitSlider() {
  const screenWidth = window.innerWidth;
  const swiperWrapper = document.querySelector(
    ".advantages__swiper .swiper-wrapper"
  );

  if (!swiperWrapper) return;

  if (screenWidth < 1020) {
    if (!advantagesSwiper) {
      renderAdvantagesList();
      initSwiper();
    } else {
      advantagesSwiper.update();
    }
  } else {
    if (advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      advantagesSwiper = null;
    }
    renderAdvantagesList();
  }
}

document.addEventListener("DOMContentLoaded", checkAndInitSlider);
window.addEventListener("resize", checkAndInitSlider);
