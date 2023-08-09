$(document).ready(function(){

    let winW = $(window).width();
    let pcMobile; //현재 pc모드인지 mobile모드인지 저장하는 변수

    if(winW > 640){
        pcMobile = 'pc';
        console.log(pcMobile);
    }else{
        pcMobile = 'mobile';
        console.log(pcMobile);
    }

    $(window).resize(function(){
        winW = $(window).width();
        if(winW > 640){
            pcMobile = 'pc';
            console.log(pcMobile);
        }else{
            pcMobile = 'mobile';
            console.log(pcMobile);
        }
    });

    $('.header .lang .open').on('click', function(){
        $('.header .lang').addClass('lang_open');
    });
    $('.header .lang .close').on('click', function(){
        $('.header .lang').removeClass('lang_open');
    });

    $('.header .gnb > ul > li > a').on('mouseenter focusin', function(){
        if(pcMobile == 'pc'){
            $('.header').addClass('menu_open');
        }
    });
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open');
    });
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open');
    });

    $('.header .gnb .open').on('click', function(){
        if(pcMobile == 'mobile'){
            $('.header').addClass('menu_mobile');
        }
    });
    $('.header .gnb .close').on('click', function(){
        $('.header').removeClass('menu_mobile');
    });

    $('.header .gnb > ul > li > a').on('click', function(e){
        if(pcMobile == 'mobile'){
            e.preventDefault(); 
            /* 1차메뉴를 클릭했을때 a href로 페이지가 이동하는 현상을 막기 */
            $(this).parents('li').toggleClass('sub_open');
        }
    });

    $('.footer .family .btn_open').on('click', function(){
        $('.footer .family').addClass('open');
    });

    $('.footer .family .btn_close').on('click', function(){
        $('.footer .family').removeClass('open');
    });

});
