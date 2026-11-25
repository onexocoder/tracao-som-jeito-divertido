(function () {
  var allowedParams = new Set([
    "src",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
  ]);

  function checkoutUrlWithAttribution(href) {
    var checkoutUrl = new URL(href, window.location.href);
    var pageParams = new URLSearchParams(window.location.search);

    pageParams.forEach(function (value, key) {
      if (allowedParams.has(key) && value) {
        checkoutUrl.searchParams.set(key, value);
      }
    });

    return checkoutUrl.toString();
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest('a[href*="pay.cakto.com.br"]');
      if (!link) return;

      link.href = checkoutUrlWithAttribution(link.href);
    },
    true,
  );
})();
