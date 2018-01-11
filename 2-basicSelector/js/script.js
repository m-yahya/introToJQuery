$(document).ready(function() {
  // jQuery selectors
  $('*'); // select all
  $('div').css('background-color', 'lightgray'); // select by element tag
  $('h1').css('color', 'orange'); // select by element tag
  $('#idExample').css('color', 'blue'); // select by id
  $('.classExample').css('color', 'green'); // select by class
  /*$('tag.classExample') // select element that has classExample
  $('tag.#idExample'); // select element that has idExample*/
  // selecting all elements
  var element = $('*').length;
  // append the length to the body as heading 3
  $( "body" ).append( "<h3> There are " + element + " elements selected.</h3>" );
});
