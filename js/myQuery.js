"use strict";

$(document).ready(function () {
  $('.slider_news_home').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false
  });
});
$('.main_bullert').click(function () {
  var menu_mobile = $('.menu_mobile');
  var overlay_menu = $('.overlay_menu');
  menu_mobile.css({
    'left': 0
  });
  overlay_menu.css({
    'right': 0
  });
});
$('.overlay_menu').click(function () {
  var menu_mobile = $('.menu_mobile');
  var overlay_menu = $('.overlay_menu');
  menu_mobile.css({
    'left': '-100%'
  });
  overlay_menu.css({
    'right': 'unset'
  });
});