$(document).ready(function() {
  $('.exampleDiv').css('background-color', 'lightgray');
  //attach click event to create button
  document.getElementById('create').addEventListener('click', function (evt) {
    createContent();
  });
  document.getElementById('change').addEventListener('click', function (evt) {
    changeContent();
  });
  document.getElementById('reset').addEventListener('click', function (evt) {
    reset();
  });
// creating function to create contents
  function createContent() {
    for (var i = 0; i < 5; i++) {
      $('.exampleDiv').append('<p>This is a paragraph ' + i +'.</p>');
    };
  };
//creating function to change contents
  function changeContent() {
    var newPar =$('<p>This is a new paragraph.</p>');
    $('p').html(newPar);
  }
// reset function
  function reset() {
    var parReset=$('');
    $('p').html(parReset);
  }
});
