"use strict";

$(document).on("click", ".box_menu_respon", function (e) {
  $(".main_menu_respontive").addClass("active");
  $(".ovelay_menu").addClass("active");
});
$(document).on("click", ".ovelay_menu", function (e) {
  $(".ovelay_menu").removeClass("active");
  $(".main_menu_respontive").removeClass("active");
});
$(document).on("click", ".go_top", function (e) {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});
$(document).on("click", ".show_car_list .item_car_list .box_title_car", function (e) {
  var dataScroll = $(this).parent().attr("data_scoll");
  console.log(dataScroll);
  $(".show_car_list .item_car_list").removeClass("active");
  $(this).parent().addClass("active");
  var target = $("#data_scoll" + dataScroll);
  $("html, body").animate({
    scrollTop: target.offset().top
  }, 400);
});