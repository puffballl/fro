var ding1 = document.getElementById('ding1');
var ding2 = document.getElementById('ding2');
var ding3 = document.getElementById('ding3');
var ding4 = document.getElementById('ding4');
var knop1 = document.getElementById('knop1');
var knop2 = document.getElementById('knop2');
var knop3 = document.getElementById('knop3');
var knop4 = document.getElementById('knop4');


ding1.parentNode.removeChild(ding1);
ding2.parentNode.removeChild(ding2);
ding3.parentNode.removeChild(ding3);
ding4.parentNode.removeChild(ding4);


knop1.addEventListener('click', function() {
    modaal.open(ding1);
});
knop2.addEventListener('click', function() {
    modaal.open(ding2);
});
knop3.addEventListener('click', function () {
    modaal.open(ding3);
});
knop4.addEventListener('click', function () {
    modaal.open(ding4);
});
