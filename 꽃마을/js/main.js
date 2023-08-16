$(document).ready(function() {
    let winW=$(window).width()
    let docW=$(document).width()
    console.log(winW)
    console.log(docW)



    $('aside button').on('click',function() {
        $('html,body').animate({
            scrollTop : 0
        },500) 
    }) 

    
    let scrolling
    $(window).scroll(function() {
        headerFixed()
    })

    function headerFixed(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0) {
            $('header').addClass('fixed')
        } else {
            $('header').removeClass('fixed')
        }
    } 
    let swiper = new Swiper(".visual .popup",{
        autoplay: { 
           delay:5000,
           disableOnlnteractive: true,
        },
        loop: true,
        pagination: {
           el: ".visual .popup .swiper-pagination",
        },
    }); 

})