preload();
audioAutoPlay('music');
window.onload = function(){
	init_globe();
}
function init_globe() {
	var returnid = setInterval(function() {
		if(window.globe == 1) {
			console.log('已加载完成！！！！！！');
			clearInterval(returnid);
			init();
			$('#loading').css('display', 'none');
		} else {
			//			console.log(globe);
		}
	}, 500)

}

function init() {
	setJSAPI();
	Snow();
	musicplay();
	Setnewyearscontent();
	Getinputword();
	HideE();
	$('#bg02').css('display', 'block');
	$('#bg03').css('display', 'block');
	$('#rocket').css('display', 'block');
	$('#bg02').animateCss('fadeInUp', '1s', '0.25s', '1', true);
	$('#bg03').animateCss('fadeInUp', '1s', '.75s', '1', true);
	$('#rocket').animateCss('fadeInUp', '1s', '1.25s', '1', true);

	$('#rocket').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.moonbg').css('display', 'block');
		$('.cloud3').css('display', 'block');
		$('.star1p').css('display', 'block');
		$('.star2p').css('display', 'block');
		$('.star3p').css('display', 'block');
		$('.star4p').css('display', 'block');
		$('.moonbg').animateCss('fadeInUp', '1s', '0s', '1', true);
		$('.cloud3').animateCss('fadeInRight', '1s', '0s', '1', true);
		$('.star1p').animateCss('fadeInUp', '1s', '0.1s', '1', true);
		$('.star2p').animateCss('fadeInUp', '1s', '0.3s', '1', true);
		$('.star3p').animateCss('fadeInUp', '1s', '0.2s', '1', true);
		$('.star4p').animateCss('fadeInUp', '1s', '0.1s', '1', true);
		$('.star1p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.star1p').animateCss('starscale', '2s', '0s', 'infinite', true);
		})
		$('.star2p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.star2p').animateCss('starscale2', '3s', '0s', 'infinite', true);
		})
		$('.star3p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.star3p').animateCss('starscale3', '2s', '0s', 'infinite', true);
		})
		$('.star4p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.star4p').animateCss('starscale4', '3s', '0s', 'infinite', true);
		})
		$('.moonbg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.moonbg').animateCss('float', '2s', '0s', 'infinite', true);
			$('.cloud1').animateCss('float2', '3s', '0s', 'infinite', true);
			$('.cloud2').animateCss('float3', '3s', '0s', 'infinite', true);
			$('.cloud3').animateCss('float2', '3s', '0s', 'infinite', true);
			$('.showword2017').css('display', 'block');
			$('.circle_group1').css('display', 'block');
			$('.circle_group2').css('display', 'block');
			$('.word_newyear').css('display', 'block');
			$('.content_newyear').css('display', 'block');
			$('.bmp').css('display', 'block');
			$('#word_2').animateCss('bounceIn', '1s', '0s', '1', true);
			$('#word_0').animateCss('bounceIn', '1s', '0.05s', '1', true);
			$('#word_1').animateCss('bounceIn', '1s', '0.1s', '1', true);
			$('#word_7').animateCss('bounceIn', '1s', '0.15s', '1', true);
			//			小圆圈动画
			$('.circle1').animateCss('fadeInLeft', '1s', '0.2s', '1', true);
			$('.circle2').animateCss('fadeInLeft', '1s', '0.225s', '1', true);
			$('.circle3').animateCss('fadeInLeft', '1s', '0.25s', '1', true);
			$('.circle4').animateCss('fadeInRight', '1s', '0.2s', '1', true);
			$('.circle5').animateCss('fadeInRight', '1s', '0.225s', '1', true);
			$('.circle6').animateCss('fadeInRight', '1s', '0.25s', '1', true);
			$('.word_newyear').animateCss('bounceIn', '1s', '.25s', '1', true);
			$('.content_newyear').animateCss('bounceIn', '1s', '.25s', '1', true);
			$('.bmp').animateCss('bounceIn', '1s', '.25s', '1', true);
			$('.bmp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.caidan').css('display', 'block');
				$('.caidan').animateCss('CaidanFadeIn', '5s', '.25s', 'infinite', true);
			})
		})
	})
	$('.caidan').click(function() {
		location.href = "http://mallapi.bluemoon.com.cn/webApp/#/home";
	})
}

