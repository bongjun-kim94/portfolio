$(function(){

    // $("body").smoothWheel();

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
    // function scrollFixed(){
    //     $(window).scroll(function(){
    //         var scrollValue = $(this).scrollTop();
    //         var fixedLeft = $('.main_left').offset().top / 2;

    //         if(scrollValue >= fixedLeft){
    //             $('.main_left').addClass('scroll-fixed');
    //         }else{
    //             $('.main_left').removeClass('scroll-fixed');
    //         }
    //     });
    // }
    // scrollFixed();

    
    // function mainScroll(){
    //     $('body').height($('main').height());
        
    //     $(window).scroll(function(){
    //         var scrollTop = $(this).scrollTop();

    //         $('.main_contents').css({
    //             transform:'translateY('+ -scrollTop +'px)'
    //         });
    //         console.log(scrollTop);
    //     });
    // }
    // mainScroll();

    function contact(){
        // 버거메뉴 contact 메뉴
        // var scrollTop = $(this).scrollTop();
        var contactTop = $('.contact').offset().top + 100;
        console.log(contactTop);
        $(".contact_btn").click(function() {
            
            $('html, body').animate({
                scrollTop : contactTop
            }, 500);

            $('#menu').removeClass('overlay');
            $('#burger-menu').removeClass('close');
        });

        // top 버튼
        $('.top_btn').click(function(){
            $('html, body').animate({
                scrollTop : 0
            }, 500);
        });
        
    }
    contact();

    
});
