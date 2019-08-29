$(document).ready(function () {

  /* FOR STICKY NAV BAR */
  $('.js--section-features').waypoint(function (direction) {
    if (direction === "down") {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
      offset: '60px'
    })



  /* FOR SCROLLING TO SECTIONS FROM NAVBAR LINKS*/
  $(function () {
    $('a[href*="#"]:not([href="#"])')
      .click(function () {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
          &&
          location.hostname === this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000)
            return false;
          };
        }
      })
  })

  /* FOR ACCORDIAN MENUS FUNCTIONALITY*/
  $('.toggle').click(function (e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $(".plusminus").text('+');
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $(this).children(".plusminus").text('-');
    }
  });

})


