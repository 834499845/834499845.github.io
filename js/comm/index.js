$(function () {
    var typ = ["marginTop", "marginLeft", "marginTop", "marginBottom"], rangeN = 40;
    function shake() {
        var range = Math.floor(Math.random() * rangeN);
        var typeN = Math.floor(Math.random() * typ.length);
        var ss = typ[typeN];
        var obj = {};
        obj[ss] = range;
        $('#Me').animate(obj, 40)
    }
    setInterval(shake, 60);
})