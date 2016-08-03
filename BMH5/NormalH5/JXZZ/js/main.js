var loadingImage = new Image();
loadingImage.src = "http://usr.im/300x300?bg=3498DB&text=LHZ";
loadingImage.onload = function() {
	resizeNew();
	$('.loadMask').hide();
};
setTimeout(function() {
	resizeNew();
	$('.loadMask').hide();
}, 500);
var isOk = false;
$(function() {
	var imgList = ['img/1.png'];
	var cantPush = false;
	$('img').each(function() {
		if ($(this).attr('data-src')) {
			cantPush = false;
			for (var j = 0; j < imgList.length; j++) {
				if (imgList[j] == $(this).attr('data-src')) {
					cantPush = true;
					break;
				}
			}
			var d = new Date().getTime();
			if (!cantPush) imgList.push($(this).attr('data-src'));
			$(this).attr('src', $(this).attr('data-src'));
		}
	});
	var imgNum = imgList.length;
	var MaxImgNum = imgList.length;
	var timer = setInterval(function() {
		for (var i = 0; i < imgList.length; i++) {
			var loadImg = new Image();
			loadImg.src = imgList[i];
			loadImg.onload = function() {
				loadImg.complete = true;
			};
			if (loadImg.complete) {
				imgList.splice(i, 1);
				imgNum--;
				$('#loading').find('p').find('span').html(parseInt((MaxImgNum - imgNum) / MaxImgNum * 100));
				$('.loadingInner').animate({
					'width': parseInt((MaxImgNum - imgNum) / MaxImgNum * 84) + '%'
				}, 10);
				$('.rocketBox').animate({
					'left': parseInt((MaxImgNum - imgNum) / MaxImgNum * 40) + 20 + '%'
				}, 10);
			}
		}
		if (imgNum <= 0) {
			clearInterval(timer);
			setTimeout(function() {
				loadingF();
			}, 100);
		}
	}, 50);
	setTimeout(function() {
		if (!isOk) {
			location.reload();
		}
	}, 10000);
});

function loadingF() {
	if (isOk) return false;
	isOk = true;
	$('.page1').show();
	$('#loading').fadeOut(300);
}
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

