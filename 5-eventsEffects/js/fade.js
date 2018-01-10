// assigning click event
$(document).ready(function() {
  $('#show').click(function () {
    $('.exampleDiv').fadeTo('1000', 0.7);
  });
  $('#hide').click(function () {
    $('.exampleDiv').fadeTo('1000', 0.1);
  });
  $('.exampleDiv').css('background-color','lightgray')
});
