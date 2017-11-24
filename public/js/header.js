$(document).ready(function(){
  $(".menu-button").click(function(e){
    e.preventDefault();
    $('.links').slideToggle();
  });
});