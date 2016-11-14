//MADE BY COOKIE
var globe;
//预加载
//preload();
init();
//用来监听按钮触发效果.Start
document.body.addEventListener('touchstart', function() {});
//用来监听按钮触发效果.End
function init() {
	preload();
	var returnid = setInterval(function() {
		if(globe == 1) {
			console.log('已加载完成！！！！！！');
			clearInterval(returnid);
			musicplay();
//			clipboard();
			swiperlhz();
			$('#loading').css('display', 'none');
		} else {
			//			console.log(globe);
		}
	}, 500)

}

function restart(swiper) {
	$('#btn').click(function() {
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
		console.log('再来一遍');
	})
}
//右上角音乐按钮监听
function musicplay() {
	var a = $('audio').get(0);
	a.play();
	$('.music').click(function() {
		//					var a=document.getElementById('music');
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

//function clipboard() {
//	var clipboard = new Clipboard('.btn1');
//	var $toast = $('#toast');
//	clipboard.on('success', function(e) {
//		//      console.log(e);
//		if($toast.css('display') != 'none') return;
//		$toast.fadeIn(100);
//		setTimeout(function() {
//			$toast.fadeOut(100);
//		}, 2000);
//	});
//
//	clipboard.on('error', function(e) {
//		console.log(e);
//	});
//}

function swiperlhz() {
	var globe = false;
	var f1 = 0;
	var f2 = 0;
	var f3 = 0;
	var f4 = 0;
	var mySwiper = new Swiper('.swiper-container-v', {
			direction: 'vertical', //滑动方式：竖向
			//		    loop: true,//循环：true
			mousewheelControl: true, //鼠标控制：true
			// 如果需要分页器
			pagination: '.swiper-pagination-v',
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback(swiper);
				//				firstcatoon();
			},
			onSlideChangeEnd: function(swiper) {
				Swipercallback(swiper);
			},

		})
		//	var swiperH = new Swiper('.swiper-container-h', {
		//		pagination: '.swiper-pagination-h',
		//		paginationClickable: true,
		//		slidesPerView: "auto", //slide痕迹
		//		centeredSlides: true,
		//		//			initialSlide :0,
		//		nested: true,
		//		//	        spaceBetween: 30,
		//		onInit: function(swiper) {
		//			swiperAnimateCache(swiper);
		//			swiperAnimate(swiper);
		//			Swipercallback2(swiper);
		//		},
		//		onSlideChangeEnd: function(swiper) {
		//			Swipercallback2(swiper);
		//		},
		//		onTouchMove: function(swiper) {
		//			Swipercallback2(swiper);
		//		}
		//	});
		/*设置按钮交互*/
	$('#btn').click(function() {
		mySwiper.slideTo(0); //切换到第3个slide，速度为1秒
		swiperAnimateCache(mySwiper);
		setTimeout(function() {
			swiperAnimate(mySwiper);
		}, 1000)

	})
	$('#restart').click(function() {
		prc();
	})
	$('.btn2').click(function() {
		wx.onMenuShareAppMessage();
	})
		/* SlideChangeEndCallback */
	function Swipercallback(swiper) {
		var act = swiper.activeIndex;
		swiperAnimate(swiper);
		console.log('当前页面：' + act);
		switch(act) {
			case 0:
				luohua();
//				$('.jxzz').animateCss('zoomIn', '1s', '0s', '1', true);
//				$('.jxzz').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//					$('.jxzz').animateCss('tada', '1.2s', '0s', '2', true);
//				});
				setTimeout(function() {
					act_new = swiper.activeIndex;
					if(act_new == 0) {
						mySwiper.slideTo(1);
					}
				}, 1500)
				break;
			case 1:
				//设置显示
				p2c();
				break;
			case 2:

				break;
			case 3:

				break;
			default:
				break;
		}
		if(act != 0) {
			$(document).snowfall('clear');
			$('.up-arrow').css('display', 'none');
		}
		if(act != 1) {
			$('.pic1').css('display', 'none');
			$('.pic11').css('display', 'none');
			$('.pic2').css('display', 'none');
			$('.cp1').css('display', 'none');
			$('.pic3').css('display', 'none');
			$('.mask').css('display', 'none');
			$('.pic35').css('display', 'none');
			$('.pic4').css('display', 'none');
			$('.pic5').css('display', 'none');
			$('.pic55').css('display', 'none');
			$('.circle').css('display', 'none');
			$('.pic_xdend').css('display', 'none');
			$('.pic_lqstart').css('display', 'none');
			$('.pic_lq1').css('display', 'none');
			$('.pic_lq2').css('display', 'none');
			$('.pic_lq3').css('display', 'none');
			$('.pic_lqend').css('display', 'none');
			$('.btn_zkyb').css('display', 'none');
		}
		if(act != 2) {
			//			$('.slide3 .title').css('display', 'none');
		}

	}

	function p2c() {
//		swiperAnimateCache(mySwiper);
//		setTimeout(function() {
//			swiperAnimate(mySwiper);
//		}, 200)
		mubu();
//		$('.btn_zkyb').animateCss('fadeIn', '1s', '0s', '1', true);
	}
	function prc(){
		mySwiper.slideTo(0);
	}
	function mubu() {
		$('.mb_3').css('display', 'none');
		$('.mb_2').css('display', 'none');
		$('.mb_1').css('display', 'none');
		$('.mb_start').css('display', 'none');

		$('.mb_3').css('display', 'block');
		$('.mb_3').animateCss('fadeIn', '1s', '0.5s', '1', true);
		$('.mb_3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.mb_2').css('display', 'block');
			$('.mb_2').animateCss('fadeIn', '1s', '0s', '1', true);
			$('.mb_2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.mb_1').css('display', 'block');
				$('.mb_1').animateCss('fadeIn', '1s', '0s', '1', true);
				$('.mb_1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$('.mb_start').css('display', 'block');
					$('.mb_start').animateCss('fadeIn', '1s', '0s', '1', true);
				});
			});
		});
	}

	function Swipercallback2(swiper) {
		var act = swiper.activeIndex;
		swiperAnimate(swiper);
		console.log('第二个swiper' + act);
	}

	function luohua() {
		$(document).snowfall('clear');
		$(document).snowfall({
			image: "img/p1/new.png",
			flakeCount: 10,
			minSize: 3,
			maxSize: 25
		});
	}
}