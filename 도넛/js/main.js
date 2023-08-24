$(document).ready(function(){
    let winW=$(window).width()
    let docW=$(document).width()
    console.log(winW)
    console.log(docW)


    let swiper1 = new Swiper(".visual .popup", {
        autoplay: {
            delay:5000,
            disableOnlnteractive: true,
        },
        loop: true,
        pagination: {
            el: ".visual .popup .swiper-pagination",
        },
    });
    

    const myFullpage = new fullpage('#fullpage', {

        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['MAIN', 'STORE', 'BRAND', 'MENU', 'EVENT'],
        showActiveTooltip: false, 

        scrollOverflow: false, 

        afterLoad: function(origin, destination, direction, trigger){
            console.log(destination.index);
            if((destination.index == 2)||(destination.index == 3)||(destination.index == 4)||(destination.index == 5)){
                $('.header').addClass('black');
                $('#fp-nav').addClass('black');
            }else{
                $('.header').removeClass('black');
                $('#fp-nav').removeClass('black');
            }
            if(destination.index == 1){
                funCount();
            }
        },
        responsiveWidth: 640
    });

  

    function funCount(){
        console.log('카운팅동작');
        $('.count .rate li .num strong').counterUp({
            time: 1000
        });
    }

    const swiper = new Swiper('.menu .list', { 
    slidesPerView: 1, 
    spaceBetween: 16,
    breakpoints: {
        450: {    
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {    
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {   
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    pagination: {  
        el: '.btn_paging', 
        clickable: true,   
    },
});
});