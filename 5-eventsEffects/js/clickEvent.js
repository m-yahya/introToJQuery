// assigning click event to ul
$(document).ready(function() {
  //$('ul').mouseover(function() {
  //$('ul').mousemove(function() {
  //$('ul').mouseout(function() {
  //$('ul').hover(function() {
  $('ul').click(function() {
    //$('ul').css('color', 'green');
    $('ul').slideUp('slow');
  });
});
