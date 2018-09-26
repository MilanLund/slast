(function () {
    if (localStorage) {
        if (localStorage.getItem('CookieBarHide') !== 'true') {
            var bar = '';
            
            if (window.location.pathname.toLowerCase() === '/en') {
                bar = '<div class="cookie-bar js-cookie-bar"><div class="cookie-bar__inner"><div class="cookie-bar__text">This site only saves small cookies that are necessary for the site to run and do not contain any personal data.</div><div class="cookie-bar__close js-cookie-bar__close">×</div></div></div>';
            } else {
                bar = '<div class="cookie-bar js-cookie-bar"><div class="cookie-bar__inner"><div class="cookie-bar__text">Tento web ukládá pouze malé cookies, které jsou nepostradatelné pro běh webu a&nbsp;neobsahují žádné osobní údaje.</div><div class="cookie-bar__close js-cookie-bar__close">×</div></div></div>';
            }
          document.querySelector('.footer').insertAdjacentHTML('afterend', bar);
        }
  
        var closeEl = document.querySelector('.js-cookie-bar__close');

        if (closeEl !== null) {
            closeEl.addEventListener('click', function () {
                var barEl = document.querySelector('.js-cookie-bar');
                barEl.parentNode.removeChild(barEl);
              localStorage.setItem('CookieBarHide', 'true');
            });
        }   
    }
})();
  