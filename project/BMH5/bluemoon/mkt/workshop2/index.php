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
		<meta name="viewport" content="width=375, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<meta name="keywords" content="蓝月亮,市场部,销售部,销售倍增,研讨会" />
		<meta name="description" content="蓝月亮·销售倍增研讨会" />
		<title>“销售倍增”研讨会邀请函</title>
		<link rel="stylesheet" type="text/css" href="css/swiper.min.css" />
		<link rel="stylesheet" type="text/css" href="css/animate.min.css" />
		<link rel="stylesheet" type="text/css" href="css/main.min.css" />
		<style type="text/css">
			.box{
				position: absolute;
				width: 62.18905472636816vh;
				height: 100vh;
				top: 0%;
				left: calc(50vw - 31.0945vh);
				/*background-color:orange;*/
				/*font-size: 1rem;*/
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
					<div class="swiper-slide slide1" style="display: block;">
						<!--<img src="img/p1/bm-logo-white.png" class="bmlogo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<div class="word1 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s">2016 经销商</div>-->
						<img src="img/p1/p1_pic1.png" style="position: absolute;left: 0;top: 12%;width: 100%;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<img src="img/p1/p1_pic2.png" style="position: absolute;left: 0;top: 22%;width: 100%;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<!--<div class="word2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s">“销售倍增”研讨会</div>-->
						<img src="img/p1/yaoqinghan.png" class="yqh ani" swiper-animate-effect="zoomInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s">
						<img src="img/p1/timer.png" class="timer ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
						<div class="word3 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="2.5s">会议日期：2016年10月11日</div>
						<img src="img/p1/pos.png" class="pos ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="3.5s">
						<div class="word4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="3.5s">蓝月亮（中国）有限公司广州总部</div>
					</div>
					<div class="swiper-slide slide2">
						<div class="title ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">让我们一起走进</div>
						<img src="img/p1/bm-logo-white.png" class="bmlogo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<div class="one">
							<div class="one_word ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.5s">2008年<br />开创中国洗衣<span style="font-size: 1.4rem;color: rgb(255,255,0);letter-spacing:1px;font-weight: bold;"> “液”时代</span><br />促进行业的升级换代</div>
							<img src="img/p2/p2_pic11.png" class="pic_1 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
							<img src="img/p2/line.png" style="position: absolute;top: 15rem;left: 5%;width: 90%;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
						</div>
						<div class="two">
							<div class="two_word ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="2.5s">2011年<br />推出国内首款手洗专用洗衣液<br />开创<span style="font-size: 1.4rem;color: rgb(255,255,0);letter-spacing:1px;font-weight: bold;"> 手洗新时代</span></div>
							<img src="img/p2/p2_pic22.png" class="pic_2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
							<img src="img/p2/line.png" style="position: absolute;top: 23rem;left: 5%;width: 90%;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
						</div>
						<div class="three">
							<div class="three_word ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="3.5s">2013年<br />推出了无毒茶清、无毒卫诺<br /><span style="font-size: 1.4rem;color: rgb(255,255,0);letter-spacing:1px;font-weight: bold;">无毒家居清洁</span>，使用更放心</div>
							<img src="img/p2/p2_pic33.png" class="pic_3 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="3.5s">
							<img src="img/p2/line.png" style="position: absolute;top: 31rem;left: 5%;width: 90%;" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="3.5s">
						</div>
						<div class="four">
							<div class="four_word ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="4.5s">2015年<br />推出国内首款「浓缩+」洗衣液<br />引领<span style="font-size: 1.4rem;color: rgb(255,255,0);letter-spacing:1px;font-weight: bold;"> 中国浓缩时代</span></div>
							<img src="img/p2/p2_pic44.png" class="pic_4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="4.5s">
						</div>
						<img src="img/p2/bottom.png" class="bottom ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="5.5s">
					</div>
					<div class="swiper-slide slide3" style="display: block;">
						<div class="title ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">熟悉的问题，意外的答案</div>
						<img src="img/p3/p3_pic1.png" class="p3_pic1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
						<div class="p3_word2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.5s">一起来见证</div>
						<div class="p3_word3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="3s">洗涤科技的奇迹吧！</div>
					</div>
					<div class="swiper-slide slide4" style="display: block;">
						<!--<div class="p4_word1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.25s">为更好的体验</div>
						<div class="p4_word2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s">洗涤的科技，洁净的奥秘</div>
						<div class="p4_word3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.25s">请携带1~2件您洗不干净的衣物</div>-->
						<div class="p4_word2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.25s">来参加研讨会时，</div>
						<div class="p4_word3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">请携带1-2件您洗不干净的衣物</div>
						<img src="img/p4/p4_pic1.png" class="p4_pic1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<div class="p4_word4 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s">蓝月亮洗涤科学研究院将为您洗涤</div>
						<div class="p4_word5 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="2s">让您的衣物洁净如新！</div>
						<img src="img/p4/p3_pic2.png" class="p3_pic2 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2.5s">
					</div>
					<div class="swiper-slide slide5" style="display: block;">
						<img src="img/p1/bm-logo-white.png" class="bmlogo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.25s">
						<div class="p5_word1 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.25s">四大生产基地</div>
						<div class="p5_word2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">——服务亿万中国家庭</div>
						<img src="img/p5/map.png" class="map ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<img src="img/p5/pos1.png" class="p5_pos1 ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="3s">
						<img src="img/p5/pos2.png" class="p5_pos2 ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="4s">
						<img src="img/p5/pos3.png" class="p5_pos3 ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="5s">
						<img src="img/p5/pos4.png" class="p5_pos4 ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="2s">
						<div class="p5_word3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.25s">广州·华南生产基地</div>
						<div class="p5_word4 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="3.25s">天津·华北生产基地</div>
						<div class="p5_word5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="4.25s">昆山·华东生产基地</div>
						<div class="p5_word6 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="5.25s">重庆·西南生产基地</div>
					</div>
					<div class="swiper-slide slide6" style="display: block;">
						<img src="img/p1/bm-logo-white.png" class="bmlogo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.25s">
						<div class="p6_word1 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.25s">诚挚邀您参加</div>
						<div class="p6_word2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s">经销商“销售倍增”研讨会</div>
						<img src="img/p6/p6_pic1.png" class="p6_pic1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
						<img src="img/p6/p6_pic2.png" class="p6_pic2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2s">
					</div>
					<div class="swiper-slide slide7" style="display: block;">
						<div class="p7_word1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.25s">研讨会议程</div>
						<img src="img/p7/p7_pic1.png" class="p7_word2 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
					</div>
					<div class="swiper-slide slide8" style="display: block;">
						<div class="p8_word1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.25s">交通 & 住宿</div>
						<img src="img/p8/p8_pic1.png" class="p8_1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
						<img src="img/p8/p8_pic2.png" class="p8_2 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.25s">
						<img src="img/p8/p8_pic3.png" class="p8_3 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
					</div>
					<div class="swiper-slide slide9" style="display: block;">
						<img src="img/p1/bm-logo-white.png" class="bmlogo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
						<div class="p9_word1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">温馨提示</div>
						<img src="img/p9/p9_pic1.png" class="p9_1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s">
					</div>
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
							box.style.width = '62.18905472636816vh';
							box.style.left = 'calc(50vw - 31.09452736318408vh)';
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
					title: '迎浓缩 赢未来', // 分享标题
					desc: '蓝月亮诚邀您参加2016经销商“销售倍增”研讨会', // 分享描述
					link: 'http://wx.xykjg.com/mkt/workshop2/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/mkt/workshop/img/share.png', // 分享图标
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
					title: '“销售倍增”研讨会', // 分享标题
					link: 'http://wx.xykjg.com/mkt/workshop2/', // 分享链接
					imgUrl: 'http://wx.xykjg.com/mkt/workshop/img/share.png', // 分享图标
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
	

