// 客服頁面通知
$(".header_icon_bell").click(function() {
	$(".header_icon_notify").fadeIn(300);
})
$(document).click(function (event) {
    var notify = $(".header_notify");
    if (!notify.is(event.target) && notify.has(event.target).length === 0) {
		$(".header_icon_notify").fadeOut(300);
    }
});

// 訂單搜尋
$(".order-head_searchBtn").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".order-head_searchForm").slideUp(300);
    }else {
        $(this).addClass("active");
        $(".order-head_searchForm").slideDown(300);
    }
})

// 返回鍵
$(".btn-back").click(function() {
	history.back();
})

// 照片放大
var swiperPopup = new Swiper(".detail_pic-popup_swiper", {
    slidesPerView: 1,
    observeParents:true,
    observer:true,
    speed: 1000,
    navigation: {
      nextEl: ".detail_pic-popup-next",
      prevEl: ".detail_pic-popup-prev",
    },
})

$(".detail_pic-popup_bg").click(function() {
    $(this).parents(".detail_pic-popup").fadeOut(300);
})

// $(document).click(function (event) {
//     var notify = $(".detail_pic-popup_main");
//     if (!notify.is(event.target) && notify.has(event.target).length === 0) {
//         if($(".detail_pic-popup").hasClass("active")) {
//             $(".detail_pic-popup").fadeOut(300);            
//         }
//     }
// });

$(".detail_pic_item").click(function() {
    let index = $(this).index();
    $(".detail_pic-popup").fadeIn(300).addClass("active");
    swiperPopup.slideTo(index, 1000, true);
})
