//监听微信touchstart,禁止页面上下滑动
//document.querySelector('body').addEventListener('touchstart', function(ev) {
//	event.preventDefault();
//});
//Get网址参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return r[2];
	return null;
}
//老方法
//var time = decodeURI(GetQueryString("time"));
//var add = decodeURI(GetQueryString("add"));
//var keyword = decodeURI(GetQueryString("key"));
//if (add != 'null' && add!="" && time != 'null' && time != "" && keyword =='bluemoon2016') {
//	document.getElementById('title1').innerText = '活动时间：'+time;
//	document.getElementById('title2').innerText = '活动地址：'+add;
//}
//var ext;
//新方法，数据存在json
function setinformation() {
	var id = decodeURI(GetQueryString("id"));
	if(id != 'null' && id != "") {
		console.log(id);
		$.getJSON('../information.json',function(data) {
			document.getElementById('title1').innerText = '活动时间：' + data.shop[id].time;
			document.getElementById('title2').innerText = '活动地址：' + data.shop[id].add;
			document.getElementById('title3').innerText = data.shop[id].add;
		});
	}
}
//微信分享api
function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]), function(res) {
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
				title: '蓝月亮超值内购会',
				desc: '①买一送一，内购再送500g洗衣液2袋②买“2”送宝宝洗衣液1瓶，500g洗衣液1袋！',
				link: location.href,
				imgUrl: 'http://wx.xykjg.com/sales/ngh/5/img/share.png'
			});
			wx.onMenuShareTimeline({
				title: '蓝月亮超值内购会',
				link: location.href,
				imgUrl: 'http://wx.xykjg.com/sales/ngh/5/img/share.png'
			});
			//wx.onMenuShareQQ(option);
		});
	});
}
//setinformation();
setJSAPI();