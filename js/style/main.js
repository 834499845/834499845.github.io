$(function () {
    
    $('.nav').on('click', 'li', function () {
        $(this).find('a').css({
            color: "#e76f61",
            "font-size": "1.4rem"
        });
        $(this).siblings().find('a').css({
            color: "#856e44",
            "font-size": "1.2rem"
        });
    });
})

