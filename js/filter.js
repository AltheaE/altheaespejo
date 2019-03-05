$(document).ready(function () {
$(function() {
  var selectedClass = "all";

   
    $(".btn").click(function(){
      if (selectedClass != "all"){
        $(".btn--all").removeClass("btn--active");
        console.log('hi');
      }
    selectedClass = $(this).attr("data-rel");
$("#portfolio").fadeTo(100, 0.1);
    $("#portfolio a").not("."+selectedClass).fadeOut();
setTimeout(function() {
  $("."+selectedClass).fadeIn();
  $("#portfolio").fadeTo(500, 1);
}, 500);
    
});
});
  });

