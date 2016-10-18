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
		}, ];
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
		console.log("加载出错！");
	}
	//已加载完毕进度 
	function handleFileProgress(event) {
		nump = preload.progress * 100 | 0;
		console.log(nump);
		document.getElementById(numpid).innerText = nump;
	}
	//全度资源加载完毕
	function loadComplete(event) {
		console.log("【资源】已全部加载完毕");
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

	function swiperlhz() {
		var globe = false
		var mySwiper = new Swiper('.swiper-container-v', {
			direction: 'vertical', //滑动方式：竖向
			//		    loop: true,//循环：true
			mousewheelControl: true, //鼠标控制：true
			// 如果需要分页器
			pagination: '.swiper-pagination-v',
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
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback(swiper);
			},
			onSlideChangeEnd: Swipercallback,
		})
		var swiperV = new Swiper('.swiper-container-h', {
			pagination: '.swiper-pagination-h',
			paginationClickable: true,
			slidesPerView: "auto", //slide痕迹
			centeredSlides: true,
			//	        spaceBetween: 30,
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback(swiper);
			},
			onSlideChangeEnd: Swipercallback,
		});
		/* SlideChangeEndCallback */
		function Swipercallback(swiper) {
			var act = swiper.activeIndex;
			swiperAnimate(swiper);
			//			console.log(act);
			switch(act) {
				case 0:
					break;
				case 1:
					break;
				case 2:
					break;
				default:
					break;
			}
			if(act != 0) {

			}
			if(act != 1) {

			}
			if(act != 2) {

			}

		}
	}

})

function init() {
	var a = [
		['1.理解公司策略内容，进行广告、平面画面等的文案创作；<br />2.进行消费者研究，了解消费者对文字的理解及看法情况；<br />3.进行平面文字、广告文案等文字的研究；<br />4.新闻稿件、公关稿件撰写；<br />5.品牌故事构想。'],
		['策划主任：岗位职责'],
		['电商运营经理：岗位职责'],
	];
	var b=[
		['1.热爱生活，乐观自信；<br />2.有扎实的文字功底，具有良好的语言和文字表达能力；<br />3.有较高的文学鉴赏能力和有良好的传统文学和艺术修养；<br />4.有清晰的逻辑思维清晰，良好的沟通能力；<br />5.学习能力与理解力强；<br />6.有创新意识，对生活环境有敏锐的感知能力。<br />具备以下能力者优先：<br />1.文案写作与文字编辑能力；<br />2.创作文章能力；<br />3.专业：新闻传播/新闻评论/编辑出版学/中国文学/汉语言文学/中文文秘/心理学等相关文科专业；<br />4.在公关传播、市场活动、广告等方面具有文案策划实施经验，有优秀作品或出版作品者优先。'],
		['策划主任：任职要求'],
		['电商运营经理：任职要求'],
	];
	function buttonS(e){
		console.log(e);
		switch (e){
			case 11:
				showup(e);
				$('#close').css('display', 'block');
				$('#mkt_dec').css('display', 'block');
				$('#mask').css('display', 'block');
				$('#mkt_dec').addClass('fadeInIn');
				$('.up-arrow').css('display', 'none');
				setTimeout(function(){
					$('#mkt_dec').removeClass('fadeInIn');
				},300)
				break;
			case 12:
				showup(e);
				$('#close').css('display', 'block');
				$('#mkt_dec').css('display', 'block');
				$('#mask').css('display', 'block');
				$('#mkt_dec').addClass('fadeInIn');
				$('.up-arrow').css('display', 'none');
				setTimeout(function(){
					$('#mkt_dec').removeClass('fadeInIn');
				},300)
				break;
			case 13:
				showup(e);
				$('#close').css('display', 'block');
				$('#mkt_dec').css('display', 'block');
				$('#mask').css('display', 'block');
				$('#mkt_dec').addClass('fadeInIn');
				$('.up-arrow').css('display', 'none');
				setTimeout(function(){
					$('#mkt_dec').removeClass('fadeInIn');
				},300)
				break;
			case 99:
				$('#mkt_dec').addClass('fadeOutOut');
				setTimeout(function() {
					$('#mkt_dec').css('display', 'none');
					$('#mkt_dec').removeClass('fadeOutOut');
				}, 300)
				$('#close').css('display', 'none');
				$('#mask').css('display', 'none');
				$('.up-arrow').css('display', 'block');
				break;
			default:
				break;
		}
	}
	function showup(e){
		switch (e){
			case 11:
				$("#duty").html(a[0]).show();
				$("#jobrequire").html(b[0]).show();
				break;
			case 12:
				$("#duty").html(a[1]).show();
				$("#jobrequire").html(b[1]).show();
				break;
			case 13:
				$("#duty").html(a[2]).show();
				$("#jobrequire").html(b[2]).show();
				break;
			default:
				break;
		}
	}
	$('.button').on('click',function(){
		buttonS(parseInt($(this).attr('num')));
	})
}
init();