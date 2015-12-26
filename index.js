/*global jQuery, document, setInterval*/
(function () {
    "use strict";
    jQuery.getJSON("files.json", function (data) {
        data.forEach(function (file) {
            jQuery("#imagesTrack").append('<img src="' + file + '">');
        });
        setInterval(function () {
            jQuery("#imagesTrack").append('<img src="' + jQuery("img")[0].src + '">');
            jQuery("img")[0].remove();
            jQuery("img").eq(2).css("border", "14px solid #333");
            jQuery("img").eq(1).css("border", "");
        }, 500);
    });
}());