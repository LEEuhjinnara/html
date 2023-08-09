$(document).ready(function(){ 
 
    let winH = $(window).height();
    $('.visual').height(winH); // visual의 높이를 window의 높이로 설정
    console.log('window의 높이' + winH);

    $(window).resize(function(){ //브라우저가 리사이즈 될때마다 실행
        winH = $(window).height();
        $('.visual').height(winH); // visual의 높이를 window의 높이로 설정
        console.log('window의 높이' + winH);
    });

    const swiper = new Swiper(".visual .popup", {
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {
            el: ".visual .popup .swiper-pagination",
        },
    });

    $('.biz .list ul li').on('mouseenter', function(){
        $('.biz .list ul').addClass('over');
        $(this).addClass('active');
    });

    $('.biz .list ul li').on('mouseleave', function(){
        $('.biz .list ul').removeClass('over');
        $(this).removeClass('active');
    });

    $(".popup-btn").click(function(){
        $("#popup-view").show();
    });
    $(".btn_submit").click(function(){
        $("#popup-view").hide();
    });


});
