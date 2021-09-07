$(document).ready(function() {

    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    $("a.menuBT").click(function() {
        $(".menu").addClass("on");
        return false;
        // "a.closeBT"에 on클래스 추가/삭제    
    });
    $("a.closeBT").click(function() {
        $(".menu").removeClass("on");
        //     // "a.closeBT"에 on클래스 추가/삭제
    });


    // 서브메뉴열깅 
    $("ul.sub").hide();
    $(".menu1 li > a").click(function() {
        $(this).addClass("on");
        $(".menu1 > li a").not(this).removeClass("on")
        // .gnb에 on클래스 추가/삭제 


        $(this).next().slideToggle(1000);
        // 이것 요소를 슬라이드토글
        $(".menu1 li > a").not(this).next().slideUp(800);
        // 이것이 아닐때 다른것들 슬라드업
        return false;
    });

    // ----------------------------탭 클릭시 애니메이션-------------------------
    

    $(function () {

        // $(".conBox").hide();
        // $(".snb div:first").show();
    
        $("ul.tab li").click(function () {
            $(".conBox").hide();
            $("ul.tab li").removeClass("active")
            //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
            $(this).addClass("active")
            // $(".conBox").hide()
            // $(".conBox").not(this).hide()
            var activeTab = $(this).attr("rel");
            // $('#' + activeTab).addClass('active').siblings().removeClass('active');
            $('#' + activeTab).fadeIn(500).siblings().fadeOut(300);
            $('li[data-id="'+activeTab+'"]').fadeIn(500).siblings().fadeOut(300);
        });
    });
    //타 페이지에서 해시를 찾아 이동
	
    if (location.hash == "#tag8"){
        $('.tab').find('li').eq(0).addClass('active').siblings().removeClass('active');
		$('#tab8').addClass('active').siblings().removeClass('active');
        $('.mal').find('[data-id=tab8]').addClass('active').siblings().removeClass('active');
    } 
    else if(location.hash == "#tag9"){
        $('.tab').find('li').eq(1).addClass('active').siblings().removeClass('active');
		$('#tab9').addClass('active').siblings().removeClass('active');
        $('.mal').find('[data-id=tab9]').addClass('active').siblings().removeClass('active');
    }
    else if(location.hash == "#tag10"){
        $('.tab').find('li').eq(2).addClass('active').siblings().removeClass('active');
		$('#tab10').addClass('active').siblings().removeClass('active');
        $('.mal').find('[data-id=tab10]').addClass('active').siblings().removeClass('active');
    }
    else if(location.hash == "#tag11"){
        $('.tab').find('li').eq(3).addClass('active').siblings().removeClass('active');
		$('#tab11').addClass('active').siblings().removeClass('active');
        $('.mal').find('[data-id=tab11]').addClass('active').siblings().removeClass('active');
    } 

});
