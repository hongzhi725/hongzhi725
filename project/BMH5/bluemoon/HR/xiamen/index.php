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
		<meta name="keywords" content="蓝月亮,校园招聘,2017,校招,蓝色梦想,月亮之上" />
		<meta name="description" content="蓝月亮校园招聘·长沙站" />
		<title>蓝月亮校园招聘·厦门站</title>
		<link rel="stylesheet" type="text/css" href="css/swiper.min.css" />
		<link rel="stylesheet" type="text/css" href="css/animate.min.css" />
		<link rel="stylesheet" type="text/css" href="css/main.min.css" />
		<style type="text/css">
			.box{
				position: absolute;
				width: 62.189vh;
				height: 100vh;
				left: calc(50vw - 31.0945vh);
				/*background-color:orange;*/
				font-size: 1rem;
			}
		</style>
	</head>
	<body>
		<div id="mainbox" class="box">
			<div id="loading">
				<div class="loader"></div>
				<span id="loading-num"></span>
			</div>
			<!--正文-->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide slide1"></div>
					<div class="swiper-slide slide2"></div>
					<div class="swiper-slide slide3"></div>
					<div class="swiper-slide slide4"></div>
					<div class="swiper-slide slide5"></div>
					<div class="swiper-slide slide6"></div>
				</div>
			</div>
			<button class="music">
				<img src="img/music.svg" />
			</button>
			<div class="up-arrow">
				<img src="img/up-arrow.svg"/>
			</div>
		</div>
		<audio loop id="music">
			<source src="audios/bgm.mp3" type="audio/mpeg"></source>
		</audio>
		<!--JS插件-->
		<script src="js/jquery-3.1.0.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js"></script>
		<script src="js/swiper.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/swiper.animate.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/main.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			(function(doc, win) {
				var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function() {
						var box = document.getElementById('mainbox');
						var clientWidth = docEl.clientWidth;
						var clientHeight = docEl.clientHeight;
						var boxWidth = box.clientWidth;
						var boxHeight = box.clientHeight;
						console.log("【设备】宽：" + clientWidth + "，" + "高：" + clientHeight);
						console.log("【box】：" + boxWidth + "，" + "高：" + boxHeight);
						if(clientWidth <= 375) {
							box.style.width = '100vw';
							box.style.left = '0';
							console.log("【box调整后宽】：" + box.clientWidth);
						} else {
							box.style.width = '62.189vh';
							box.style.left = 'calc(50vw - 31.0945vh)';
						}
						docEl.style.fontSize = 12 * (boxWidth / 375) + 'px';
						console.log("【font-size调整后】" + docEl.style.fontSize);
					};
				if(!doc.addEventListener) return;
				win.addEventListener(resizeEvt, recalc, false);
				doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
		</script>
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
					title: '蓝月亮校园招聘·厦门站', // 分享标题
					desc: '蓝月亮邀你共赴厦门招聘宣讲会！带你“月”动职场！', // 分享描述
					link: 'http://wx.xykjg.com/hr/school/xiamen/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/hr/school/changsha/img/300-300.jpg', // 分享图标
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
					title: '蓝月亮校园招聘·厦门站', // 分享标题
					link: 'http://wx.xykjg.com/hr/school/xiamen/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/hr/school/changsha/img/300-300.jpg', // 分享图标
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
	

