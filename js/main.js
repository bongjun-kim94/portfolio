$(function(){

    // 버거메뉴 contact 메뉴
    function contact(){
        var contactTop = $('.top_btn').offset().top + 300;
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

//모든 공백 체크 정규식
const empJ = /\s/g;

// 이름 정규식
const nameJ = /^[가-힣]{2,6}$/;

// 이메일 검사 정규식
const mailJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


