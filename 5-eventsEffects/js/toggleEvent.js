// assigning click event
$(document).ready(function() {
  $('.menu1').click(function() {
    $('.sub1').toggle(1000,"linear");
  });
  $('.menu2').click(function() {
    $('.sub2').toggle(1000,"swing");
  });
  $('.menu3').click(function() {
    $('.sub3').toggle(1000,"linear");
  });
  $('.menu4').click(function() {
    $('.sub4').toggle(1000,"swing");
  });
  $('ul.menu > li').children().css('color','red');
  $('.sub1').children().css('color','blue');
  $('.sub2').children().css('color','gray');
  $('.sub3').children().css('color','orange');
  $('.sub4').children().css('color','green');
});
