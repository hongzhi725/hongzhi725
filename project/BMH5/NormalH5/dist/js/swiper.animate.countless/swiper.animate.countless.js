//本插件由www.swiper.com.cn提供
//本插件可以执行多个动画
//使用例子<div class="ani"  swiper-animate='[{"animate":"fadeInUpBig","delay":"0s","duration":"0.5s"},{"animate":"flip","delay":"0s","duration":"0.5s"}]' >Slide 1 Slide 1 Slide 1</div>
function swiperAnimateCache() {
	for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
		allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "),
			allBoxes[i].attributes["class"] ? allBoxes[i].setAttribute("swiper-animate-class-cache", allBoxes[i].attributes["class"].value) : allBoxes[i].setAttribute("swiper-animate-class-cache", " "),
			allBoxes[i].style.visibility = "hidden"
	}
}
//触发要运行的动画
function swiperAnimate(a) {
	clearSwiperAnimate();
	var b = a.slides[a.activeIndex].querySelectorAll(".ani");
	for (var i = 0; i < b.length; i++) {
		var bb = b[i];
		var swiperAnimate = JSON.parse(bb.attributes["swiper-animate"] ? bb.attributes["swiper-animate"].value : "");
		executionAnimate(bb, swiperAnimate)
	}
}
//遍历要执行的动画
function executionAnimate(bb, swiperAnimate) {
	for (var j = 0; j < swiperAnimate.length; j++) {
		//计算每个动画的开始时间
		var LastTime = parseFloat(swiperAnimate[j - 1] ? swiperAnimate[j - 1].time : 0);
		var LastTDelay = parseFloat(swiperAnimate[j-1] ? swiperAnimate[j-1].delay : 0);
		var LastTDuration = parseFloat(swiperAnimate[j-1] ? swiperAnimate[j-1].duration : 0);
		swiperAnimate[j].time = LastTime + LastTDelay + LastTDuration + "s";
		//计算每个动画的开始时间end
		var time = swiperAnimate[j] ? swiperAnimate[j].time : "";
		time = parseFloat(time) * 1000;
		DelayExecutionAnimate(bb,swiperAnimate[j],time);
	}
}
//延时执行动画
function DelayExecutionAnimate(bb,SwiperAnimate,time) {
	setTimeout(function(){delayExecutionAnimate(bb,SwiperAnimate,time)}, time);
}
//立刻执行动画
function delayExecutionAnimate(bb, SwiperAnimate, time) {
	var style = bb.attributes["swiper-animate-style-cache"].value + " visibility:visible;";
	var className = bb.attributes["swiper-animate-class-cache"].value;
	var animate = SwiperAnimate.animate ? SwiperAnimate.animate : "";
	bb.className = className + " " + animate + " " + "animated";
	var delay = SwiperAnimate.delay ? SwiperAnimate.delay : "";
	var duration = SwiperAnimate.duration ? SwiperAnimate.duration : "";
	bb.setAttribute("style", style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";")
}
//重置style和class
function clearSwiperAnimate() {
	for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
		allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value),
			allBoxes[i].attributes["swiper-animate-class-cache"] && allBoxes[i].setAttribute("class", allBoxes[i].attributes["swiper-animate-class-cache"].value),
			allBoxes[i].style.visibility = "hidden"
	}
}