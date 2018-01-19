$(document).ready(function(){
  // Mobile header
  $(".menu-button").click(function(e){
    e.preventDefault();
    $('.links').slideToggle();
  });

  // Mobile tables
  if(innerWidth < 768) {
    var heads = $('table th');
    var rows = $('table tbody tr');

    for (i = 0; i < rows.length; i++) {
      for (h = 0; h < heads.length; h++) {
        var element = $(rows[i]).children()[h];
        var value = $(heads)[h];
        $(element).attr('data-title', value.innerHTML);
      }
    }
  }
});