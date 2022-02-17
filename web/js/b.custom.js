"use strict";
function navigateToUrl(url) { window.location = (window.webBaseUrl || "") + url; }
function secondToPrint(dateTime) {
    var seconds = Math.round((Date.now() - dateTime.getTime()) / 1000)
    var print = [];
    var s = seconds % 60;
    if (s > 0) print.unshift(s + "sec");

    var minutes = (seconds - s) / 60;
    if (minutes < 1) return print.join(" ");

    var m = minutes % 60;
    if (m > 0) print.unshift(m + "mins");

    var h = (minutes - m) / 60;
    if (h < 1) return print.join(" ");

    if ((h % 24) > 0) print.unshift((h % 24) + "hrs");

    var d = (h - (h % 24)) / 24;
    if (d > 0) print.unshift(d + "days");

    return print.join(" ");
}
function formatDateStr(ewq) { return moment(ewq).calendar(); }

$(function ($) {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass("ti-control-skip-backward ti-control-skip-forward");
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) $('#back-to-top').fadeIn();
        else $('#back-to-top').fadeOut();
    });
    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
    // scroll to top End

    // fullscreen function
    $(".fullscreen").on('click', function () {
        if (document.webkitCurrentFullScreenElement == null) document.documentElement.webkitRequestFullScreen();
        else document.webkitCancelFullScreen();
    });
    $('*[data-href]').on('click', function () {
        navigateToUrl($(this).data("href"));
    });
    $('*[data-date-iso]').each(function () {
        var dateStr = $(this).data("dateIso")
        if (dateStr && $(this).data("dateIso").length > 0) $(this).text(formatDateStr(dateStr));
    });
});

function formattedNetAmount(order) { return formattedAmount(order.netAmount); }
function formattedAmount(amount) {
    if (amount == undefined) return ""
    var str = Number((amount).toFixed(2)).toLocaleString();

    if (str.charAt(str.length - 3) == ".") return str;
    if (str.charAt(str.length - 2) == ".") return str + "0";
    return str + ".00";
}

// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function deg2rad(deg) { return deg * (Math.PI / 180); }
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
        ((Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))) *
            (Math.sin(dLon / 2) * Math.sin(dLon / 2)));
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

function reload() { }