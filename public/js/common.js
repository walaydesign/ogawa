// 深淺模式
const body = document.body;
const toggleText = document.getElementById("mode-toggle-text");
const textString = ["淺色模式", "深色模式"];

if (window.matchMedia('(prefers-color-scheme: light)').matches){
	$("body").removeClass("dark-mode").addClass("light-mode");
	toggleText.innerText = textString[1];
} else {
	$("body").removeClass("light-mode").addClass("dark-mode");
	toggleText.innerText = textString[0];
}

function toggleString() {
    toggleText.innerText = (toggleText.innerText === textString[0]) ? textString[1] : textString[0];
}

function toggleColorMode() {
	if($(body).hasClass("dark-mode")){
		$("body").removeClass("dark-mode").addClass("light-mode");
	} else if($(body).hasClass("light-mode")) {
		$("body").removeClass("light-mode").addClass("dark-mode");
	}
	
	toggleString();
}


// menu
$(".header_menu").click(function() {
	$(this).toggleClass("active");
	$(".header_nav").fadeToggle(300);
})

$(".header_nav_mode").click(function() {
	$(".header_menu").removeClass("active");
	$(".header_nav").fadeOut(300);
})


// 返回鍵
$(".header_back").click(function() {
	history.back();
})


// 數量選取
$(".num-box_btn").click(function() {
	let num = parseInt($(this).parents(".num-box").find(".num-box_num").text());
	if($(this).hasClass("minus")) {
		if(num > 0) {
			num--;
		}else {
			num = 0;
		}
	}else if($(this).hasClass("plus")) {
		num++;
	}
	$(this).parents(".num-box").find(".num-box_num").text(num);
})

// 任務展開收合
$(".task_list_head").click(function() {
	if($(this).parents(".task_list_item").hasClass("active")) {
		$(this).parents(".task_list_item").removeClass("active");
		$(this).parents(".task_list_item").find(".task_list_content").slideUp(300);
	}else {
		$(this).parents(".task_list_item").addClass("active");
		$(this).parents(".task_list_item").find(".task_list_content").slideDown(300);
	}
})



// 圖片放大
var swiper = new Swiper(".popup-pic_swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 800,
	observeParents:true,
	observer:true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
})


$(".detail_pic.view .detail_pic_item").click(function() {
	let picOrder;
	if($(this).parents(".detail_pic").hasClass("cooperate")) {
		picOrder = $(this).parents(".detail_pic_item-cooperate").index();
	}else {
		picOrder = $(this).index();
	}
	$(".popup-pic").show();
	swiper.slideTo(picOrder, 1000, true);
})

$(".popup-pic_bg").click(function() {
	$(".popup-pic").hide();
})


// 滾動
$(".detail_item-service_split").on("scroll", function() {
	$(this).parents(".detail_item-service").addClass("nomask");
})