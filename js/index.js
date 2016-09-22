
function Flake() {
    var f = document.createElement('img');
    var h = document.documentElement.clientHeight;
    var w = document.documentElement.clientWidth;
    var top = h * Math.random();
    var left = w * Math.random();

    f.src = 'flake.png';
    f.style.position = 'absolute';
    f.style.top = top + 'px';
    f.style.left = left + 'px';
    f.style.transform = 'scale(' + Math.random() / 2 + ')';

    document.body.appendChild(f);

    function down() {
        top += Math.random() * 10;
        left += Math.random() * 5;

        if (top > h) top = -100;
        if (left > w) left = -100;

        f.style.top = top + 'px';
        f.style.left = left + 'px';
    }

    setInterval(down, 50);
}

for (var i = 0; i < 50; i++) {
    new Flake();
}
// 选择页面中的所有的球
var divs = document.querySelectorAll('.ball')
// 获取屏幕的宽高
var width = document.body.clientWidth
var height = document.body.clientHeight
// console.log(width);
var ballWidth = 200;
for(var i = 0; i < divs.length; i++){
    var div = divs[i];
    // Math.random() 随即获取的一个数字 0到1之间
    div.style.top = (height - ballWidth)*Math.random() + 'px'
    div.style.left = (width - ballWidth)*Math.random() + 'px'
    var temColor = 360 * Math.random()
    // 改变随机颜色
    div.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')'
    // div.style.backgroundColor = 'hsl(' + temColor + ',70%,50%'
    // 改变随机角度
    div.style.transform =   'rotate(' + temColor + 'deg)'
}