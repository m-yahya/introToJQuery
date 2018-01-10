// assigning click event
$(document).ready(function() {
  $('#show').click(function () {
    $('.exampleDiv').show('1000', 'swing');
  });
  $('#hide').click(function () {
    $('.exampleDiv').hide('1000', 'swing');
  });
  $('#toggle').click(function () {
    $('.exampleDiv').toggle('1000', 'swing');
  });
  $('.exampleDiv').css('background-color','lightgray')
});
