
function isPC() {
	var a = navigator.userAgent;
	var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "MiuiBrowser"];
	var c = true;
	for (var v = 0; v < b.length; v++) {
		if (a.indexOf(b[v]) > 0) {
			c = false;
			break;
		}
	}
	return c;
}
document.addEventListener("touchmove", function(n) {
	n.preventDefault()
}, false);
window.onresize = resizeNew;
function resizeNew() {
	if (document.documentElement.clientWidth / document.documentElement.clientHeight < 640 / 1024) {
		$('#mainBox').css({
			"width": document.documentElement.clientWidth + "px",
			"height": document.documentElement.clientWidth / 640 * 1024 + "px",
			"marginLeft": 0,
			"marginTop": (document.documentElement.clientHeight - document.documentElement.clientWidth / 640 * 1024) / 2 + "px"
		});
		$('html').css({
			'fontSize': document.documentElement.clientWidth / 360 * 11 + 'px'
		});
		$('body').css({
			'fontSize': document.documentElement.clientWidth / 360 * 11 + 'px'
		})
	} else {
		$('#mainBox').css({
			"width": document.documentElement.clientHeight / 1024 * 640 + "px",
			"height": document.documentElement.clientHeight + "px",
			"marginTop": 0,
			"marginLeft": (document.documentElement.clientWidth - document.documentElement.clientHeight / 1024 * 640) / 2 + "px"
		});
		$('html').css({
			'fontSize': document.documentElement.clientHeight / 504 * 9 + 'px'
		});
		$('body').css({
			'fontSize': document.documentElement.clientHeight / 504 * 9 + 'px'
		})
	}
}

