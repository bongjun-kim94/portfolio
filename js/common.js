$(function(){

    function inc(){
        // 헤더, 푸터 호출
        $('.header').load('inc.html .header > .inner_header');
        $('.footer').load('inc.html .footer > div');

        // function init(){
        //     $('.nav_menu a').on('click',function(){
        //         localStorage.pageNum = $(this).index();
        //     });

        //     $('.nav_menu a').eq(localStorage.pageNum).css({ "font-weight":"bold" });
        // }
    }
    inc();

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
    
    // 버거메뉴 contact 메뉴
    function contact(){
        var contactTop = $('.top_btn').offset().top + 100;
        console.log(contactTop);
        $(".contact_btn").click(function() {
            $('main').mCustomScrollbar(
                "scrollTo",
                contactTop,{
                scrollInertia:800
            });
            $('#menu').removeClass('overlay');
            $('#burger-menu').removeClass('close');
        });

        // top 버튼
        $('.top_btn').click(function(){
            $('main').mCustomScrollbar(
                "scrollTo",
                0,{
                scrollInertia:800
            });
        });
        
    }
    contact();

    // 메인페이지 mouseover시 gif 이미지 재생
    $(".hov-animation").mouseover(function() {
        $(this).attr("src", $(this).data("animated"))
    }),
    $(".hov-animation").mouseout(function() {
        $(this).attr("src", $(this).data("static"))
    });
    
    
});

