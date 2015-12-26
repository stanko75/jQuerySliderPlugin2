/*global jQuery, document, setInterval*/
(function () {
    "use strict";
    var myJq = jQuery;
    myJq.getJSON("files.json", function (data) {
        data.forEach(function (file) {
            myJq("#imagesTrack").append('<img src="' + file + '">');
        });
        setInterval(function () {
            myJq("#imagesTrack").append('<img src="' + jQuery("img")[0].src + '">');
            myJq("img")[0].remove();
            myJq("img").eq(2).css("border", "14px solid #333");
            myJq("img").eq(1).css("border", "");
        }, 500);
    });
}());