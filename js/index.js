/*global jQuery, document, setInterval*/
(function () {
    "use strict";
    var myJq = jQuery;
    myJq.getJSON("files.json", function (data) {
        data.forEach(function (file) {
            myJq("#imagesTrack").append('<img src="' + file + '" class="milosev">');
        });
        setInterval(function () {
            myJq("#imagesTrack").append('<img src="' + myJq(".milosev")[0].src + '" class="milosev">');
            myJq(".milosev")[0].remove();
            myJq(".milosev").eq(2).css("border", "14px solid #333");
            myJq(".milosev").eq(1).css("border", "");
        }, 500);
    });
}());