<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<!--meta标签-->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<meta name="keywords" content="蓝月亮,市场部,销售部,内购会,负责人-王艳,提报人-胡红俐" />
		<meta name="description" content="蓝月亮·超值内购会" />
		<title>蓝月亮超值内购会</title>
		<meta name="x5-fullscreen" content="true">
		<meta name="full-screen" content="yes">
		<link rel="stylesheet" type="text/css" href="css/bycookie.css" />
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
			}
			
			.container img {
				width: 100%;
				display: block;
				border: 0;
				vertical-align: bottom;
			}
		</style>
	</head>
	<body>
		<div id="loading">
			<div class="loader"></div>
			<span id="loading-num"></span>
		</div>
		<!--正文-->
		<div class="container">
			<img id="ngh" data-scroll-reveal="enter top and move 50px over 0.3s" src="img/main/ngh.png">
			<img data-scroll-reveal="enter left and move 50px over 0.5s" src="img/main/1.png">
			<img data-scroll-reveal="enter top and move 50px over 0.5s" src="img/main/2.png">
			<img data-scroll-reveal="enter left and move 50px over 0.5s" src="img/main/3.png">
			<img data-scroll-reveal="enter top and move 50px over 0.5s" src="img/main/4.png">
			<img data-scroll-reveal="enter left and move 50px over 0.5s" src="img/main/5.png">
			<img data-scroll-reveal="enter top and move 50px over 0.5s" src="img/main/6.png">
			<!--<img data-scroll-reveal="enter left and move 50px over 0.5s" src="img/main/7.png">-->
			<img data-scroll-reveal="enter top and move 50px over 0.5s" src="img/main/8.png">
			<img data-scroll-reveal="enter left and move 50px over 0.5s" src="img/main/9.png">
			<img data-scroll-reveal="enter top and move 50px over 0.5s" src="img/main/10.png">
			<!--<img src="img/bm/logo.png" style="position: absolute;bottom: 0;width: 100%;">-->
		</div>
		<button class="music">
				<img src="img/music.svg" />
		</button>
		<div class="up-arrow">
			<img src="img/up-arrow.svg" />
		</div>
		<audio loop id="music">
			<source src="audios/bgm.mp3" type="audio/mpeg"></source>
		</audio>
		<!--JS插件-->
		<script src="js/jquery-3.1.0.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js"></script>
		<script src="js/scrollReveal.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/main.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script type="text/javascript">
			wx.config({
				debug: false,
				appId: '<?php echo $signPackage["appId"];?>',
				timestamp: '<?php echo $signPackage["timestamp"];?>',
				nonceStr: '<?php echo $signPackage["nonceStr"];?>',
				signature: '<?php echo $signPackage["signature"];?>',
				jsApiList: [
					// 所有要调用的 API 都要加到这个列表中
					'onMenuShareTimeline',
					'onMenuShareAppMessage'
				]
			});
			wx.ready(function() {
				// 在这里调用 API
				console.log('调用成功');
				wx.onMenuShareAppMessage({
					title: '蓝月亮超值内购会', // 分享标题
					desc: '蓝月亮超值内购会\n活动地址：丹阳·华地百货大统华超市', // 分享描述
					link: 'http://wx.xykjg.com/sales/ngh/1/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/sales/ngh/1/img/share.png', // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function() {
						// 用户确认分享后执行的回调函数
						console.log('分享成功');
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
						console.log('分享取消');
					}
				});
				wx.onMenuShareTimeline({
					title: '蓝月亮超值内购会', // 分享标题
					link: 'http://wx.xykjg.com/sales/ngh/1/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/sales/ngh/1/img/share.png', // 分享图标
					success: function() {
						// 用户确认分享后执行的回调函数
						console.log('分享成功');
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
						console.log('分享取消');
					}
				});
			});
		</script>
	</body>
</html>
	

