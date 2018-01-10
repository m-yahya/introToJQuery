$(document).ready(function() {
  $("#test1").click(function(){
      $("img").attr({"width":"500","height":"500" });
  });
  $("#test2").click(function(){
    // this will remove set attr and restore img to default
      $("img").removeAttr('height width');
  });
});
