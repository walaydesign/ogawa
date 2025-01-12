// 深淺模式
const body = document.body;
const toggleText = document.getElementById("mode-toggle-text");
const textString = ["淺色模式", "深色模式"];

if (window.matchMedia('(prefers-color-scheme: dark)').matches){
	toggleText.innerText = textString[0];
} else {
	toggleText.innerText = textString[1];
}

function toggleString() {
    toggleText.innerText = (toggleText.innerText === textString[0]) ? textString[1] : textString[0];
}

toggleColorMode();
function toggleColorMode() {
	if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		body.classList.toggle("dark-mode");
	} else if(window.matchMedia('(prefers-color-scheme: light)').matches) {
		body.classList.toggle("dark-mode");
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



