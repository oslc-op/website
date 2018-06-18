window.fbAsyncInit = function () {
  FB.init({
    appId: '365334213915481',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.10'
  });
  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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