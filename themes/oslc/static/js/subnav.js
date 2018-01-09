$(document).ready(function(){
  var scroll = 100;
  var nav = {items: []};
  for (i = 0; i < $(".sub_nav--item").length; i++) {
    element = $(".sub_nav--item")[i];
    nav.items.push (
      {
        target: element.hash,
        position: $(element.hash+"-anchor").offset().top - 100
      }
    )
  }

  if (location.hash) {
    for(i = 0; i < nav.items.length; i++) {
      if(location.hash == nav.items[i].target) {
        scrollTo(location.hash)
      }
    }
  }

  $(".sub_nav--item").click(function(e) {
    if (this.hash !== "") {
      e.preventDefault();

      scrollTo(this.hash);
    }
  });

  function scrollTo(target) {
    position = $(target+"-anchor").offset().top - 100;
    $('html, body').animate({
      scrollTop: position
    }, 500, function(){
      $(".sub_nav--item.active").removeClass('active');
      $(".sub_nav--item[href='"+target+"']").addClass('active');
      window.location.hash = target;
    });
    window.location.hash = target;
  }

  $(window).scroll(function () {
    if (scroll == 100) {
      if ($(window).scrollTop() > nav.items[0].position) {
        for(i = 0; i < nav.items.length; i++) {
          if (i == nav.items.length - 1) {
            if ($(".sub_nav--item.active").offset().top - 100 != $(".sub_nav--item:last-child").offset().top - 100) {
              $(".sub_nav--item.active").removeClass('active');
              $(".sub_nav--item:last-child").addClass('active');
              window.location.hash = $(".sub_nav--item:last-child").attr('href');
            }
            scroll = i;
          }else if ($(window).scrollTop() > nav.items[i].position && $(window).scrollTop() < nav.items[i+1].position) {
            scroll = i;
            if (nav.items[i].position != $(".sub_nav--item.active").offset().top - 100) {
              $(".sub_nav--item.active").removeClass('active');
              $(".sub_nav--item:nth-child("+(scroll+1)+")").addClass('active');
              window.location.hash = $(".sub_nav--item:nth-child("+(scroll+1)+")").attr('href');
            }
            break;
          }
        }
      }
    } else if ((scroll == nav.items.length-1) && ($(window).scrollTop() < nav.items[scroll].position)){
      $(".sub_nav--item:nth-child("+(scroll+1)+")").removeClass('active');
      $(".sub_nav--item:nth-child("+(scroll)+")").addClass('active');
      window.location.hash = $(".sub_nav--item:nth-child("+(scroll)+")").attr('href');
      scroll--;
    } else if ((scroll == 0) && ($(window).scrollTop() > nav.items[scroll+1].position)) {
      $(".sub_nav--item:nth-child("+(scroll+1)+")").removeClass('active');
      $(".sub_nav--item:nth-child("+(scroll+2)+")").addClass('active');
      window.location.hash = $(".sub_nav--item:nth-child("+(scroll+2)+")").attr('href');
      scroll++;
    } else {
      if ($(window).scrollTop() > nav.items[scroll+1].position) {
        $(".sub_nav--item:nth-child("+(scroll+1)+")").removeClass('active');
        $(".sub_nav--item:nth-child("+(scroll+2)+")").addClass('active');
        window.location.hash = $(".sub_nav--item:nth-child("+(scroll+2)+")").attr('href');
        scroll++;
      } else if ($(window).scrollTop() < nav.items[scroll].position){
        $(".sub_nav--item:nth-child("+(scroll+1)+")").removeClass('active');
        $(".sub_nav--item:nth-child("+(scroll)+")").addClass('active');
        window.location.hash = 'about';
        scroll--;
      }
    }
  });
});