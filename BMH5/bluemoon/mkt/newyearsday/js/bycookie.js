//监听微信touchstart,禁止页面上下滑动
//document.querySelector('.box').addEventListener('touchstart', function(ev) {
//	ev.preventDefault();
//});

//微信分享api
//alert(decodeURI(location.href.split('#')[0]))
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]) + '&kind=mkt&id=2', function(res) {
		//		alert(res.appid);
		wx.config({
			//beta: true,
			debug: false,
			appId: res.appid,
			timestamp: res.timestamp,
			nonceStr: res.nonceStr,
			signature: res.signature,
			jsApiList: [
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'onMenuShareQZone',
				// 'setNavigationBarColor',
				'setBounceBackground'
			]
		});
		wx.ready(function() {
			//			wx.invoke('setBounceBackground', {
			//				'backgroundColor': '#F8F8F8',
			//				'footerBounceColor': '#F8F8F8'
			//			});
			wx.onMenuShareAppMessage({
				title: res.title,
				desc: res.describe,
				link: 'http://wx.xykjg.com/mkt/newyearsday/' + '?ct=' + $('.content_word2').html(),
				imgUrl: res.imgUrl
			});
			wx.onMenuShareTimeline({
				title: res.title,
				link: 'http://wx.xykjg.com/mkt/newyearsday/' + '?ct=' + $('.content_word2').html(),
				imgUrl: res.imgUrl
			});
			//wx.onMenuShareQQ(option);
		});
		$('.confirm').click(function() {
			wx.onMenuShareAppMessage({
				title: res.title,
				desc: res.describe,
				link: 'http://wx.xykjg.com/mkt/newyearsday/' + '?ct=' + $('.content_word2').html(),
				imgUrl: res.imgUrl
			});
			wx.onMenuShareTimeline({
				title: res.title,
				link: 'http://wx.xykjg.com/mkt/newyearsday/' + '?ct=' + $('.content_word2').html(),
				imgUrl: res.imgUrl
			});
		})
	});
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
				src: "img/0.png",
				id: "img"
			}, {
				src: "img/1.png",
				id: "img"
			}, {
				src: "img/2.png",
				id: "img"
			}, {
				src: "img/7.png",
				id: "img"
			}, {
				src: "img/bg.png",
				id: "img"
			}, {
				src: "img/bg02.png",
				id: "img"
			}, {
				src: "img/bg03.png",
				id: "img"
			}, {
				src: "img/bmp.png",
				id: "img"
			}, {
				src: "img/cancel.png",
				id: "img"
			}, {
				src: "img/cloud.png",
				id: "img"
			}, {
				src: "img/caidan.png",
				id: "img"
			}, {
				src: "img/confirm.png",
				id: "img"
			}, {
				src: "img/HAPPY-NEW-YEAR.png",
				id: "img"
			}, {
				src: "img/inputbg.png",
				id: "img"
			}, {
				src: "img/moon.png",
				id: "img"
			}, {
				src: "img/star.png",
				id: "img"
			}, {
				src: "logo.png",
				id: "img"
			},
			{src: "img/rocket.gif",id: "gif"}

		];
		//		var Imglist = document.getElementsByTagName('img');
		//		var length = Imglist.length;
		//		for(var i = 0; i <= length - 1; i++)
		//			manifest.push({
		//				src: Imglist[i].src
		//		})
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