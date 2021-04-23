$(function(){

    // function inc(){
    // // 헤더, 푸터 호출
    // $('.header').load('inc.html .header > div', init);
    // $('.footer').load('inc.html .footer p');

    //     function init(){
    //         $('.nav_menu a').on('click',function(){
    //             localStorage.pageNum = $(this).index();
    //         });

    //         $('.nav_menu a').eq(localStorage.pageNum).css({ "font-weight":"bold" });
    //     }
    // }
    // inc();

    //about 페이지 image fixed
    function scrollFixed(){
        $(window).scroll(function(){
            var scrollValue = $(this).scrollTop();
            var fixedLeft = $('.main_left').offset().top / 2;

            if(scrollValue >= fixedLeft){
                $('.main_left').addClass('scroll-fixed');
            }else{
                $('.main_left').removeClass('scroll-fixed');
            }
        });
    }
    scrollFixed();

    
    // function mainScroll(){
    //     $('body').height($('.main_contents').height());
        
    //     $(window).scroll(function(){
    //         var scrollTop = $(this).scrollTop();

    //         $('.main_contents').css({
    //             transform:'translateY('+ -scrollTop +'px)'
    //         });
    //         console.log(scrollTop);
    //     });
    // }
    // mainScroll();

    
});
