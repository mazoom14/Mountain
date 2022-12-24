const menu = document.querySelector(".header__menu-body");
const burger = document.querySelector(".header__burger");
const header_top = document.querySelector(".header__top");
const body = document.body;

burger.addEventListener('click', function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");
   header_top.classList.toggle("active");
   body.classList.toggle("lock");
});

window.addEventListener("resize", function () {
   if (window.matchMedia("(min-width: 768px)").matches) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      header_top.classList.remove("active");
      body.classList.remove("lock");
   }
});

//More
const dots = document.querySelectorAll(".dots");
const more_text = document.querySelectorAll(".more-text");
const more_btn = document.querySelectorAll(".more-btn");