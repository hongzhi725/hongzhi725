//监听微信touchstart,禁止页面上下滑动
//document.querySelector('.box').addEventListener('touchstart', function(ev) {
//	ev.preventDefault();
//});

//微信分享api
//alert(decodeURI(location.href.split('#')[0]))
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]) +'&kind=sales&id=0', function(res) {
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