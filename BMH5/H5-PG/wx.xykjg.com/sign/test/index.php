<?php
require_once "../jssdk.php";
$jssdk = new JSSDK("wx30511ac1f81afc6c", "7aac6c35d3b8f3b2234cb38513767526");
$signPackage = $jssdk->GetSignPackage('http://wx.xykjg.com/sign/test/index.php');
?>
	<!DOCTYPE html>
	<html>
	<head>
		<!--meta标签-->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<meta name="keywords" content="蓝月亮,校园招聘,2017,校招,蓝色梦想,月亮之上" />
		<meta name="description" content="蓝月亮校园招聘·长沙站" />
		<title>测试分享</title>
	</head>
	<body>
		哈哈哈
		<button id="addCard">测试</button>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script type="text/javascript">
			wx.config({
				debug: true,
				appId: '<?php echo $signPackage["appId"];?>',
				timestamp: '<?php echo $signPackage["timestamp"];?>',
				nonceStr: '<?php echo $signPackage["nonceStr"];?>',
				signature: '<?php echo $signPackage["signature"];?>',
				jsApiList: [
					// 所有要调用的 API 都要加到这个列表中
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'addCard'
				]
			});
			wx.ready(function() {
				// 在这里调用 API
				console.log('调用成功');
				wx.onMenuShareAppMessage({
					title: '<?php echo $signPackage["url"];?>', // 分享标题
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
				document.querySelector('#addCard').onclick = function () {
                    wx.addCard({
                      cardList: [
                        {
                          cardId: "xxxxxxxxxxxxxxxxxxxxxx",
                          cardExt: '{"timestamp":"1426222398","signature":"fdd892770eb681e925f92acb9015c75107b2227a"}'
                        }
                      ],
                      success: function (res) {
                        alert('已添加卡券：' + JSON.stringify(res.cardList));
                      }
                    });
                };
			});
		</script>
	</body>
	</html>