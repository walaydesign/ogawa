// 深淺模式
const body = document.body;
const toggleText = document.getElementById("mode-toggle-text");
const textString = ["淺色模式", "深色模式"];

if (window.matchMedia('(prefers-color-scheme: light)').matches){
	// body.classList.toggle("dark-mode light-mode");
	$("body").removeClass("dark-mode").addClass("light-mode");
	toggleText.innerText = textString[1];
} else {
	// body.classList.toggle("light-mode dark-mode");
	$("body").removeClass("light-mode").addClass("dark-mode");
	toggleText.innerText = textString[0];
}

function toggleString() {
    toggleText.innerText = (toggleText.innerText === textString[0]) ? textString[1] : textString[0];
}

function toggleColorMode() {
	console.log("!!!");
	if($(body).hasClass("dark-mode")){
		// body.classList.toggle("light-mode");
		$("body").removeClass("dark-mode").addClass("light-mode");
	} else if($(body).hasClass("light-mode")) {
		// body.classList.toggle("dark-mode");
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

// popup
// $(".modal-backdrop").click(function() {
// 	$(".modal").removeClass("show");
// })


