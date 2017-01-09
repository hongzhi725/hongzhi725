//监听微信touchstart,禁止页面上下滑动
//document.querySelector('.box').addEventListener('touchstart', function(ev) {
//	ev.preventDefault();
//});

//微信分享api
//alert(decodeURI(location.href.split('#')[0]))
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]) + '&kind=H5PG&id=2', function(res) {
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