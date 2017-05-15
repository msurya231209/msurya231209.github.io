/// <reference path="../Index.html" />

var mailURL = "https://mail.google.com/mail/u/0/#inbox?compose=new";
var facebookURL = "https://www.facebook.com/sharer/sharer.php";
var twitterURL = "https://twitter.com/intent/tweet";
var googlePlusURL = "https://plus.google.com/share";

url = "http://arcg.is/LrHvH"
urlLocal = "http://localhost:34129/"

document.getElementById("btnfb").onclick = function () {
    var fbfullurl = facebookURL + "?u=" + url;
    window.open(fbfullurl);
}
document.getElementById("btnTwitter").onclick = function () {
    var twfullurl = "https://twitter.com/intent/tweet?url=http://jsbin.com/bemutamojo/1/edit?output&text=MLB%20Ballparks%20by%20Payroll&hashtags=esriPIM";
    window.open(twfullurl);
}
document.getElementById("btnGplus").onclick = function () {
    var gpfullurl = googlePlusURL + "?url=" + url;
    window.open(gpfullurl);
}
document.getElementById("btnEmail").onclick = function () {
    //var link = <a href="mailto:narayanamodalavalasa@gmail.com?subject=The%20subject%20of%20the%20mail"></a>
    link = 'mailto:msurya231209@gmail.com?subject=The%20subject%20of%20the%20mail';
    //window.location.href = link;
    //window.open(window.location.href);
    window.location.href = link;
}
document.getElementById("btnLink").onclick = function () {
    window.open("http://localhost:34129/");
}