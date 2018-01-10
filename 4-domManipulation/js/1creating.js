$(document).ready(function() {
  // using append
  $('p').append('These are new contents.');
  // using appendTo (create contetns first)
  $('<h2>These are new contents.</h2>').appendTo('body');
  // inserting before
  $('<h2>These are inserted before.</h2>').prependTo('p');
  // insert before selected contents
  $('p').before('<p>the inserted before contetns</p>');
  $('<p>the inserted before in another way contetns</p>').insertBefore('p');
  // insert before selected contents
  $('h2').after('<p>the inserted after contetns</p>');
  $('<p>the inserted after in another way contetns</p>').insertAfter('h2');
  // changing position
  $('p:last').appendTo('p:first');
  $('p').after('**');
});
