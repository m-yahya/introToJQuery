$(document).ready(function() {
  $('p').css('color','red');
  $('p[class]').css('color','red'); // select p that has class
  $('p[id]').css('color','red'); // select p that has id
  $('p[class=testClass1]').css('color','red'); // select p that has class 'testClass'
  // ^= looks for starts with
  $('p[class^=test]').css('color','red');
  $('p:contains("1")').css('color','red'); select p that has 1 in his text
});
