var n = 1, c = 0;
(function(a) {
    var b = function() {
        n-- && h();
    }();
    function h() {
        b && c++;
    }
    h(b = 1);
})();
console.log(c);
