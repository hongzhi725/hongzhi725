function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "MiuiBrowser"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
document.addEventListener("touchmove", function(n) {
	n.preventDefault();
}, false);
window.onresize = resizeNew;
var rem = 12;

function resizeNew() {
	if (document.documentElement.clientWidth / document.documentElement.clientHeight < 640 / 1008) {
		$('#mainBox').css({
			"width": document.documentElement.clientWidth + "px",
			"height": document.documentElement.clientWidth / 640 * 1008 + "px",
			"marginLeft": 0,
			"marginTop": (document.documentElement.clientHeight - document.documentElement.clientWidth / 640 * 1008) / 2 + "px"
		});
		rem = document.documentElement.clientWidth / 360 * 11;
		$('html').css({
			'fontSize': rem + 'px'
		});
		$('body').css({
			'fontSize': rem + 'px'
		});
	} else {
		$('#mainBox').css({
			"width": document.documentElement.clientHeight / 1008 * 640 + "px",
			"height": document.documentElement.clientHeight + "px",
			"marginTop": 0,
			"marginLeft": (document.documentElement.clientWidth - document.documentElement.clientHeight / 1008 * 640) / 2 + "px"
		});
		rem = document.documentElement.clientHeight / 504 * 8;
		$('html').css({
			'fontSize': rem + 'px'
		});
		$('body').css({
			'fontSize': rem + 'px'
		});
	}
}

function init() {
	var animating = false;
	var button = 'click';
	var isEnd = false,
		fristError = true;
	if (!isPC()) {
		button = 'tap';
	}
	$('.grades').children('img').hide();
//	alert('init');
	$('.button').on(button, function() {
//		alert('tap');
		if (animating) return false;
		animating = true;
		$('.page1').addClass('page_fade');
		setTimeout(function() {
			$('.page1').removeClass('pageActive');
			$('.page2').addClass('pageActive page_show');
			animating = false;
			setTimeout(function() {
				$('.page2').removeClass('page_show');
				$('.page1').removeClass('page_fade');
			}, 600);
		}, 600);
	});

	var gameNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var answer = [3, 1, 1, 1, 0, 1, 2, 1, 2, 1];
	var nowNum = parseInt(Math.random() * 10);
	var credit = 0;
	next();

	function next() {
		while (gameNum.indexOf(nowNum) < 0) {
			nowNum = parseInt(Math.random() * 10);
		}
		for (var i = 0; i < gameNum.length; i++) {
			if (gameNum[i] == nowNum) {
				gameNum.splice(i, 1);
			}
		}
		$('.game').children('div').fadeOut(600);
		setTimeout(function() {
			$('.text').children('div').eq(nowNum).fadeIn(600);
			$('.imgS').children('div').eq(nowNum).fadeIn(600);
			$('.answerBox').children('div').eq(nowNum).fadeIn(600);
		}, 600);
	}

	$('.answer').on(button, function() {
		if (animating || isEnd) return false;
		animating = true;
		setTimeout(function() {
			animating = false;
		}, 1200);
		if (gameNum.length > 0) {
			var choice=$(this).attr('data-num');
			if (answer[nowNum] == $(this).attr('data-num')) {
				$(this).addClass('answerRight');
				credit += 1;
				setTimeout(function() {
					next();
				}, 600);
				//答对：+分，并显示对应选项提示：
//				credit += 1;
//				$('.errorBox').show();
//				$(this).parent().children('.answer').hide();
//				console.log('choice is '+choice);
//				$(this).parent().children('.answer').eq(choice).show().addClass('answerTop');
//				setTimeout(function() {
//					console.log('序号：'+nowNum);
//					$('.rightB').children('div').eq(0).fadeIn(300);
//					console.log($('.rightB').children('div').eq(0));
			} else {
				$('.errorBox').show();
				if (fristError) {
					fristError = false;
					setTimeout(function() {
						$('.tips').show();
						setTimeout(function() {
							$('.tips').hide();
						}, 3000);
					}, 1000);
				}
				$(this).parent().children('.answer').hide();
				$(this).parent().children('.answer').eq(answer[nowNum]).show().addClass('answerTop');
				setTimeout(function() {
					console.log('nowNum[题号]:'+nowNum+' [tips：从0开始，记得加1]');
					console.log('choice[选择]:'+choice+' [tips：从0开始，记得加1]');
					$('.Answertips').children('div').eq(nowNum).children('img').eq(choice).fadeIn(300);
				}, 300);
			}
		} else {
			isEnd = true;
			if (answer[nowNum] == $(this).attr('data-num')) {
				$(this).addClass('answerRight');
				credit += 1;
				setTimeout(function() {
					goEnd();
				}, 600);
			} else {
				$('.errorBox').show();
				$(this).parent().children('.answer').hide();
				$(this).parent().children('.answer').eq(answer[nowNum]).show().addClass('answerTop');
				setTimeout(function() {
					$('.rightA').children('div').eq(nowNum).fadeIn(300);
					setTimeout(function() {
						$('.errorBox').hide();
						goEnd();
					}, 900);
				}, 300);
			}
		}
	});

	function goEnd() {
		changeTitle(credit);
		console.log(credit);
		$('.grades').children('img').eq(credit).show();
		$('.page2').addClass('page_fade');
		setTimeout(function() {
			$('.page2').removeClass('pageActive');
			$('.page3').addClass('pageActive page_show');
			setTimeout(function() {
				$('.page2').removeClass('page_fade');
				setTimeout(function() {
					$('.page3').removeClass('page_show');
				}, 300);
			}, 300);
		}, 600);
	}

	$('.errorBox').on(button, function() {
		if (animating || isEnd) return false;
		animating = true;
		setTimeout(function() {
			animating = false;
		}, 600);
		next();
		$('.errorBox').hide();
		$('.tips').hide();
	});

	$('.button2').on(button, function() {
		$('.share_mask').show();
	});

	$('.share_mask').on(button, function() {
		$('.share_mask').hide();
	});

	$('.button1').on(button, function() {
		gameNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		answer = [3, 1, 1, 1, 0, 1, 2, 1, 2, 1];
		nowNum = parseInt(Math.random() * 10);
		credit = 0;
		isEnd = false;
		$('.answer').show();
		$('.answerRight').removeClass('answerRight');
		$('.rightA').children('div').hide();
		//
//		$('.Answertips').children('div').hide();
		
		//
		$('.page3').addClass('page_fade');
		$('.answerTop').removeClass('answerTop');
		$('.text').children('div').hide();
		$('.imgS').children('div').hide();
		$('.answerBox').children('div').hide();
		setTimeout(function() {
			$('.page3').removeClass('pageActive');
			$('.page1').addClass('pageActive page_show');
			setTimeout(function() {
				$('.page3').removeClass('page_fade');
				$('.grades').children('img').hide();
				next();
			}, 600);
		}, 600);
	});
}