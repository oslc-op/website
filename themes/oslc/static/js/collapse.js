$(document).ready(function(){
  $(".collapse-toggle").click(function() {
    $($(this).attr('data-target')).slideToggle();
  });
});