
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