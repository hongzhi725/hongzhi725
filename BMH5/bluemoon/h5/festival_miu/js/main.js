preload();
audioAutoPlay('music');
window.onload = function() {
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
	musicplay();
	swiperlhz();
	$('#btn').click(function(){
		location.href = "https://bluemoon.m.tmall.com";
//		location.href = "http://shop111133.cn/fPaXTC";
	})
}
//获取网页传参
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return r[2];
	return null;
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

/*PRELOAD预加载*/
function preload() {
	//1.loading预加载进度:定义变量 var nump
	//2.显示数字的id需设置:id=numprogress-id
	var nump;
	var numpid = 'loading-num';
	//----常规：
	var manifest;
	var preload;
	//定义相关JSON格式文件列表
	function setupManifest() {
		manifest = [{
			src: "https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js",
			id: "preloadjs"
		}, {
			src: "img/bg.png",
			id: "img"
		}, {
			src: "img/p2_pro.png",
			id: "img"
		}, {
			src: "img/p2_title.png",
			id: "img"
		}, {
			src: "img/p3_pro.png",
			id: "img"
		}, {
			src: "img/p3_title.png",
			id: "img"
		}, {
			src: "img/p4_title.png",
			id: "img"
		}, {
			src: "img/p4_title.png",
			id: "img"
		}, {
			src: "img/p5_title.png",
			id: "img"
		}, {
			src: "img/p5_btn.png",
			id: "img"
		}];
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
		console.log("文件类型: " + event.item.type + "文件名称：" + event.item.id);
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
				window.globe = 1;
			}, 500)
		}
	}
	setupManifest();
	startPreload();
}

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
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
			Swipercallback(swiper);
		},
		onSlideChangeEnd: Swipercallback,
	})

	/* SlideChangeEndCallback */
	function Swipercallback(swiper) {
		var act = swiper.activeIndex;
		swiperAnimate(swiper);
		//console.log(act);
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

	}
}