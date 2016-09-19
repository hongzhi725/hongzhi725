$(function() {
	//----loading预加载
	//MADE BY COOKIE
	//1.loading预加载进度:定义变量 var nump
	//2.显示数字的id需设置:id=numprogress-id
	var nump;
	var numpid = 'loading-num';
	//-----------------常规：
	var manifest;
	var preload;
	//定义相关JSON格式文件列表
	function setupManifest() {
		manifest = [{
			src: "https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js",
			id: "preloadjs"
		}, {
			src: "http://cdn.bootcss.com/progressbar.js/1.0.1/progressbar.min.js",
			id: "progressbar"
		}];
		var Imglist = document.getElementsByTagName('img');
		var length = Imglist.length;
		for(var i = 0; i <= length - 1; i++)
			manifest.push({
				src: Imglist[i].src
			})
	}
	//开始预加载
	function startPreload() {
		preload = new createjs.LoadQueue(true);
		//注意加载音频文件需要调用如下代码行
		preload.installPlugin(createjs.Sound);
		preload.on("fileload", handleFileLoad);
		preload.on("progress", handleFileProgress);
		preload.on("complete", loadComplete);
		preload.on("error", loadError);
		preload.loadManifest(manifest);

	}
	//处理单个文件加载
	function handleFileLoad(event) {
		//	bar.animate(nump / 100);
		//	console.log("文件类型: " + event.item.type + "文件名称：" + event.item.id);
		if(event.item.id == "swiper") {
			console.log("logo图片已成功加载");
		}
	}
	//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
	function loadError(evt) {
		console.log("加载出错！", evt.text);
	}
	//已加载完毕进度 
	function handleFileProgress(event) {
		nump = preload.progress * 100 | 0;
		document.getElementById(numpid).innerText = nump;
	}
	//全度资源加载完毕
	function loadComplete(event) {
		//		console.log("已加载完毕全部资源");
		if(nump = 100) {
			setTimeout(function() {
				swiperlhz();
				$('#loading').css('display', 'none');
			}, 200)
		}
	}
	setupManifest();
	startPreload();
	//右上角音乐按钮监听
	//用来监听按钮触发效果.Start
	document.body.addEventListener('touchstart', function() {});
	//用来监听按钮触发效果.End
	var a = $('audio').get(0);
	a.play();
	$('.btn-music').click(function() {
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
	//动画自定义
	$.fn.extend({
				animateCss: function(animationName, duration, delay, count,play) {
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
						if (play==true) {
							$(this).removeClass('animated ' + animationName);
						} else{
							console.log('没有撤走class')
						}
						
					});
					
				}
			});
	function swiperlhz() {
		var globe = false
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical', //滑动方式：竖向
			//		    loop: true,//循环：true
			mousewheelControl: true, //鼠标控制：true
			// 如果需要分页器
			pagination: '.swiper-pagination',
			// 设置翻页方式：
			//		    effect : 'coverflow',
			//			slidesPerView: 1,
			//			centeredSlides: true,
			//			coverflow: {
			//	            rotate: 50,
			//	            stretch: 10,
			//	            depth: 100,
			//	            modifier: 1.5,
			//	            slideShadows : true
			//      	},
			//onInit：
			//				onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			//					swiper.myactive = 0;
			//					swiperAnimateCache(swiper); //隐藏动画元素
			//					swiperAnimate(swiper); //初始化完成开始动画
			//					swiperAnimate(swiper);
			//				},
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback(swiper);
			},
			onSlideChangeEnd: Swipercallback,
		})
		var bgList = [
			"img/bg/p1_bg.jpg",
			"img/bg2.jpg",
			"img/bg/p3_bg.jpg",
			"img/bg/p4_bg.jpg",
			"img/bg/p5_bg.jpg",
			"img/bg/p3_bg.jpg",
			"img/bg2.jpg",
		];
		
		/* SlideChangeEndCallback */
		function Swipercallback(swiper) {
			var act = swiper.activeIndex;
			setTimeout(function() {
				$(".swiper-container").css("background", 'url("' + bgList[act] + '")');
				$(".swiper-container").css("background-size", 'cover');
			}, 500);
			swiperAnimate(swiper);
//			console.log(act);
			switch(act) {
				case 0:
					setTimeout(function() {
						$('#p1_6').addClass('newmove1');
						setTimeout(function() {
							$('#p1_7').addClass('newmove2');
							setTimeout(function() {
								$('#p1_8').addClass('newmove3');
								setTimeout(function() {
									$('#p1_12').addClass('newmove4');
									$('#p1_2').addClass('shake');
								}, 100)
							}, 100)
						}, 100)
					}, 2600);
					break;
				case 1:
					$('#p2_city').css('display','block');
					$('#position').css('display','block');
					$('#p2_city').animateCss('fadeIn','1s','2s','1',true);
					$('#position').animateCss('bounceInDown','1s','3s','1',true);
					setTimeout(function(){
						$('#position').animateCss('bounce','1s','0s','infinite',true);
					},4300)
					break;
				case 2:
					setTimeout(function() {
						$('#p3_1').addClass('newmovep3_1');
						setTimeout(function() {
							$('#p3_2').addClass('newmovep3_2');
						}, 1000)
					}, 2000)
					break;
				default:
					break;
			}
			if(act != 0) {
				$('#p1_2').removeClass('shake');
				$('#p1_6').removeClass('newmove1');
				$('#p1_7').removeClass('newmove2');
				$('#p1_8').removeClass('newmove3');
				$('#p1_12').removeClass('newmove4');
			}
			if(act != 1) {
				$('#p2_city').css('display','none');
				$('#position').css('display','none');
			}
			if(act != 2) {
				$('#p3_1').removeClass('newmovep3_1');
				$('#p3_2').removeClass('newmovep3_2');
			}

		}
	}

})