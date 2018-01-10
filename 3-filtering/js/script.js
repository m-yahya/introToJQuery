// jQuery eq selectors
$('.testClass:eq(0)').css('color', 'red');
// get the length of element according to the filter
var element = $( ".testClass" ).length;
// append the length to the body as heading 3
$( "body" ).append( "<h3> There are " + element + " elements selected.</h3>" );
// show the selected elements in console
var elementArray = $('div').find('li');
console.log(elementArray);
// alert($('div').text());

$('*'); // sellect all the element in DOM
$('.testClass'); // select all elements having specified class
// position filters
$('.testClass:eq(0)'); // select element equal to given index
$('.testClass:gt(0)'); // select element greatr than given index
$('.testClass:lt(5)'); // select element less than given index
$('.testClass:even'); // select even elements
$('.testClass:odd'); // select odd elements
$('.testClass:first'); // select first element
$('.testClass:last'); // select last element
$('li').prev(); // returns the previous li
$('li').next(); // returns the next li
$('li').parent(); // returns the ul
$('li').parents(); // returns all parents
$('ul').children(); // returns all children not grand children
$('div').find('li'); // returns specified search
