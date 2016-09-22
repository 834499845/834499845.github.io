
var txt = document.querySelector('#seek');

var last = document.querySelector('#last')

var datas = [{
    image: 01,
    name: '红米Note4'
}, {
    image: 02,
    name: '红米Pro'
}, {
    image: 03,
    name: '小米Max'
}, {
    image: 04,
    name: '分体电视'
}, {
    image: 05,
    name: '小米盒子'
}];

txt.onkeyup = function (e) {
    console.log(txt.value);
    var txtStr = txt.value;
    var result = datas.filter(function(item){
        if(item.name.toLowerCase().indexOf(txtStr.toLowerCase()) > -1){
            return item;
        }
    });
    var strHtml = '';
    result.forEach(function(item){
        strHtml += '<li>' + '<img ' + 'src="images/' + item.image + '.jpg"' + '>' + item.name + '</li>';
    });
    last.innerHTML = strHtml;
}