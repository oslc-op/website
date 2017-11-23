$(document).ready(function(){
  $(".menu-button").click(function(e){
    e.preventDefault();
    $('.links').slideToggle();
  });
});

(function ($) {
  
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    // Prevent default anchor event
    e.preventDefault();

    var uri = this.attr('href');

    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
      strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
      objWindow = window.open(uri, strTitle, strParam).focus();
  }
  $(document).ready(function ($) {
    $('.customer.share').on("click", function (e) {
      $(this).customerPopup(e);
    });
  });

}($));