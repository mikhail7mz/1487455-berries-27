function addClass(className) {
  document.documentElement.classList.add(className);
}

check_webp_feature(function (isSupported) {
  if (isSupported) {
    return addClass("webp");
  }
  return addClass("fallback");
});

function check_webp_feature(callback) {
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(result);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
}
