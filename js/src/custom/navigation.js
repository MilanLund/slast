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
    $(window).scrollTo($(this).attr('href'), 250, {
      offset: 0
    });
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });
})();