function HideE() {
	$('#bg02').css('display', 'none');
	$('#bg03').css('display', 'none');
	$('#rocket').css('display', 'none');
	$('.moonbg').css('display', 'none');
	$('.cloud3').css('display', 'none');
	$('.star1p').css('display', 'none');
	$('.star2p').css('display', 'none');
	$('.star3p').css('display', 'none');
	$('.star4p').css('display', 'none');
	//2017隐藏
	$('.circle_group1').css('display', 'none');
	$('.circle_group2').css('display', 'none');
	$('.showword2017').css('display', 'none');
	$('.word_newyear').css('display', 'none');
	$('.content_newyear').css('display', 'none');
	$('.bmp').css('display', 'none');
	$('.caidan').css('display', 'none');
}

function Getinputword() {
	//	$('textarea[name="input"]').css('background','blue');
	//1.获取内容，存为数组。2.将每一行内容夹在div中
	$('.confirm').click(function() {
		var text = $('textarea[name="input"]').val();
		var array_text = text.split("\n");
		var new_text = "";
		for(i = 0; i <= array_text.length - 1; i++) {
			if(i == 0) {
				new_text = array_text[0];
			} else {
				new_text = new_text + '<br>' + array_text[i];
			}
		}
		if(array_text.length >= 3) {
			$('.content_word2').css('display', 'block');
		} else {
			$('.content_word2').css('display', 'table-cell');
		}
		console.log(new_text);
		$('.content_word2').html(new_text);
		//隐藏输入框
		$('.mask').css('display', 'none');
		$('.inputarea').css('display', 'none');
	})
	$('.cancel').click(function() {
		//隐藏输入框
		$('.mask').css('display', 'none');
		$('.inputarea').css('display', 'none');
	})
	$('.content_newyear').click(function() {
		var text = $('.content_word2').html();
		console.log(text);
		var array_text = text.split("<br>");
		var new_text = "";
		for(i = 0; i <= array_text.length - 1; i++) {
			if(i == 0) {
				new_text = array_text[0];
			} else {
				new_text = new_text + '\n' + array_text[i];
			}
		}
		$('textarea[name="input"]').val(new_text);
		$('.mask').css('display', 'block');
		$('.inputarea').css('display', 'block');
		$('#textarea').focus();
	})
}
//获取网页传参
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return r[2];
	return null;
}

function Setnewyearscontent() {
	var content = decodeURI(GetQueryString("ct"));
	if(content != 'null' && content != "") {
		//		console.log(content);
		var array = content.split("<br>");
		//		console.log('数组长度'+array.length);
		if(array.length >= 3) {
			$('.content_word2').css('display', 'block');
		} else {
			$('.content_word2').css('display', 'table-cell');
		}
		$('.content_word2').html(content);
	}
}

function musicplay() {
	//右上角音乐按钮监听
	//用来监听按钮触发效果.Start
	//		document.body.addEventListener('touchstart', function() {});
	//用来监听按钮触发效果.End
	var a = $('audio').get(0);
//	var a=document.getElementById('music');
//	audioAutoPlay('music');
	a.play();
	$('.music').click(function() {
		console.log('you touch the button');
		if(a.paused) {
			a.play();
			$(this).removeClass('paused');
		} else {
			a.pause();
			$(this).addClass('paused');
		}
	});
}

function audioAutoPlay(id) {
	var audio = document.getElementById(id);
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function() {
		audio.play();
	}, false);
}

function Snow() {
	$(document).snowfall('clear');
	$(document).snowfall({
		image: "img/snow.png",
		flakeCount: 10,
		minSize: 3,
		maxSize: 30
	});
}
//动画自定义
$.fn.extend({
	animateCss: function(animationName, duration, delay, count, play) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.css('animate-duration', duration);
		this.css('-webkit-animation-duration', duration);
		this.css('-moz-animation-duration', duration);
		this.css('-o-animation-duration', duration);
		this.css('-ms-animation-duration', duration);
		this.css('animate-delay', delay);
		this.css('-webkit-animation-delay', delay);
		this.css('-moz-animation-delay', delay);
		this.css('-o-animation-delay', delay);
		this.css('-ms-animation-delay', delay);
		this.css('animate-iteration-count', count);
		this.css('-webkit-animation-iteration-count', count);
		this.css('-moz-animation-iteration-count', count);
		this.css('-o-animation-iteration-count', count);
		this.css('-ms-animation-iteration-count', count);
		this.addClass('animated ' + animationName).one(animationEnd, function() {
			if(play == true) {
				$(this).removeClass('animated ' + animationName);
			} else {
				console.log('没有撤走class')
			}
		});
	}
});