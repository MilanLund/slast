(function () {
  var $trigger = $('.navigation__trigger'),
    $nav = $('.navigation__list');

  $trigger.on('click', function (e) {
    e.preventDefault();
    $nav.toggleClass('navigation__list--active');
    $trigger.toggleClass('navigation__trigger--active');
  });

  $('[href*="#"]:not([href*="#nav"], .selection__link)').on('click', function () {
    $(window).scrollTo($(this).attr('href'), 200, {
      offset: 0
    });
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });

  $('html').click(function () {
    $nav.removeClass('navigation__list--active');
    $trigger.removeClass('navigation__trigger--active');
  });

  $('#navigation').click(function (event) {
    event.stopPropagation();
  });
})();