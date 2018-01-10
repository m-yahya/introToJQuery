// assigning click event
$(document).ready(function() {
  $('#slideDown').click(function () {
    $('img').slideDown('5000');
  });
  $('#slideUp').click(function () {
    $('img').slideUp('5000');
  });
  $('#toggle').click(function () {
    $('img').toggle('5000');
  });
  $('.exampleDiv').css('background-color','lightgray')
});
