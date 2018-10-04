(function () {
  var $trigger = $('[href="#nav"]'),
    $nav = $('#nav');

  $trigger.on('click', function (e) {
    e.preventDefault();
    $nav.toggleClass('navigation__list--active');
    $trigger.toggleClass('navigation__trigger--active');
  });

  $('#nav-close').on('click', function (e) {
    e.preventDefault();
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });

  $('[href*="#"]:not([href*="#nav"], .selection__link)').on('click', function () {
    $('img').each(function () {
      var $that = $(this);
      if($that.attr('data-src')) {
        $that.attr('src', $that.attr('data-src'));
      }
    });

    setTimeout(function () {
      $(window).scrollTo($(this).attr('href'), 250, {
        offset: 0
      });
    }, 100);
    
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });
/*
  $('html').click(function () {
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });

  $('#navigation').click(function (event) {
    event.stopPropagation();
  });*/
})();