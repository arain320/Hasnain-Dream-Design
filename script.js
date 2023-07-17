$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $("nav").removeClass("nav-toggle");
  });

  $(".count").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
        },
      }
    );
  });

  $(".project").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let footerDate = document.getElementById("footerDate");
let date = new Date().getFullYear();
footerDate.innerText = date;
