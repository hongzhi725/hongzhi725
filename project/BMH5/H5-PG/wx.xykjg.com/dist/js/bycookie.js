//监听微信touchstart,禁止页面上下滑动
//document.querySelector('.box').addEventListener('touchstart', function(ev) {
//	ev.preventDefault();
//});

//微信分享api
//alert(decodeURI(location.href.split('#')[0]))
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]) + '&kind=H5PG&id=1', function(res) {
		//alert(res.appid);
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
				link: location.href,
				imgUrl: res.imgUrl
			});
			wx.onMenuShareTimeline({
				title: res.title,
				link: location.href,
				imgUrl: res.imgUrl
			});
			//wx.onMenuShareQQ(option);
		});
	});
}
setJSAPI();

/*个性功能封装*/
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
		manifest = [
			{src: "https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js",id: "preloadjs"}, 
			{src:"js/clipboard.min.js",id:"clipboard"}, 
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