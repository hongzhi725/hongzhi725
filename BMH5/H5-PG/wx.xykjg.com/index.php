<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>蓝月亮·H5产品组</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<!-- 新 Bootstrap 核心 CSS 文件 -->
		<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->

		<!-- Link Swiper's CSS -->
		<link rel="stylesheet" href="dist/css/swiper.min.css">
		<link rel="stylesheet" type="text/css" href="dist/css/button.css" />
		<link rel="stylesheet" type="text/css" href="dist/css/animate.css" />
		<link rel="stylesheet" type="text/css" href="dist/css/personal.css" />
		<script>
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "//hm.baidu.com/hm.js?e07a9baba504fa1d33eb154f5b2b2887";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
		</script>

	</head>

	<body>
		<!-- Swiper -->

		<div class="swiper-container">

			<div class="parallax-bg" style="background-image:url(dist/img/bg01.jpg)" data-swiper-parallax="-23%"></div>
			<!--<div id="headerbox">我的    你的</div>-->
			<!--页头导航栏-->

			<div class="col-md-12 column" id="header" style="display: none;">
				<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">

					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
						<a class="navbar-brand" href="">Hello,Guys!</a>
					</div>

					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active">
								<a href="">主页</a>
							</li>
							<li>
								<a href="https://hongzhi725.github.io/hongzhi725/BMH5/H5-PG/bluemoon/">产品目录</a>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">关于我们<strong class="caret"></strong></a>
								<ul class="dropdown-menu">
									<li>
										<a href="http://www.bluemoon.com.cn/index.asp">蓝月亮（中国）有限公司</a>
									</li>
									<li class="divider">
									</li>
									<li>
										<a href="https://hongzhi725.github.io/hongzhi725/BMH5/H5-PG/bluemoon/">H5·产品组</a>
									</li>
									<!--<li class="divider">
									</li>-->
								</ul>
							</li>
						</ul>

					</div>
				</nav>
			</div>

			<div class="swiper-wrapper">

				<div class="swiper-slide">
					<div class="ani title webfont" data-swiper-parallax="-100" swiper-animate-effect="flipInY" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
						H5·产品组
					</div>

					<div class="ani btn-01" data-swiper-parallax="-200" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
						<a href="wx/index.html" class="button button-glow button-border button-rounded button-primary" style="padding:0px 50px;">详细了解</a>
					</div>

					<div class="ani text webfont" data-swiper-parallax="-600" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="1.1s">
						<p>隶属：IT部-应用设计中心-H5产品组</p>
						<p>宗旨：高效的制作满足业务方需求的Html5页面</p>
						<p>邮箱：liuhongzhi@bluemoon.com.cn</p>
					</div>

				</div>

				<div class="swiper-slide">

					<div class="ani title webfont" data-swiper-parallax="-100" swiper-animate-effect="flipInY" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
						H5·产品流程图
					</div>

					<div class="ani btn-01" data-swiper-parallax="-200" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
						<a href="https://hongzhi725.github.io/hongzhi725/BMH5/H5-PG/bluemoon/" class="button button-glow button-border button-rounded button-primary" style="padding:0px 50px;">详细了解</a>
					</div>

					<div class="ani text webfont" data-swiper-parallax="-600" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="1.1s">
						<p>隶属：IT部-应用设计中心-H5产品组</p>
						<p>宗旨：高效的制作满足业务方需求的Html5页面</p>
						<p>邮箱：liuhongzhi@bluemoon.com.cn</p>
					</div>

				</div>

				<div class="swiper-slide">
					<div class="ani title webfont" data-swiper-parallax="-100" swiper-animate-effect="flipInY" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s" style="top: 25%;">
						弹幕·留言板
					</div>
					<div class="d_screen" data-swiper-parallax="-200">
						<div class="d_mask"></div>
						<div class="d_show"></div>
					</div>
					<div class="ani sendbox" data-swiper-parallax="-600" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
						<a href="#" class="button button-glow button-border button-rounded button-primary button-rounded button-small btn-clear" style="padding:2px 0px;">清屏</a>
						<input type="text" class="form-control btn-input" placeholder="Text input">
						<a href="#" class="button button-glow button-border button-rounded button-primary button-rounded button-small btn-send" style="padding:2px 20px;">发射</a>
					</div>
				</div>

			</div>
			<div class="footer">
				(c) Copyright 2016 <b>Cookie.</b> All Rights Reserved.
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination swiper-pagination-white"></div>
			<!-- Add Navigation -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>-->
		</div>

		<!-- Swiper JS -->
		<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
		<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="https://cdn.wilddog.com/js/client/current/wilddog.js"></script>
		<script src="dist/js/swiper.min.js"></script>
		<script src="dist/js/swiper.animate.min.js"></script>
		<script>
			$(document).ready(function() {
				/*https://bm-2016.wilddogio.com/*/
				/*https://danmu.wilddogio.com*/
				var ref = new Wilddog("https://bm-2016.wilddogio.com/");
				var arr = [];

				$(".btn-send").click(function() {
					var text = $(".btn-input").val();
					ref.child('message').push(text);
					$(".btn-input").val('');
				});

				$(".btn-input").keypress(function(event) {
					if(event.keyCode == "13") {
						$(".btn-send").trigger('click');
					}
				});

				$(".btn-clear").click(function() {
					ref.remove();
					arr = [];
					$('.d_show').empty();
				});

				ref.child('message').on('child_added', function(snapshot) {
					var text = snapshot.val();
					arr.push(text);
					var textObj = $("<div class=\"dm_message\"></div>");
					textObj.text(text);
					$(".d_show").append(textObj);
					moveObj(textObj);
				});

				ref.on('child_removed', function() {
					arr = [];
					$('.d_show').empty();
				});

				//				var topMin = $('.d_mask').offset().top;
				var topABC = $('.d_mask').offset();
				var topMin = topABC.top;
				//				console.log(topMin);
				var topMax = topMin + $('.d_mask').height();
				var _top = topMin;

				var moveObj = function(obj) {
					//					var _left = $('.d_mask').width() - obj.width() + 100;
					//					var _left = $('.d_mask').width() + obj.width() + 100;
					var _left = $('.d_mask').width() + 320;
					_top = _top + 70;
					if(_top > (topMax - 200)) {
						_top = topMin;
					}
					obj.css({
						left: _left,
						top: _top,
						color: getReandomColor()
					});
					var time = 20000 + 10000 * Math.random();
					obj.animate({
						//						left: "-" + _left + "px"
						left: -obj.width() - 100
					}, time, function() {
						obj.remove();
					});
				}

				var getReandomColor = function() {
					return '#' + (function(h) {
						return new Array(7 - h.length).join("0") + h
					})((Math.random() * 0x1000000 << 0).toString(16))
				}

				var getAndRun = function() {
					if(arr.length > 0) {
						var n = Math.floor(Math.random() * arr.length + 1) - 1;
						var textObj = $("<div>" + arr[n] + "</div>");
						$(".d_show").append(textObj);
						moveObj(textObj);
					}

					setTimeout(getAndRun, 2000);
				}

				jQuery.fx.interval = 50;
				getAndRun();
			});
		</script>
		<!-- Initialize Swiper -->
		<script>
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				mousewheelControl: true, //鼠标控制：true
				//      nextButton: '.swiper-button-next',
				//      prevButton: '.swiper-button-prev',
				parallax: true,
				speed: 600,
				//onInit：
				onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素 
					swiperAnimate(swiper); //初始化完成开始动画
				},
				onSlideChangeEnd: function(swiper) {
					swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				}
			});
		</script>
		<script type="text/javascript">
			window.onload = function() {
				if(!isWeiXin()) {
					//alert('微信浏览器')
					$('#header').css('display', 'block');
				}
			}

			//判断是否是微信浏览器
			function isWeiXin() {
				var ua = window.navigator.userAgent.toLowerCase();
				//				console.log(ua);
				//      alert(ua);
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					return true;
				} else {
					return false;
				}
			}
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
  wx.ready(function () {
    // 在这里调用 API
    console.log('调用成功');
    wx.onMenuShareAppMessage({
    title: 'H5产品组', // 分享标题
    desc: '蓝月亮·H5产品组：您的满意，我们的动力！', // 分享描述
    link: 'wx.xykjg.com', // 分享链接
    imgUrl: 'http://wx.xykjg.com/LOGO.png', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
        // 用户确认分享后执行的回调函数
        console.log('分享成功');
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
        console.log('分享取消');
    }
		});
	wx.onMenuShareTimeline({
    title: 'H5产品组', // 分享标题
    link: 'wx.xykjg.com', // 分享链接
    imgUrl: 'http://wx.xykjg.com/LOGO.png', // 分享图标
    success: function () { 
        // 用户确认分享后执行的回调函数
        console.log('分享成功');
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
        console.log('分享取消');
    }
		});
  });
		</script>
	</body>
</html>