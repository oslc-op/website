$(document).ready(function(){
  $(".menu-boton").click(function(e){
    e.preventDefault();
    $('.links').slideToggle();
  });
});
