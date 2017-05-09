$(function(){
    $('.header .guide .project').hover(function(){
        $(this).find('.down_box').stop().slideDown(200);
    },function(){
        $(this).find('.down_box').stop().slideUp(100);
    });
}) 
$(function(){
    var img=['dist/images/banner01_bg.jpg','dist/images/banner02_bg.jpg','dist/images/banner01_bg.jpg'];
    index=0;
    $('.banner .btn_ban .ban_btn .btn_left').on('click',function(){
        index--;
        if(index<0){
            index=img.length-1;
        }
        bannerBg();
    });
    $('.banner .btn_ban .ban_btn .btn_right').on('click',function(){
        index++;
        if(index>img.length-1){
            index=0;
        }
        bannerBg();
    });
    $('.banner .btn_ban .ban_btn .btn_cen span').on('click',function(){
        index=$(this).index();
        bannerBg();
    });
    function bannerBg(){
        $('.banner .ban').attr('src',img[index]);
        $('.banner .btn_ban .ban_btn .btn_cen span').css({background:'#D6D8DF'});
        $('.banner .btn_ban .ban_btn .btn_cen span').eq(index).css({background:'#006FD6'});
    }
})