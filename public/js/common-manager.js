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


$(".announce-select_area").find(".input-chechbox").change(function() {
    if($(this).is(':checked')) {
        $(this).parents(".announce-select_item").find(".announce-select_name").find(".input-chechbox").prop("checked",true);
    }else {
        $(this).parents(".announce-select_item").find(".announce-select_name").find(".input-chechbox").prop("checked",false);
    }
})

$(".announce-select_title").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".announce-select_content").slideUp(300);
    }else {
        $(this).addClass("active");
        $(".announce-select_content").slideDown(300);
    }
})


$(".factory-manager_phone_add").click(function() {
    let phoneInfo = $("<div class='row'><div class='col-4'><input type='text' class='detail_item_input w-100' placeholder='請輸入門市'></div><div class='col-8'><input type='text' class='detail_item_input w-100' placeholder='請輸入電話'></div></div>");
    $(".factory-manager_phone").append(phoneInfo);
})

$(".order_detail_collaspe").find(".order_detail_report_title").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".order_detail_collaspe").find(".order_detail_report_content").slideUp(300);
    }else {
        $(this).addClass("active");
        $(this).parents(".order_detail_collaspe").find(".order_detail_report_content").slideDown(300);
    }
})


// 技師選擇
$(".technician-select-area").change(function() {
    if($(this).val() === "北北基") {
        $(this).parents(".technician-select-wrap").find(".technician-north").addClass("active").siblings(".technician-select").removeClass("active");
    }else if($(this).val() === "桃竹苗") {
        $(this).parents(".technician-select-wrap").find(".technician-taochumiao").addClass("active").siblings(".technician-select").removeClass("active");
    }else if($(this).val() === "中區") {
        $(this).parents(".technician-select-wrap").find(".technician-middle").addClass("active").siblings(".technician-select").removeClass("active");
    }else if($(this).val() === "南區") {
        $(this).parents(".technician-select-wrap").find(".technician-south").addClass("active").siblings(".technician-select").removeClass("active");
    }
})

// 關聯搜尋、模糊搜尋
$(".order-all-select").change(function() {
    if($(this).val() == "關聯搜尋") {
        $(".related-address").show();
        $(".related-phoneid").show();
        $(".blur-address").hide();
    }else if($(this).val() == "模糊搜尋") {
        $(".related-address").hide();
        $(".related-phoneid").hide();
        $(".blur-address").show();
    }
})
