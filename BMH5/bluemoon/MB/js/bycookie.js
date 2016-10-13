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
			console.log("【Box】：" + boxWidth + "，" + "高：" + boxHeight);
			if(clientWidth <= 375) {
				box.style.width = '100vw';
				box.style.left = '0';
				console.log("【Box调整1】宽：" + box.clientWidth + "，" + "高：" + box.clientHeight);
			} else {
				box.style.width = '62.18905472636816vh';
				box.style.left = 'calc(50vw - 31.09452736318408vh)';
			}
			if (boxWidth>=clientWidth) {
				box.style.width = '100vw';
				box.style.left = '0';
				console.log("【Box调整2】宽：" + box.clientWidth + "，" + "高：" + box.clientHeight);
			} else{
				console.log('【注意】box宽度适合')
			}
//			alert(clientWidth);
//			alert(clientHeight);
			docEl.style.fontSize = 12 * (boxWidth / 375) + 'px';
			console.log("【font-size调整】结果：" + docEl.style.fontSize);
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);