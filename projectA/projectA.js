$(document).ready(function() {

    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    
    $("a.menuBT").click(function(){
        $(".menu").addClass("on");
        return false;
        // "a.closeBT"에 on클래스 추가/삭제    
    });
    $("a.closeBT").click(function(){
        $(".menu").removeClass("on");
    //     // "a.closeBT"에 on클래스 추가/삭제
    });


    // 서브메뉴열깅 
    $("ul.sub").hide();
    $(".menu1 > li > a").click(function() {
        $(this).addClass("on");
        $(".menu1 > li a").not(this).removeClass("on")        
         // .gnb에 on클래스 추가/삭제 
        

        $(this).next().slideToggle(1000);
         // 이것 요소를 슬라이드토글
        $(".menu1 > li > a").not(this).next().slideUp(800);
         // 이것이 아닐때 다른것들 슬라드업
        return false;
    });

    
});

