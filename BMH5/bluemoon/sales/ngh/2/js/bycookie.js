(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			var clientHeight = docEl.clientHeight;
			console.log("【设备】宽：" + clientWidth + "，" + "高：" + clientHeight);
			docEl.style.fontSize = 12 * (clientWidth / 375) + 'px';
			console.log("【font-size调整后】" + docEl.style.fontSize);
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);