$(document).ready(function () {
  var nav = { items: [] };
  if (!$(".main-header").hasClass("alt")) {
    for (i = 0; i < $(".nav--item").length; i++) {
      element = $(".nav--item")[i];
      if (element.hash.charAt(0) == "#") {
        nav.items.push({
          target: element.hash,
          position: $(element.hash + "-anchor").offset().top - 80,
        });
      }
    }

    if (location.hash) {
      for (i = 0; i < nav.items.length; i++) {
        if (location.hash == nav.items[i].target) {
          scrollTo(location.hash);
        }
      }
    }

    $(".nav--item").click(function (e) {
      if (this.hash !== "") {
        e.preventDefault();

        scrollTo(this.hash);
      }
    });

    $(".section--button").click(function (e) {
      if (this.hash !== "") {
        e.preventDefault();

        scrollTo(this.hash);
      }
    });
  }

  function scrollTo(target) {
    position = $(target + "-anchor").offset().top - 80;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      500,
      function () {
        window.location.hash = target;
      }
    );
    window.location.hash = target;
  }
});
