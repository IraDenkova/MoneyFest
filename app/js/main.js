$(function () {
  
  var ques = document.getElementsByClassName("questions__item");
  var i;
  
  for (i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function () {
      this.classList.toggle("questions__item--active");    
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  };

  var pro = document.getElementsByClassName("invest-program__item");

  for (i = 0; i < pro.length; i++) {
    pro[i].addEventListener("click", function () {
      this.classList.toggle("invest-program__item--active");
      var procontent = this.nextElementSibling;
      if (procontent.style.display === "block") {
        procontent.style.display = "none";
      } else {
        procontent.style.display = "block";
      }
    });
  };

  $('.review__btn').on('click', function () {
    $('.review__item--add').toggleClass('review__active');
    if ($(this).text() == "Показать еще") {
      $(this).text("Скрыть");
    } else {
      $(this).text("Показать еще");
    };
  });

  $('.publications__btn').on('click', function () {
    $('.publications__item--smalladd').toggleClass('publications__active--small');
    $('.publications__item--bigadd').toggleClass('publications__active--big');
    if ($(this).text() == "Показать еще") {
      $(this).text("Скрыть");
    } else {
      $(this).text("Показать еще");
    };
  });


  $('.scroll-up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $('.top-slider__inner').slick({
    dots: true,
    fade: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 16.293L9.29288 17.7072L0.585772 9.00008L9.29288 0.292969L10.7071 1.70718L3.4142 9.00008L10.7071 16.293Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29291 4.70703L8.70712 3.29282L17.4142 11.9999L8.70712 20.707L7.29291 19.2928L14.5858 11.9999L7.29291 4.70703Z" fill="black"/></svg></button>'
  });

  var mixer = mixitup('.publications__items');

});