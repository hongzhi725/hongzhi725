function isPC() {
	var a = navigator.userAgent;
	var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "MiuiBrowser"];
	var c = true;
	for (var v = 0; v < b.length; v++) {
		if (a.indexOf(b[v]) > 0) {
			c = false;
			break;
		}
	}
	return c;
}
document.addEventListener("touchmove", function(n) {
	n.preventDefault()
}, false);
window.onresize = resizeNew;

function resizeNew() {
	if (document.documentElement.clientWidth / document.documentElement.clientHeight < 640 / 1024) {
		$('#mainBox').css({
			"width": document.documentElement.clientWidth + "px",
			"height": document.documentElement.clientWidth / 640 * 1024 + "px",
			"marginLeft": 0,
			"marginTop": (document.documentElement.clientHeight - document.documentElement.clientWidth / 640 * 1024) / 2 + "px"
		});
		$('html').css({
			'fontSize': document.documentElement.clientWidth / 360 * 11 + 'px'
		});
		$('body').css({
			'fontSize': document.documentElement.clientWidth / 360 * 11 + 'px'
		})
	} else {
		$('#mainBox').css({
			"width": document.documentElement.clientHeight / 1024 * 640 + "px",
			"height": document.documentElement.clientHeight + "px",
			"marginTop": 0,
			"marginLeft": (document.documentElement.clientWidth - document.documentElement.clientHeight / 1024 * 640) / 2 + "px"
		});
		$('html').css({
			'fontSize': document.documentElement.clientHeight / 504 * 9 + 'px'
		});
		$('body').css({
			'fontSize': document.documentElement.clientHeight / 504 * 9 + 'px'
		})
	}
}
function init() {
	var a = [
		['原来翻开《大学浓缩升级配方》的人都将获得一次撩到真爱的机会，在这次即将到来的奇特邂逅中。<br/>你希望自己遇到一个： '],
		['你被窗外耀眼的阳光晃清醒，在图书馆里虎躯一震，低头看着桌面，你手里居然拿着一本《母猪多胎高产关键技术》？你不是来当学霸的吗？一脸懵逼的你 正襟危坐，决定认真学习。'],
		['你转着小笔戴着耳机沉浸在学霸的世界，小笔一甩，突然泼出墨水来，墨水在天空划出一条完美的弧线，然后落在了前排小姑娘的衣服后背。这时你会'],
		['女生似乎觉察到什么，微微转过身，你的心提到嗓子眼，默念着“什么都没发现什么都没发现”，女生转过身后又继续学习'],
		['你一副如释重负的表情，小小的尴尬耗尽了你一身正气，看来学霸路线还是不适合你，还是回去宿舍洗洗打撸啊撸吧'],
		['你惴惴不安小鹿乱撞地碰了下女生的后背，无比虔诚地向女生表达歉意，转过身的女子，迎面而来的女神气息瞬间把你征服，女生淡淡说了声“没事”。 '],
		['你怔怔地看着她的背影不能自拔，几个小时才缓过来，看了下表，原来已经快中午了，学习一上午的你成就满满地走出图书馆，这时候你准备'],
		['回到宿舍，你走出阳台想洗个脸，发现对面阳台有个熟悉的身影：这不是刚刚那个女生吗？这时你拿起一个“机洗至尊”卡通瓶，贴了个大笑脸，往对面傻楞地“嘿”了一声。'],
		['女生随手也拿起一个机洗至尊卡通瓶，贴了个哭脸，朝你摇了摇，你觉得她挺可爱挺好玩的，所以又在自己的瓶子上贴了两只手，你似乎望见妹子灿烂的笑容仿佛一朵太阳下的小雏菊。'],
		['突然女生反手甩出一瓶子，随口一句“MDZZ，泼了我衣服还那么拽”，你躲闪不及，正中脑门，在被120送往精神病院的途中'],
		['你到楼下超市买吃时，突然发现超市货架上摆着的旅行装洗衣液很是精致小巧，想起那个对不起的她，万千情绪涌上心头决定还是买一只回去给她将功补过，挽回形象。'],
		['你满心欢喜的拿着旅行装回图书馆，发现前排的座位，没了妹子的身影，这时候你'],
		['你百无聊赖的在座位上，抓起桌上的便利贴画了她的背影，嗯嗯，这里长发及腰，这里…画的起劲，突然感觉身后一个影子，你感觉不对劲，回过头，发现女生在身后看着'],
		['你一下子惊起，动作幅度之大差点掀翻桌子。还好你一身正气不紧不慢的掏出你的旅行装，支支吾吾，“这个给你，不好意思啦”'],
		['可能是你的正（sha）气（leng）震慑到女生让她不禁笑了起来，她接过旅行装，说“这个我收了”又拿过来桌上的画着背影的便利贴，“这个，我想留下”'],
		['作为大一新生的你，坚信“图书馆必遇真爱”，你在图书馆闲逛，眼睛一眯，感觉到窗边一个发光体的强烈吸引。上前一看，腹诽：“见鬼，遇到真·男神了”'],
		['经过百番打听，你得知男生非常喜欢下棋，在学校的“风云棋社”有很高的赞誉。对下棋一窍不通的你秉承着“听党指挥，能打胜战”的心理毅然决然地报名面试。'],
		['很幸运，你的面试就是和这个男生下一盘象棋，可惜开盘不利，没走几步你的帅就被对方吃了，这个时候你选择'],
		['男神可远观不可亵玩，百无聊赖的你走在回宿舍的路上。'],
		['你耍赖说自己的帅有三条命，并开启撒娇技能。'],
		['之后下象棋，你多次发挥自己的聪明才智，你的象是小飞象可以飞过河，你的车是碰碰车可以拐弯，最后使出致命一击，用对方的士吃了对方的将，并声称那是自己的卧底。男生觉得三观被刷新了，邀请你私下解决这件事，此时你选择'],
		['你给男生留下了深深的心理阴影，直接宣告你面试失败。你失落地约了闺蜜准备去大吃一顿。'],
		['顺利地解决了面试的乌龙，你也成功地要到了男生的微信，之后你不断地制造偶遇事件。'],
		['你们上了同样的选修课，匆匆而来的你忘记了带课本，于是你主动坐在男生旁边，男生把书给了你但有些担心你像上次一样耍无赖。不过这次你安静地在自己的位置上听课，认真的神情反而让男生有些动心。'],
		['终于在你的多次勾搭和偶遇之后，男生确定了自己的心意，决定以一封情书向你告白，而你则羞涩地点了点头，再次腹诽，多日矜持，老娘终于把你扑倒了。'],
		['你翻开这本书，忽然间狂风袭来，伴着一阵素雅兰香，你被卷入书中。再次睁开眼时，发现天已经亮了，图书馆也变了模样…… '],
	];
	var b = 0,
		isAnimating = false,
		old_people = 0,
		now_people = 0,
		magnifier = $('#magnifier');

	function page1() {
		if (isAnimating) return false;
		isAnimating = true;
		$('.book').addClass('book_Move');
		$('.button').hide();
		$(".people").children('img').hide();
		setTimeout(function() {
			$('.page1').hide();
			$('.page2').show();
			$('.paper').fadeOut(600);
			$('.paper2').fadeIn(300);
			$('.book').hide();
			$('.text_bk').fadeIn(300);
			$("#text").html(a[25]).fadeIn(300);
			$("#img").find('img').eq(25).fadeIn(300);
			$(".people").children('img').eq(0).fadeIn(300);
			$('#button0').fadeIn(300);
			setTimeout(function() {
				$('.book').removeClass('book_Move');
				isAnimating = false
			}, 600)
		}, 1200)
	}
	function buttonF(e) {
		magnifier.hide();
		$('.map').find('img').hide();
		$('.popup').hide();
		switch (e) {
		case 0:
			now_people = 0;
			nextPage(0);
			$('#button1').fadeIn(300);
			$('#button2').fadeIn(300);
			break;
		case 1:
			now_people = 0;
			nextPage(1);
			magnifier.delay(300).fadeIn(300).css({
				'left': '65%',
				'top': '30%'
			}).attr('data-num', 0);
			$('#button12').delay(300).fadeIn(300);
			break;
		case 2:
			now_people = 0;
			nextPage(2);
			$('#button3').fadeIn(300);
			$('#button4').fadeIn(300);
			break;
		case 3:
			now_people = 0;
			nextPage(3);
			magnifier.delay(300).fadeIn(300).css({
				'left': '60%',
				'top': '45%'
			}).attr('data-num', 3);
			$('#button13').fadeIn(300);
			break;
		case 4:
			now_people = 0;
			nextPage(4);
			magnifier.delay(300).fadeIn(300).css({
				'left': '60%',
				'top': '45%'
			}).attr('data-num', 4);
			$('#button14').fadeIn(300);
			break;
		case 5:
			now_people = 0;
			nextPage(5);
			$('#button15').fadeIn(300);
			break;
		case 6:
//			now_people = 0;
//			b = 6;
//			enDing(0);
//			break;
			now_people = 0;
			nextPage(6);
			$('#button5').fadeIn(300);
			$('#button6').fadeIn(300);
			break;
		case 7:
			now_people = 0;
//			$('.map').find('img').eq(3).show();
			nextPage(7);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '58%',
//				'top': '15%'
//			}).attr('data-num', 1);
			$('#button16').fadeIn(300);
			break;
		case 8:
			now_people = 0;
//			$('.map').find('img').eq(3).show();
			nextPage(8);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '63%',
//				'top': '44%'
//			}).attr('data-num', 2);
			$('#button17').fadeIn(300);
			break;
		case 9:
			now_people = 0;
//			$('.map').find('img').eq(2).show();
			nextPage(9);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '78%',
//				'top': '50%'
//			}).attr('data-num', 5);
			$('#button18').fadeIn(300);
			break;
		case 10:
			now_people = 0;
//			$('.map').find('img').eq(2).show();
			nextPage(10);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '42%',
//				'top': '35%'
//			}).attr('data-num', 6);
			$('#button19').fadeIn(300);
			break;
		case 11:
			now_people = 0;
//			$('.map').find('img').eq(0).show();
			nextPage(11);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '70%',
//				'top': '45%'
//			}).attr('data-num', 7);
			$('#button7').fadeIn(300);
			$('#button6').fadeIn(300);
			break;
		case 12:
			now_people = 0;
//			$('.map').find('img').eq(0).show();
			nextPage(12);
			$('#button20').fadeIn(300);
			break;
		case 13:
			now_people = 0;
//			$('.map').find('img').eq(0).show();
			nextPage(13);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '65%',
//				'top': '30%'
//			}).attr('data-num', 8);
			$('#button21').fadeIn(300);
			break;
		case 14:
			now_people = 0;
//			$('.map').find('img').eq(1).show();
			nextPage(14);
			$('#button22').fadeIn(300);
			break;
		case 15:
			now_people = 1;
//			$('.map').find('img').eq(1).show();
			nextPage(15);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '60%',
//				'top': '25%'
//			}).attr('data-num', 9);
			$('#button23').fadeIn(300);
			break;
		case 16:
			now_people = 1;
//			$('.map').find('img').eq(1).show();
			nextPage(16);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '30%',
//				'top': '25%'
//			}).attr('data-num', 10);
			$('#button24').fadeIn(300);
			break;
		case 17:
			now_people = 1;
			nextPage(17);
			$('#button8').fadeIn(300);
			$('#button9').fadeIn(300);
			break;
		case 18:
			now_people = 1;
//			$('.map').find('img').eq(1).show();
			nextPage(18);
//			magnifier.delay(300).fadeIn(300).css({
//				'left': '60%',
//				'top': '25%'
//			}).attr('data-num', 9);
			$('#button18').fadeIn(300);
			break;
		case 19:
			now_people = 1;
			nextPage(19);
			$('#button25').fadeIn(300);
			break;
		case 20:
			now_people = 1;
			nextPage(20);
			$('#button10').fadeIn(300);
			$('#button11').fadeIn(300);
			break;
		case 21:
			now_people = 1;
			nextPage(21);
			$('#button18').fadeIn(300);
			break;
		case 22:
			now_people = 1;
			nextPage(22);
			$('#button26').fadeIn(300);
			break;
		case 23:
			now_people = 1;
			nextPage(23);
			$('#button27').fadeIn(300);
			break;
		case 24:
			now_people = 1;
			nextPage(24);
			$('#button22').fadeIn(300);
			break;	
		//结束的2个case：
		case 90:
			now_people = 0;
			b = 90;
			enDing(0);
			break;
		case 91:
			now_people = 0;
			b = 91;
			enDing(1);
			break;	
		}
	}
	function enDing(e) {
		changeTitle(e);
		$(".end_text").find('img').hide();
		$(".end_img").find('img').hide();
		$(".end_text").find('img').eq(e).show();
		$(".end_img").find('img').eq(e).show();
		$('.return_button').show();
		$('.share_button').show();
		$('.page3').fadeIn(300);
		setTimeout(function() {
			$('.page2').fadeOut(300)
		}, 300)
	}
	function nextPage(e) {
		$('.button').fadeOut(300);
		if (old_people != now_people) {
			$(".people").children('img').fadeOut(300)
		}
		if (e >= 0) b = e;
		else return false;
		$("#text").fadeOut(300);
//		if (b != 8) $("#img").find('img').fadeOut(300);
		$("#img").find('img').fadeOut(300);
		setTimeout(function() {
			$("#text").html(a[b][0]).fadeIn(300);
//			if (b != 8) $("#img").find('img').eq(b).fadeIn(300);
			$("#img").find('img').eq(e).fadeIn(300);
			if (old_people != now_people) {
				$(".people").children('img').eq(now_people).fadeIn(300)
			}
			old_people = now_people
		}, 300)
	}
	function magnifierF(e) {
		$('.popup_text').hide();
		$('.popup_text').eq(e).show();
		$('.popup').show()
	}
	function returnF() {
		if (isAnimating) return false;
		isAnimating = true;
		$('.page1').fadeIn(300);
		$('.page3').fadeOut(300);
		$('.paper2').hide();
		$('.paper').show();
		$('.book').show().addClass('book_Move2');
		setTimeout(function() {
			$('.book').removeClass('book_Move2');
			isAnimating = false
		}, 1200);
		nextPage(25)
	}
	if (!isPC()) {
		$('.page1').on('touchend', function() {
			page1()
		});
		$('.button').on('touchend', function() {
			if (isAnimating) return false;
			else {
				isAnimating = true;
				$('.button').hide();
				buttonF(parseInt($(this).attr('data-num')));
				setTimeout(function() {
					isAnimating = false
				}, 600)
			}
		});
		magnifier.on('touchend', function() {
			magnifierF($(this).attr('data-num'))
		});
		$('.popup_close').on('touchend', function() {
			$('.popup').hide()
		});
		$('.popup').on('touchend', function() {
			$('.popup').hide()
		});
		$('.return_button').on('touchend', function() {
			returnF()
		});
		$('.map_button').find('img').on('touchend', function() {
			$(".map_box").show();
			$(".map_mask").children('img').hide();
			if ($(this).attr('data-num')) {
				$(".map_mask").children('img').eq($(this).attr('data-num')).show()
			}
		});
		$('.map_show').on('touchend', function() {
			$(".map_box").show();
			$(".map_mask").children('img').hide()
		});
		$('.map_box').on('touchend', function() {
			$(".map_box").hide();
			$(".map_mask").children('img').hide()
		});
		$('.share_button').on('touchend', function() {
			$('.share_mask').show()
		});
		$('.share_mask').on('touchend', function() {
			$('.share_mask').hide()
		})
	} else {
		$('.page1').on('mouseup', function() {
			page1()
		});
		$('.button').on('mouseup', function() {
			if (isAnimating) return false;
			else {
				isAnimating = true;
				$('.button').hide();
				buttonF(parseInt($(this).attr('data-num')));
				setTimeout(function() {
					isAnimating = false
				}, 600)
			}
		});
		magnifier.on('mouseup', function() {
			magnifierF($(this).attr('data-num'))
		});
		$('.popup_close').on('mouseup', function() {
			$('.popup').hide()
		});
		$('.popup').on('mouseup', function() {
			$('.popup').hide()
		});
		$('.return_button').on('mouseup', function() {
			returnF()
		});
		$('.map_button').find('img').on('mouseup', function() {
			$(".map_box").show();
			$(".map_mask").children('img').hide();
			if ($(this).attr('data-num')) {
				$(".map_mask").children('img').eq($(this).attr('data-num')).show()
			}
		});
		$('.map_show').on('mouseup', function() {
			$(".map_box").show();
			$(".map_mask").children('img').hide()
		});
		$('.map_box').on('mouseup', function() {
			$(".map_box").hide()
		});
		$('.share_button').on('mouseup', function() {
			$('.share_mask').show()
		});
		$('.share_mask').on('mouseup', function() {
			$('.share_mask').hide()
		});
		document.addEventListener("mouseup", function(n) {
			n.preventDefault()
		}, false)
	}
}