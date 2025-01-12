// 深淺模式
const body = document.body;
// const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

// const iconString = ["light_mode", "dark_mode"];
const textString = ["Switch to Light Theme", "Switch to Dark Theme"];

// 套用初始文字
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
	// toggleIcon.innerText = iconString[0];
	toggleText.innerText = textString[0];
} else {
	// toggleIcon.innerText = iconString[1];
	toggleText.innerText = textString[1];
}

function toggleString() {
    // toggleIcon.innerText = (toggleIcon.innerText === iconString[0]) ? iconString[1] : iconString[0];
    toggleText.innerText = (toggleText.innerText === textString[0]) ? textString[1] : textString[0];
}

function toggleColorMode() {
	if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		body.classList.toggle("light-mode");
	} else if(window.matchMedia('(prefers-color-scheme: light)').matches) {
		body.classList.toggle("dark-mode");
	}
	toggleString();
}



