$(function(){
    $(".gnb > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".gnb > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
})