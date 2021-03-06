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
		<title>蓝月亮校园招聘·长沙站</title>
		<link rel="stylesheet" type="text/css" href="css/swiper.min.css" />
		<link rel="stylesheet" type="text/css" href="css/animate.min.css" />
		<link rel="stylesheet" type="text/css" href="css/main.css" />
	</head>
	<body>
		<img src="img/300-300.jpg" style="width: 0;display: block;" />
		<div id="loading">
			<div class="loader"></div>
			<span id="loading-num"></span>
		</div>
		<!--正文-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<!--Slide 1-->
				<div class="swiper-slide">
					<div class="p1_main">
						<img src="img/p1/p1_uparc.png" class="p1_uparc ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<img src="img/p1/p1_crown.png" id="p1_2" class="p1_crown ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s">
						<img src="img/p1/p1_lansemengxiang.png" id="p1_3" class="p1_lansemengxiang ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<img src="img/p1/p1_yueliangzhishang.png" class="p1_yueliangzhishang ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<img src="img/p1/p1_downarc.png" id="p1_5" class="p1_downarc ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<img src="img/p1/p1_triangle2.png" id="p1_6" class="p1_triangle2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.5s" swiper-animate-delay="2s">
						<img src="img/p1/p1_circle.png" id="p1_7" class="p1_circle ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.5s" swiper-animate-delay="2.2s">
						<img src="img/p1/p1_triangle.png" id="p1_8" class="p1_triangle ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.4s">
						<img src="img/p1/p1_line.png" id="p1_9" class="p1_line ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.7s">
						<img src="img/p1/p1_line.png" id="p1_10" class="p1_line2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.8s">
						<img src="img/p1/p1_line.png" id="p1_11" class="p1_line3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.9s">
						<img src="img/p1/p1_triangle3.png" id="p1_12" class="p1_triangle3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2.6s">
						<p id="p1_13" class="p1_word ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="2.8s">2017蓝月亮校园招聘</p>
						<p id="p1_14" class="p1_word2 ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="3s">长沙站 GO</p>
					</div>
				</div>
				<!--Slide 2-->
				<div class="swiper-slide">
					<img src="img/p2/new/road.png" width="100%" class="p2_abc ani" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
					<img src="img/p2/new/flag.png" width="100%" class="p2_abc ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
					<img src="img/p2/new/position.png" width="100%" id="position" class="p2_abc">
					<img src="img/p2/new/city.png" width="100%" id="p2_city" class="p2_abc" style="display: none;">
					<img src="img/p2/new/xiushi.png" width="100%" class="p2_abc ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1.6s">
					<img src="img/p2/new/diming.png" width="100%" class="p2_abc ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
				</div>
				<!--Slide 3-->
				<div class="swiper-slide">
					<!--<h2 class="ani" swiper-animate-effect="rubberBand" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第三页</h2>-->
					<div class="p3_header">
						<img src="img/p3/p3_triangle.png" id="p3_1" class="p3_triangle ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.7s">
						<img src="img/p3/p3_2.png" id="p3_2" class="p3_2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
					</div>
					<img src="img/p3/p3_n1.png" width="100%" class="abc ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
					<img src="img/p3/p3_n2.png" width="100%" class="abc ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.25s">
					<img src="img/p3/p3_n3.png" width="100%" class="abc ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
				</div>
				<!--Slide 4-->
				<div class="swiper-slide">
					<div class="p4_header">
						<img src="img/p4/p4_tb.png" class="p4_tb ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<div id="p4_title" class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
							长沙站宣讲行程
						</div>
						<img src="img/p4/p4_1.png" class="p4_1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s">
						<img src="img/p4/p4_2.png" class="p4_2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1.2s">
						<img src="img/p4/p4_3.png" class="p4_3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="1.4s">
					</div>
					<img src="img/p4/p4_bfor2.png" width="100%" class="abc ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="1s">
					<img src="img/p4/P4_word.png" width="100%" class="abc ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1s" swiper-animate-delay="2s">
					<img src="img/p4/p4_4.png" class="p4_4 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="2.5s">

				</div>
				<!--Slide 5-->
				<div class="swiper-slide">
					<div class="p5_box1">
						<img src="img/p5/p5_1.png" class="p5_1 ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.75s" swiper-animate-delay="0.5s">
						<img src="img/p5/p5_7.png" class="p5_7 ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="2s" swiper-animate-delay="2.75s">
						<img src="img/p5/p5_8.png" class="p5_8 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" swiper-animate-delay="3s">
						<p class="p5_word1 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="3.25s">我们统统满足你！<br />
							<span style="font-size: 40px;">JOIN US</span></p>
					</div>
					<div class="p5_box2">
						<img src="img/p5/p5_2.png" class="p5_2 ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s">
						<span class="p5_word2 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.75s">有竞争力薪酬</span>
						<p class="p5_word2b ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.75s"><br />本科生：12万/年 起 <br /> 硕士：14万/年 起 <br /> 博士：18万/年 起</p>
					</div>
					<div class="p5_box3">
						<img src="img/p5/p5_3.png" class="p5_3 ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.75s" swiper-animate-delay="1s">
						<span class="p5_word3 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.25s">基本福利</span>
						<p class="p5_word3b ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.25s">5天8小时工作日<br />五险一金<br />上下班车等等~</p>
					</div>
					<div class="p5_box4">
						<img src="img/p5/p5_4.png" class="p5_4 ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.75s" swiper-animate-delay="1.25s">
						<p class="p5_word4 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="2.75s">快乐</p>
					</div>
					<div class="p5_box5">
						<img src="img/p5/p5_5.png" class="p5_5 ani" swiper-animate-effect="flipInY" swiper-animate-duration="0.75s" swiper-animate-delay="1.5s">
						<p class="p5_word5 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="3s">发展</p>
					</div>
				</div>
				<!--Slide 6-->
				<div class="swiper-slide">
					<div class="p6_1">
						<img src="img/p6/p6_1.png" width="90%" class="ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
						<p class="p6_title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1s">招聘流程</p>
					</div>
					<!--<img src="img/p6/p6_1.png" class="p6_1">-->

					<div class="p6_word">
						<p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">在线投递简历</p>
						<img src="img/p6/p6_2.png" class="p6_2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.75s">
						<p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2s">参加校园宣讲会</p>
						<img src="img/p6/p6_2.png" class="p6_2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2.25s">
						<p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2.5s">面试</p>
						<img src="img/p6/p6_2.png" class="p6_2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2.75s">
						<p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="3s">发放Offer</p>
						<img src="img/p6/p6_2.png" class="p6_2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="3.25s">
						<p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="3.5s">签订第三方协议</p>
					</div>
					<img src="img/p6/p6_5.png" class="p6_5 ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="4s">
					<img src="img/p6/p6_3.png" class="p6_3 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" swiper-animate-delay="4s">
					<img src="img/p6/p6_4.png" class="p6_4 ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="2s" swiper-animate-delay="4s">
					<p class="p6_word2 ani" swiper-animate-effect="fadeInDownBig" swiper-animate-duration="0.5s" swiper-animate-delay="4.25s"><b style="color: whitesmoke;">网申链接：</b>http://campus.51job.com/bluemoon</p>
				</div>
				<!--Slide 7-->
				<div class="swiper-slide">
					<div class="p7_title">
						<p class="p7_1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">我们期待您的加入</p>
						<p style="font-size: 2.16rem;margin: 0;color: #ff8000;font-weight: 100;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
							—— <span style="font-size: 1.16rem;margin: 0;font-weight: 500;">关注二维码获取更多信息</span> ——
						</p>
					</div>
					<img src="img/p7/1.png" class="p7_p1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s">
					<p class="p7_footer ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s">蓝月亮校园招聘微信公众平台</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<!--<div class="swiper-pagination"></div>-->
			<!-- 滑动提示 -->
			<!--<img id="array" src="img/web-tip-lhz.png" >-->
			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>-->
			<!-- 如果需要滚动条 -->
			<!--<div class="swiper-scrollbar"></div>-->
		</div>
		<button class="btn-music">
		    <i class="icon iconfont">&#xe606;</i>
		</button>
		<button class="up-arrow">
			<i class="icon iconfont">&#xe612;</i>
		</button>
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
			document.addEventListener('touchmove', function(e) {
				e.preventDefault()
			}, false);

			(function(doc, win) {
				var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function() {
						var clientWidth = docEl.clientWidth;
						var clientHeight = docEl.clientHeight;
						console.log("设备宽：" + clientWidth);
						console.log("设备高：" + clientHeight);
						//						alert(clientWidth);
						if(!clientWidth) return;
						docEl.style.fontSize = 12 * (clientWidth / 375) + 'px';
						console.log(docEl.style.fontSize);
					};
				// Abort if browser does not support addEventListener
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
					title: '蓝月亮校园招聘·长沙站', // 分享标题
					desc: '蓝月亮邀你共赴湖大中南管培招聘宣讲会！带你“月”动职场！', // 分享描述
					link: 'http://wx.xykjg.com/hr/school/changsha/', // 分享链接
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
					title: '蓝月亮校园招聘·长沙站', // 分享标题
					link: 'http://wx.xykjg.com/hr/school/changsha/', // 分享链接
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