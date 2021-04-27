$(function(){

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

});