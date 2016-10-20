//监听微信touchstart,禁止页面上下滑动
//document.querySelector('body').addEventListener('touchstart', function(ev) {
//	event.preventDefault();
//});

//微信分享api
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]), function(res) {
		wx.config({
			//			beta: true,
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
				title: '有理想，创未来！',
				desc: '蓝月亮社会招聘-首发起航！——蓝月亮应用设计中心',
				link: location.href,
				imgUrl: 'http://wx.xykjg.com/dist/img/share.png'
			});
			wx.onMenuShareTimeline({
				title: '有理想，创未来！',
				link: "https://weui.io",
				imgUrl: 'http://wx.xykjg.com/dist/img/share.png'
			});
			//wx.onMenuShareQQ(option);
		});
	});
}
setJSAPI();