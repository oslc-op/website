$(document).ready(function(){
  //Flag with the position which the page is currently at, 0 means top at the page.
  var scroll = 0;
  //adds a lower boundary (top of the page)
  var items = [
    {
      target: "",
      position: 0
    }
  ];
  //generates the nav items list based in the sub nav list itself, also storing the target's position in the page used for comparisons
  for (i = 0; i < $(".sub_nav--item").length; i++) {
    element = $(".sub_nav--item")[i];
    items.push (
      {
        target: element.hash,
        position: $(element.hash+"-anchor").offset().top - 100
      }
    )
  }

  //adds a upper boundary (bottom of the page)
  //the lower and upper boundary are necessary due to how we need to check the previous ou next element from the scroll position
  //without these extra boundaries we'd run into indexOutOfBounds issues.
  items.push (
    {
      target: "",
      position: 100000
    }
  )

  //subnav click listener
  $(".sub_nav--item").click(function(e) {
    if (this.hash !== "") {
      e.preventDefault();

      scrollTo(this.hash);
    }
  });

  //smooth scrolling function from clicking the subnav
  function scrollTo(target) {
    position = $(target+"-anchor").offset().top - 100;
    $('html, body').animate({
      scrollTop: position
    }, 500, function(){
      $(".sub_nav--item.active").removeClass('active');
      $(".sub_nav--item[href='"+target+"']").addClass('active');
    });
  }

  //scroll listener
  //this event will compare the current window position with the next or previous element in comparisson to the current active one
  //then toggle the right element in the nav accordingly
  $(window).scroll(function () {
    //if the position of the window surpased the next element
    if ($(window).scrollTop() > items[scroll+1].position) {
      console.log(scroll);
      if(scroll != items.length)
        scroll++;
      toggleNext();
      
    //if the position of the window is lower than the element
    } else if ($(window).scrollTop() < items[scroll-1].position) {
      if(scroll != 0)
        scroll--;
      toggleNext();
    }
  });

  //toggles the active class in the right elements
  function toggleNext() {
    $(".sub_nav--item.active").removeClass('active');
    $(".sub_nav--item:nth-child("+(scroll)+")").addClass('active');
  }
});