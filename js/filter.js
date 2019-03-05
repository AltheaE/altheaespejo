$(document).ready(function () {
$(function() {
  var selectedClass = "all";   
    $(".btn").click(function(){
      selectedClass = $(this).attr("data-rel");
      if (selectedClass != "all"){
        $(".btn--all").removeClass("btn--active");
      }
$("#portfolio").fadeTo(100, 0.1);
    $("#portfolio a").not("."+selectedClass).fadeOut();
setTimeout(function() {
  $("."+selectedClass).fadeIn();
  $("#portfolio").fadeTo(500, 1);
}, 500);
    
});
});
  });

