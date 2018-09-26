(function () {
    var $selectedAll = $('.selected'),
    $selectedAllContent = $selectedAll.find('.selected__content'),
    $selectedAllClose = $selectedAll.find('.selected__close'),
    $links = $('.selection__link');

    $selectedAll.hide();
    $selectedAllContent.hide();

    $links.click(function (e) {
        e.preventDefault();
        var $that = $(this),
        href = $that.attr('href'),
        selection = $that.parents('[data-selection]').attr('data-selection'),
        $selected = $('[data-selected="'+ selection +'"]');

        $links.removeClass('selection__link--active').filter($that).addClass('selection__link--active');
        $selectedAll.hide();
        $selectedAllContent.hide().filter(href).show();
        $selected.show();
    });

    $selectedAllClose.click(function (e) {
        e.preventDefault();
        $(this).parents('[data-selected]').hide();
        $links.removeClass('selection__link--active');
    });
})();