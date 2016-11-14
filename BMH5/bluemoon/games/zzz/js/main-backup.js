var levelnum = 0;
var bmnum;
var isRun = false;
var sharetitle = "通关大挑战！快来抓我呀！";
//自定义主页面
var strVar = "";
strVar += "<div class=\"lamp\"><\/div>";
strVar += "<div class=\"p1\"><\/div>";
strVar += "<div class=\"level_1\" style=\"display: none;\">";
strVar += "	<div class=\"jxzz_zd jxzz_zd1\"><\/div>";
strVar += "	<div class=\"jxzz_zd jxzz_zd2\"><\/div>";
strVar += "	<div class=\"jxzz_zd jxzz_zd3\"><\/div>";
strVar += "	<div class=\"bm\"><\/div>";
strVar += "	<div class=\"jxzz jxzz_1\" id=\"jxzz_1\" num=\"1\"><\/div>";
strVar += "	<div class=\"jxzz jxzz_2\" id=\"jxzz_2\" num=\"2\"><\/div>";
strVar += "	<div class=\"jxzz jxzz_3\" id=\"jxzz_3\" num=\"3\"><\/div>";
strVar += "	<div class=\"catch\" id=\"catch\"><\/div>";
strVar += "<\/div>";
strVar += "<div class=\"dec\">第 <span id=\"levelword\">0<\/span> 关<\/div>";
strVar += "<div class=\"btn_help\"><\/div>";
strVar += "<div class=\"btn_go btn_start\" id=\"go\" num=\"0\" isable=\"true\"><\/div>";
strVar += "<div class=\"mask\"><\/div>";
strVar += "<div class=\"gameover\">";
strVar += "	<div class=\"score\">0<\/div>";
strVar += "	<div class=\"again_btn\"><\/div>";
strVar += "	<div class=\"share_btn\"><\/div>";
strVar += "<\/div>";
strVar += "<div class=\"help\"><\/div>";
strVar += "<div class=\"share_png\"><\/div>";
$('.game_box').append(strVar);
//自定义结束
//$('.game_box').append('<div class="lamp"></div><div class="p1"></div><div class="level_1" style="display: none;"><div class="jxzz_zd jxzz_zd1"></div><div class="jxzz_zd jxzz_zd2"></div><div class="jxzz_zd jxzz_zd3"></div><div class="bm"></div><div class="jxzz jxzz_1" id="jxzz_1" num="1"></div><div class="jxzz jxzz_2" id="jxzz_2" num="2"></div><div class="jxzz jxzz_3" id="jxzz_3" num="3"></div><div class="catch" id="catch"></div></div><div class="dec">第 <span id="levelword">0</span> 关</div><div class="btn_help"></div><div class="btn_go btn_start" id="go" num="0" isable="true"></div><div class="mask"></div><div class="gameover"><div class="score">0</div><div class="again_btn"></div><div class="share_btn"></div></div><div class="help"></div><div class="share_png"></div>')
$(function() {
	//变量：关卡(levelnum)，小人位置(bmnum)
	var A = $('.jxzz_1');
	var B = $('.jxzz_2');
	var C = $('.jxzz_3');
	var dx = new Array(A, B, C);
	$('.dec').css('display', 'none');
	$('.mask').css('display', 'none');
	$('.gameover').css('display', 'none');
	//开始按钮的绑定
	$('#go').click(function() {
		btnS(levelnum);
	});
	//分享按钮绑定
	$('.share_btn').click(function() {
		$('.mask').css('z-index', '1');
		$('.share_png').css('display', 'block');
	});
	$('.share_png').click(function() {
		$('.mask').css('z-index', '0');
		$('.share_png').css('display', 'none');
	});
	$('.btn_help').click(function() {
		$('.help').css('display', 'block')
	});
	$('.help').click(function() {
		$('.help').css('display', 'none')
	});
	//再挑战一次的绑定
	$('.again_btn').click(function() {
		//关卡清零，场景还原，gameover页面消失
		levelnum = 1;
		rescene(dx);
		$('.mask').css('display', 'none');
		$('.gameover').css('display', 'none');
		e_m.pause();
		bg_m.play();
	});

	function btnS(e) {
//		console.log('【当前关卡】' + e);
		switch(e) {
			case 0:
				$('.p1').fadeOut();
				setTimeout(function() {
					$('.level_1').fadeIn();
					$('.dec').fadeIn();
					$('#go').removeClass('btn_start');
					$('#go').addClass('btn_go1');
				}, 750);
				$('#go').attr('num', '1');
				if(levelnum == 0) {
					levelnum = levelnum + 1;
					$('#levelword').text(levelnum);
					getandmovebm(1, 3);
				}
				break;
			case 1:
				if(btnback() == true) {
					level(1);
				}
			default:
				if(btnback() == true) {
					level(e);
				}
				break;
		}
	}
	//判断按钮当前状态并返回状态值,false:失效;true:有效
	function btnback() {
		var back = $('#go').attr('isable');
		switch(back) {
			case 'true':
				$('#go').addClass('btn_go2');
				$('#go').removeClass('btn_go1');
				$('#go').attr('isable', 'false');
				return true;
				break;
			case 'false':
//				console.log('【按钮状态】已点击');
			default:
				break;
		}
	}

	function btnrestart() {
		$('#go').addClass('btn_go1');
		$('#go').removeClass('btn_go2');
		$('#go').attr('isable', 'true');
	}

	function level(num) {
		if(num <= 10) {
			num = num * 2;
		} else {
			num = 20 + (num - 10);
		}
//		console.log('【调换次数】' + num)

		A.animate({
			top: '40%'
		});
		B.animate({
			top: '50%'
		});
		C.animate({
			top: '40%'
		});
		var delay = 500 - num * 20;
		if(delay <= 100) {
			delay = 100;
		}
		setTimeout(function() {
			$('.bm').hide();
			rdmove(dx, num, delay);
			pickup();
		}, 600)
	}

	function rescene(object) {
		var i = object.length;
//		console.log(i);
		//先隐藏
		for(j = 0; j < i; j++) {
			object[j].fadeOut(500);
		};
		$('.bm').fadeOut(500);
		$('#catch').fadeOut(500, function() {
			object[0].css({
				"top": '20%',
				"left": '10%'
			});
			object[1].css({
				"top": '20%',
				"left": '37.71%'
			});
			object[2].css({
				"top": '20%',
				"left": '65.42%'
			});
			$('.bm').css({
				"top": '50%',
				"left": '37.71%'
			});
			$('#catch').css({
				"top": '0%',
				"left": '37.71%'
			});
			//再显示
			for(j = 0; j < i; j++) {
				object[j].fadeIn();
			};
			$('.catch').addClass('catch');
			$('.catch').removeClass('catch2');
			getandmovebm(1, 3);
			$('.bm').fadeIn();
			$('#catch').fadeIn();
			$('#levelword').text(levelnum);
			//显示结束
			btnrestart();
		});
		//隐藏结束

	}

	function pickup() {
		var timer = setInterval(function() {
			if(isRun == false) {
				showbm(bmnum);
//				console.log('【选择开始】');
				clearInterval(timer);
				choose();
			}
		}, 550)
	}
	//移动结束后，确定小人位置并显示
	function showbm(num) {
		var top, left;
		top = $('.jxzz_' + num).css('top');
		left = $('.jxzz_' + num).css('left');
//		console.log(top);
//		console.log(left);
		//移动小人至此位置
		$('.bm').css({
			"top": top,
			"left": left
		})
		$('.bm').show();
	}

	function choose() {
		$('.jxzz').bind("click", function() {
			t_m.play();
			$('.jxzz').unbind();
//			console.log('【当前选择】' + $(this).attr('num'));
//			console.log('【小人位置】' + bmnum);
			var choosenum = $(this).attr('num');
			//执行机洗至尊被抓起动画
			movecatch(this, function() {
				setTimeout(function() {
					if(choosenum == bmnum) {
//						console.log('选对啦');
						$('.jxzz').unbind();
						//关卡+1，场景复原，按钮恢复;
						levelnum = levelnum + 1;
						rescene(dx);

					} else {
//						console.log('真笨');
						$('.jxzz').unbind();
						//弹出结束页面
						ending();
					}
				}, 550)
			});

		})
	}

	function ending() {
		bg_m.pause();
		e_m.play();
		var endnum = levelnum;
		$('.score').text(endnum);
		$('.mask').css('display', 'block');
		$('.gameover').css('display', 'block');
		if(endnum <= 5) {
			sharetitle = "跟瞎了没区别，我只闯到了第【" + endnum + "】关。快来解救我的双眼！"
		}
		if(endnum > 5) {
			sharetitle = "难以分辨雌雄双兔，遗憾的我只闯到了第【" + endnum + "】关。快来解救我的双眼！"
		}
		if(endnum > 10) {
			sharetitle = "需要做个视力检测，因我只闯到了第【" + endnum + "】关。快来解救我的双眼！"
		}
		if(endnum > 15) {
			sharetitle = "虽然我近视，但是我毅力爆棚！我闯到了第【" + endnum + "】关。你行么？"
		}
		if(endnum > 20) {
			sharetitle = "我就没觉得有几个人可以超越我！我闯到了第【" + endnum + "】关。你行么？"
		}
		wx.onMenuShareAppMessage({
			title: sharetitle,
			desc: "通关大挑战！快来抓我呀！",
			link: location.href,
			imgUrl: "http://wx.xykjg.com/mkt/game/zzz/zzz.png"
		});
		wx.onMenuShareTimeline({
			title: sharetitle,
			link: location.href,
			imgUrl: "http://wx.xykjg.com/mkt/game/zzz/zzz.png"
		});
	}

	function movecatch(object, callback) {
		var top, left;
		var height;
		var aftertop;
		height = parseInt($('#catch').css('height'));
		var c = $('.catch');
		var num = $(object).attr('num');
//		console.log('选则了：' + num);
		top = (parseInt($(object).css('top')) - height + 10) + 'px';
		aftertop = height - 10 + 'px';
		left = $(object).css('left');
		//开始移动
		c.animate({
			left: left
		}, 500);
		setTimeout(function() {
			c.animate({
				top: top
			}, 500);
			setTimeout(function() {
				c.addClass('catch2');
				//一起上移
				c.animate({
					top: "0%"
				}, 500);
				$(object).animate({
					top: aftertop
				}, 500, callback());
			}, 500)
		}, 550)
	}

	function getandmovebm(min, max) {
		bmnum = getRandomNum(min, max);
//		console.log("【当前小人位置】：" + bmnum);
		var top, left;
		//		$('.jxzz_' + bmnum).append("<div class='bm'></div>");
		//老方法：如果不确定有几个瓶子的方法
		//		var top = $('.jxzz_' + bmnum).css('top');
		//		var left = $('.jxzz_' + bmnum).css('left');
		//新方法：确定瓶子数量，直接赋值
		switch(bmnum) {
			case 1:
				top = "40%";
				left = "10%";
				break;
			case 2:
				top = "50%";
				left = "37.71%";
				break;
			case 3:
				top = "40%";
				left = "65.42%";
				break;
			default:
				break;
		}
		$('.bm').css({
			"top": top,
			"left": left
		})
	}

	function move(a, b, delay) {
		var x1, y1, x2, y2;
		x1 = a.css('top');
		y1 = a.css('left');
		x2 = b.css('top');
		y2 = b.css('left');
		//		console.log('【元素1】top：' + x1 + "|left：" + y1);
		//		console.log('【元素2】top：' + x2 + "|left：" + y2);
		a.animate({
			top: x2,
			left: y2
		}, delay);
		b.animate({
			top: x1,
			left: y1
		}, delay);
		//方法二：
		//		x1 = a.style.top;
		//		y1 = a.style.left;
		//		x2 = b.style.top;
		//		y2 = b.style.left;
		//		a.style.top = x2;
		//		a.style.left = y2;
		//		b.style.top = x1;
		//		b.style.left = y1;
	}
	//取范围内的随机数
	function getRandomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//取2个范围内的随机数
	function get2RandomNum(min, max) {
		var a, b;
		a = getRandomNum(min, max);
		b = getRandomNum(min, max);
		while(b == a) {
			b = getRandomNum(min, max);
		}
		var back = new Array(a, b);
		return back; //数组
	}

	function rdmove(object, time, delay) {
		//1.处理参数1，识别传入对象数组个数
		var obj = object;
		var i = object.length;
		var times = time;
		isRun = true;
//		console.log('isRun:' + isRun);
		for(a = 0; a < times; a++) {
			setTimeout(function() {
				var num = get2RandomNum(1, i);
				//				console.log('第一个：' + num[0] + '| 第二个：' + num[1])
				move(obj[num[0] - 1], obj[num[1] - 1], delay);
			}, 0 + a * (delay + 50))
		}
		setTimeout(function() {
			isRun = false;
//			console.log('isRun:' + isRun);
		}, times * (delay + 50))
	}
})

