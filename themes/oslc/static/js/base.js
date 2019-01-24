$(document).ready(function (){
  // Mobile header
  $(".menu-button").click(function (e){
    e.preventDefault();
    $('.links').slideToggle();
  });

  // Mobile tables
  if(innerWidth < 768) {

    //Stores all the tables from the page
    var tables = $('table');

    //Table loop
    for(t = 0; t < tables.length; t++){
      var table = tables[t]; //Assigns the table of index
      var heads = $(table).children('thead').children('tr').children('th'); //Stores all the table column title elements
      var rows = $(table).children('tbody').children('tr'); //Stores all the table rows from the table body

      //Iterates through all rows
      for (i = 0; i < rows.length; i++) {
        //For each column in this table
        for (h = 0; h < heads.length; h++) {
          var element = $(rows[i]).children()[h]; //grabs the table cell of [h](column index)
          var value = $(heads)[h]; //grabs the element with the title of [h]
          $(element).attr('data-title', value.innerHTML); //assigns the attribute 'data-title' with the title of that column
        }
      }
    }
  }

  // scroll initializer 
  if($(window).scrollTop() > 0) {
    $("body").addClass("scrolled");
  }
  // scroll listener
  $(window).scroll(function () {
    console.log("scrolling" + scroll);
    if($(window).scrollTop() > 0) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });
});