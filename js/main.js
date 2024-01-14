// 헤더 a태그 부분
$('header nav ul li > a').click(function(){
    $('html, body').stop ().animate ({scrollTop :$($.attr (this , 'href')).offset().top },500 );
    return false ;
});

// 헤더 스크롤 부분
$(window).scroll(function(e){
    if($(this).scrollTop() > 800){
        $('header').css('background-color','#fff').css('box-shadow',"1px 1px 2px #046271");
    } else {
        $('header').css('background-color','transparent').css('box-shadow',"none");
    }
});

//other photo부분
function changImg(){
    let imgsrc = this.src;
    document.querySelector('#big').src = imgsrc;
};
let smallImgs = document.querySelectorAll('.small');
for(i = 0; i < smallImgs.length; i++){
    smallImgs[i].addEventListener('click', changImg);
};

//Top 버튼
$('aside').click(function(){
    $('html, body').stop().animate({scrollTop:0},1000);
});

$(document).ready(function(){
    $('aside').hide();
});
$(window).scroll(function(e){
    if($(this).scrollTop() > 800){
        $('aside').fadeIn();
    } else {
        $('aside').fadeOut();
    }
});