function setJSAPI() {
	$.getJSON('http://wx.xykjg.com/sign/?url=' + encodeURIComponent(location.href.split('#')[0]) + '&kind=mkt&id=2', function(res) {

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
			wx.onMenuShareAppMessage({
				title: sharetitle,
				desc: "通关大挑战！快来抓我呀！",
				link: location.href,
				imgUrl: res.imgUrl
			});
			wx.onMenuShareTimeline({
				title: sharetitle,
				link: location.href,
				imgUrl: res.imgUrl
			});
		});
	});
}
var globe;
setJSAPI();
init();
/*个性功能封装*/
function init() {
	preload();
	musicplay();
	var returnid = setInterval(function() {
		if(globe == 1) {
			console.log('已加载完成！！！！！！');
			clearInterval(returnid);
			//			musicplay();
			//			clipboard();
			//			swiperlhz();
			$('#loading').css('display', 'none');
		} else {
			//			console.log(globe);
		}
	}, 500)

}
var bg_m, e_m, t_m;
//右上角音乐按钮监听
function musicplay() {
	bg_m = $('audio').get(0);
	e_m = $('audio').get(1);
	t_m = document.getElementById('music3');
	//	var a=document.getElementById('music');
	bg_m.play();
	//	$('.music').click(function() {
	//		console.log('you touch the button');
	//		if(bg_m.paused) {
	//			bg_m.play();
	//			$(this).removeClass('paused');
	//		} else {
	//			bg_m.pause();
	//			$(this).addClass('paused');
	//		}
	//	});
}
/*PRELOAD预加载*/
function preload() {
	//1.loading预加载进度:定义变量 var nump
	//2.显示数字的id需设置:id=numprogress-id
	var nump;
	var numpid = 'loading-num';
	//----常规：
	var manifest;
	var preload;
	//定义相关JSON格式文件列表
	function setupManifest() {
		manifest = [{
			src: "https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js",
			id: "preloadjs"
		}, {
			src: "js/jquery-3.1.0.min.js",
			id: "jquery"
		}];
		var ImgSrc = new Array();
		ImgSrc = [
			"img/bg.png",
			"img/btn_start1.png",
			"img/btn_start2.png",
			"img/help.png",
			"img/p1.png",
			"img/share_png.png",
			"img/teach.jpg",
			"img/lampgif.gif",
			"img/game/bm.png",
			"img/game/btn_go1.png",
			"img/game/btn_go2.png",
			"img/game/catch1.png",
			"img/game/catch2.png",
			"img/game/dianzi.png",
			"img/game/jxzz.png",
			"img/game/catch2.png",
			"img/gameover/again.png",
			"img/gameover/bg.png",
			"img/gameover/share.png",
		];
		var length = ImgSrc.length;
		for (var i = 0; i <= length - 1; i++) {
			manifest.push({
				src: ImgSrc[i]
			})
		}
	}
	//开始预加载
	function startPreload() {
		preload = new createjs.LoadQueue(true);
		//注意加载音频文件需要调用如下代码行
		preload.installPlugin(createjs.Sound);
		preload.on("fileload", handleFileLoad);
		preload.on("progress", handleFileProgress);
		preload.on("complete", loadComplete);
		preload.on("error", loadError);
		preload.loadManifest(manifest);

	}
	//处理单个文件加载
	function handleFileLoad(event) {
		//	bar.animate(nump / 100);
//		console.log("文件类型: " + event.item.type + "文件名称：" + event.item.id);
	}
	//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
	function loadError(evt) {
		console.log("加载出错！", evt.text);
	}
	//已加载完毕进度 
	function handleFileProgress(event) {
		nump = preload.progress * 100 | 0;
//		console.log(nump);
		document.getElementById(numpid).innerText = nump;
	}
	//全度资源加载完毕
	function loadComplete(event) {
		console.log("【资源】已全部加载完毕");
		if(nump = 100) {
			setTimeout(function() {
				window.globe = 1;
			}, 250)
		}
	}
	setupManifest();
	startPreload();
}