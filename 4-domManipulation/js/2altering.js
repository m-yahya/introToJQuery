$(document).ready(function() {
  $('.exampleDiv').css('background-color','lightgray');
  //select paragraphs and wrap them into exampleDiv
  $('p').wrap("<div style='color:red'/>");
  // remove elements
  $('p.test1, p.test3').remove();
  // temporary remove elements
  $('p.test2, p.test5').detach();
  // replace contents
  $('<p class="test7">This is paragraph 7.</p>').replaceAll('p[class]');
  $('p[class]').replaceWith('<p class="test8">This is paragraph 8.</p>');
  // empty the div
  //$('.exampleDiv').empty();
});
