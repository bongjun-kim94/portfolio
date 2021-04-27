$(function(){

    function inc(){
        // 푸터 호출
        // $('.header').load('inc.html .header > .inner_header');
        $('.footer').load('footer.html .footer > div');
    }
    inc();

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
    
});
