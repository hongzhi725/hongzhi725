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
		$.getJSON('information.json',function(data) {
			document.getElementById('title1').innerText = '活动时间：' + data.shop[id].time;
			document.getElementById('title2').innerText = '活动地点：' + data.shop[id].add;
			document.getElementById('title11').innerText = '活动时间：' + data.shop[id].time;
			document.getElementById('title22').innerText = '活动地点：' + data.shop[id].add;
			document.getElementById('title3').innerText = data.shop[id].add;
			$('.showword').css('background',data.shop[id].bg);
			$('.showword').css('background-size',"100%");
			$('.bottomlogo').css('background',data.shop[id].bottomlogo);
			$('.bottomlogo').css('background-size',"100%");
		});
	}
}
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
				title: '蓝月亮祝您圣诞快乐！',
				desc: '圣诞礼品送不停！\n活动地址：'+ document.getElementById('title3').innerText,
				link: location.href,
				imgUrl: 'http://wx.xykjg.com/mkt/Christmas/share.png'
			});
			wx.onMenuShareTimeline({
				title: '蓝月亮祝您圣诞快乐！',
				link: location.href,
				imgUrl: 'http://wx.xykjg.com/mkt/Christmas/share.png'
			});
			//wx.onMenuShareQQ(option);
		});
	});
}
setinformation();
setJSAPI();