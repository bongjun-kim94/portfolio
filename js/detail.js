$(function(){

    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true
        // fade:true
        // autoplay:true,
        // autoplaySpeend:1500,
        // speend:1000
        // centerMode: true,
        // vertical: true
    });

    function detailScroll(){
        $(window).scroll(function() { 
            let scrollTop = $(this).scrollTop();
            let imgH = $('.mainImage > img').height() / 2;
            let textContent = $('.text_content2 > div').offset().top / 2;
            let projectF = $('.project_function').offset().top - 500;

            if(scrollTop >= imgH){
                $('.mainImage').addClass('animate__zoomIn');
            }
            if(scrollTop >= textContent){
                $('.text_content2 > div').addClass('animate__fadeIn');
            }
            if(scrollTop >= projectF){
                $('.project_function > h1').addClass('animate__fadeInUp');
                $('.project_function p').addClass('animate__fadeInUp');
                $('.project_function figcaption').addClass('animate__fadeInUp');
            }
            
            // $('.inner_02 > div').each(function(){
            //     var divOST = $(this).offset().top - 600;
            //     var divEffect = $(this).attr('data-effect');

                
            // });
            
            // if(scrollValue >= imgH - 600){
            //     $('.main_03 img').addClass('animate__fadeIn');
            // }
            
        });
    }
    detailScroll();

});
