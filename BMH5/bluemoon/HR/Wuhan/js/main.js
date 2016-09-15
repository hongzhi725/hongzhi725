$(function() {
//	//loading样式:
//	// progressbar.js@1.0.0 version is used
//	// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
//		var bar = new ProgressBar.Circle(loading_circle, {
//		color: '#1874CD',
//		// This has to be the same size as the maximum width to
//		// prevent clipping
//		strokeWidth: 4,
//		trailWidth: 2,
//		easing: 'easeInOut',
//		duration: 500,
//		text: {
//			autoStyleContainer: false
//		},
//		from: {
//			color: '#FF1493',
//			width: 1
//		},
//		to: {
//			color: '#1C86EE',
//			width: 4
//		},
//		// Set default step function for all animate calls
//		step: function(state, circle) {
//			circle.path.setAttribute('stroke', state.color);
//			circle.path.setAttribute('stroke-width', state.width);
//			var value = Math.round(circle.value() * 100);
//			if(value === 0) {
//				circle.setText('0');
//			} else {
//				circle.setText(value);
//			}
//
//		}
//	});
//	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//	bar.text.style.fontSize = '2rem';
//	
//	// Number from 0.0 to 1.0
//	bar.animate(1);
//	//loading样式结束.
	
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
		console.log("已加载完毕全部资源");
		setTimeout(function(){
			$('#loading').css('display','none')
		},500)
		
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

})