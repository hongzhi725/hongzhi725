$(function() {
	//----loading预加载
	//MADE BY COOKIE
	//1.loading预加载进度:定义变量 var nump
	//2.显示数字的id需设置:id=numprogress-id
	var nump;
	var numpid = 'loading-num';
	//-----------------常规：
	var manifest;
	var preload;
	//定义相关JSON格式文件列表
	function setupManifest() {
		manifest = [{
			src: "https://cdn.bootcss.com/PreloadJS/0.6.0/preloadjs.min.js",
			id: "preloadjs"
		}, ];
		var Imglist = document.getElementsByTagName('img');
		var length = Imglist.length;
		for(var i = 0; i <= length - 1; i++)
			manifest.push({
				src: Imglist[i].src
			})
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
		//	console.log("文件类型: " + event.item.type + "文件名称：" + event.item.id);
		if(event.item.id == "swiper") {
			console.log("logo图片已成功加载");
		}
	}
	//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
	function loadError(evt) {
		console.log("加载出错！");
	}
	//已加载完毕进度 
	function handleFileProgress(event) {
		nump = preload.progress * 100 | 0;
		console.log(nump);
		document.getElementById(numpid).innerText = nump;
	}
	//全度资源加载完毕
	function loadComplete(event) {
		console.log("【资源】已全部加载完毕");
		if(nump = 100) {
			setTimeout(function() {
				swiperlhz();
				$('#loading').css('display', 'none');
			}, 2000)
		}
	}
	setupManifest();
	startPreload();
	//右上角音乐按钮监听
	//用来监听按钮触发效果.Start
	document.body.addEventListener('touchstart', function() {});
	//用来监听按钮触发效果.End
	var a = $('audio').get(0);
	a.play();
	$('.music').click(function() {
		//					var a=document.getElementById('music');
		console.log('you touch the button');
		if(a.paused) {
			a.play();
			$(this).removeClass('paused');
		} else {
			a.pause();
			$(this).addClass('paused');
		}
	});
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

	function swiperlhz() {
		var globe = false;
		var f1=0;
		var f2=0;
		var f3=0;
		var f4=0;
		var mySwiper = new Swiper('.swiper-container-v', {
			direction: 'vertical', //滑动方式：竖向
			//		    loop: true,//循环：true
			mousewheelControl: true, //鼠标控制：true
			// 如果需要分页器
			pagination: '.swiper-pagination-v',
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback(swiper);
				//				firstcatoon();
			},
			onSlideChangeEnd: function(swiper){
				Swipercallback(swiper);
			},
			
		})
		var swiperH = new Swiper('.swiper-container-h', {
			pagination: '.swiper-pagination-h',
			paginationClickable: true,
			slidesPerView: "auto", //slide痕迹
			centeredSlides: true,
//			initialSlide :0,
			nested:true,
			//	        spaceBetween: 30,
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
				Swipercallback2(swiper);
			},
			onSlideChangeEnd: function(swiper){ 
				Swipercallback2(swiper);
			},
			onTouchMove:function(swiper){
				Swipercallback2(swiper);
			}
		});
		/*设置按钮交互*/
		$('.bm_mkt').click(function() {
			mySwiper.slideTo(2); //切换到第3个slide，速度为1秒
		})
		$('.bm_hr').click(function() {
			mySwiper.slideTo(3); //切换到第3个slide，速度为1秒
		})
		$('.bm_it').click(function() {
			mySwiper.slideTo(4); //切换到第3个slide，速度为1秒
		})
		$('.bm_xz').click(function() {
			mySwiper.slideTo(5); //切换到第3个slide，速度为1秒
		})
		$('#p1btn').click(function() {
			mySwiper.slideTo(1); //切换到第3个slide，速度为1秒
		})
		
		/* SlideChangeEndCallback */
		function Swipercallback(swiper) {
			var act = swiper.activeIndex;
			swiperAnimate(swiper);
			console.log('当前页面：'+act);
			switch(act) {
				case 0:
					//设置显示
					$('.up-arrow').css('display', 'none');
					$('.bm_title').css('display', 'block');
					$('.bm_xiaoren').css('display', 'block');
					$('.bm_p1btn').css('display', 'block');
					$('.p1_star').css('display', 'block');
					$('.p1_circle').css('display', 'block');
					$('.p1_douya').css('display', 'block');
					$('.p1_lightning1').css('display', 'none');
					$('.p1_lightning2').css('display', 'none');
					$('.p1_lightning3').css('display', 'none');

					$('.bm_title').animateCss('bounceInDown', '0.8s', '0s', '1', true);
					$('.bm_xiaoren').animateCss('zoomIn', '0.2s', '1s', '1', true);
					$('.bm_p1btn').animateCss('bounceIn', '0.5s', '1.5s', '1', true);

					$('.p1_star').animateCss('fadeIn', '2s', '1s', '1', true);
					$('.p1_star').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$('.p1_star').animateCss('star-diy', '2s', '0s', 'infinite', true);
					});
					$('.p1_circle').animateCss('fadeIn', '2s', '1s', '1', true);
					$('.p1_circle').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$('.p1_circle').animateCss('rubberBand', '2s', '0s', 'infinite', true);
					});
					$('.p1_douya').animateCss('fadeIn', '2s', '1s', '1', true);
					$('.p1_douya').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$('.p1_douya').animateCss('tada', '2s', '0s', 'infinite', true);
					});
					//第1个light
					$('.bm_xiaoren').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$('.p1_lightning1').css('display', 'block');
						$('.p1_lightning2').css('display', 'block');
						$('.p1_lightning3').css('display', 'block');
						$('.p1_lightning1').animateCss('lightmovediy1', '0.5s', '0.5s', '1', true);
						$('.p1_lightning1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							$('.p1_lightning1').css({
								'left': '5%',
								'top': '30%'
							});
							$('.p1_lightning1').animateCss('lightining-diy', '2.2s', '0.5s', 'infinite', true);
						});
						$('.p1_lightning2').animateCss('lightmovediy2', '0.5s', '0.5s', '1', true);
						$('.p1_lightning2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							$('.p1_lightning2').css({
								'left': '10.4%',
								'top': '15.7%'
							});
							$('.p1_lightning2').animateCss('lightining-diy2', '2.2s', '0.8s', 'infinite', true);
						});
						$('.p1_lightning3').animateCss('lightmovediy3', '0.5s', '0.5s', '1', true);
						$('.p1_lightning3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							$('.p1_lightning3').css({
								'left': '38%',
								'top': '13.93%'
							});
							$('.p1_lightning3').animateCss('lightining-diy3', '2.2s', '0.2s', 'infinite', true);
							$('.bm_p1btn').animateCss('pulse', '1s', '1s', 'infinite', true);
						});
					});
					break;
				case 1:
					$('.up-arrow').css('display', 'block');
					$('.bm_mkt').css('display', 'block');
					$('.bm_hr').css('display', 'block');
					$('.bm_it').css('display', 'block');
					$('.bm_xz').css('display', 'block');
					$('.bm_mkt').animateCss('fadeInLeft', '0.5s', '0s', '1', true);
					$('.mkt_pic').animateCss('zoomInDown', '1.5s', '0s', '1', true);
					$('.mkt_word').animateCss('zoomInDown', '1.5s', '0s', '1', true);
					$('.bm_hr').animateCss('fadeInLeft', '0.5s', '0.75s', '1', true);
					$('.hr_pic').animateCss('zoomInDown', '1.5s', '0.75s', '1', true);
					$('.hr_word').animateCss('zoomInDown', '1.5s', '0.75s', '1', true);
					$('.bm_it').animateCss('fadeInLeft', '0.5s', '1.5s', '1', true);
					$('.it_pic').animateCss('zoomInDown', '1.5s', '1.5s', '1', true);
					$('.it_word').animateCss('zoomInDown', '1.5s', '1.5s', '1', true);
					$('.bm_xz').animateCss('fadeInLeft', '0.5s', '2.25s', '1', true);
					$('.xz_pic').animateCss('zoomInDown', '1.5s', '2.25s', '1', true);
					$('.xz_word').animateCss('zoomInDown', '1.5s', '2.25s', '1', true);
					break;
				case 2:
					f1=f1+1;
					if (f1>=2) {
						$('.tips_f1').css('display', 'none');
					}
					$('.slide3 .title').css('display', 'block');
					$('.slide3 .title').animateCss('zoomIn', '0.5s', '0s', '1', true);
					break;
				case 3:
					f2=f2+1;
					if (f1>=2) {
						$('.tips_f1').css('display', 'none');
					}
					$('.slide4 .title').css('display', 'block');
					$('.slide4 .title').animateCss('zoomIn', '0.5s', '0s', '1', true);
					break;
				case 4:
					f3=f3+1;
					if (f1>=2) {
						$('.tips_f1').css('display', 'none');
					}
					$('.slide5 .title').css('display', 'block');
					$('.slide5 .title').animateCss('zoomIn', '0.5s', '0s', '1', true);
					break;
				case 5:
					f4=f4+1;
					if (f1>=2) {
						$('.tips_f1').css('display', 'none');
					}
					$('.slide6 .title').css('display', 'block');
					$('.slide6 .title').animateCss('zoomIn', '0.5s', '0s', '1', true);
					break;
				case 6:
					$('.bmh5logo').css('display', 'block');
					$('.bmh5logo').animateCss('tada', '1.8s', '1.9s', 'infinite', true);
					$('.up-arrow').css('display', 'none');
				default:
					break;
			}
			if(act != 0) {
				$('.bm_title').css('display', 'none');
				$('.bm_xiaoren').css('display', 'none');
				$('.bm_p1btn').css('display', 'none');
				$('.p1_star').css('display', 'none');
				$('.p1_circle').css('display', 'none');
				$('.p1_douya').css('display', 'none');
				$('.p1_lightning1').css({
					'left': '30%',
					'top': '40%'
				});
				$('.p1_lightning2').css({
					'left': '30%',
					'top': '40%'
				});
				$('.p1_lightning3').css({
					'left': '30%',
					'top': '40%'
				});
				$('.p1_lightning1').css('display', 'none');
				$('.p1_lightning2').css('display', 'none');
				$('.p1_lightning3').css('display', 'none');
				$('.p1_star').removeClass('star-diy');
				$('.p1_circle').removeClass('rubberBand');
				$('.p1_douya').removeClass('tada');
				$('.p1_lightning1').removeClass('lightining-diy');
				$('.p1_lightning2').removeClass('lightining-diy2');
				$('.p1_lightning2').removeClass('lightining-diy3');
			}
			if(act != 1) {
				$('.bm_mkt').css('display', 'none');
				$('.bm_hr').css('display', 'none');
				$('.bm_it').css('display', 'none');
				$('.bm_xz').css('display', 'none');
			}
			if(act != 2) {
				$('.slide3 .title').css('display', 'none');
			}
			if(act != 3) {
				$('.slide4 .title').css('display', 'none');
			}
			if(act != 4) {
				$('.slide5 .title').css('display', 'none');
			}
			if(act != 5) {
				$('.slide6 .title').css('display', 'none');
			}
			if(act != 6) {
				$('.bmh5logo').css('display', 'none');
				if (act != 0) {
					if($('.up-arrow').css('display') == 'none') {
					$('.up-arrow').css('display', 'block');
					}
				}
			}
		}
		function Swipercallback2(swiper){
			var act = swiper.activeIndex;
			swiperAnimate(swiper);
			console.log('第二个swiper'+act);
		}
	}

})

function init() {
	var a = [
		['1.进行平面文字、广告文案等文字的研究和创作； <br />2.新闻稿件、公关稿件和软文撰写。'],
		['1.根据产品的定位和市场需求，制定相应的营销方案；<br />2.负责营销的推广与渠道的探索，分析目标用户，制定推广方案；<br />3.整合数字媒体资源，执行媒体投放，进行舆情监控及传播效果分析。'],
		['1.消费者教育及沟通传播 ：研究消费者购物行为及路径，策划主题活动，服务及教育消费者、拓展新用户；<br />2.管理店铺运营：提报活动、跟进活动执行，并反馈活动执行结果；<br />3.负责店铺推广；<br />4.改善自营电商物流与包装，优化订单处理系统；<br />5.组织建设与团队管理。'],
		['1.与所负责业务部门定期进行人事沟通，了解用人规划，人事情况进行分析，提出优化改善的想法，提前进行人员储备；<br />2.人员转正、异动等人事事件跟进，运用科学的评估方法对人员进行评估，输出评估结果。'],
		['1.开发符合战略需要的KPI指标，设计绩效管理工具表并指导使用；<br />2.制定二线部门的绩效考核制度，查找并研究绩效相关的专业课题；<br />3.薪酬数据调研、制度测算及实施过程的数据统计分析。'],
		['1.负责每月员工薪酬核算工作，确保工资准确准时发放，并解答相关问题；<br />2.负责每月绩效考核结果数据统计工作，协调复议事宜并解答相关问题；<br />3.负责社保、公积金管理，包括每月增减员操作等。'],
		['1.协助搭建并监督招聘流程及招聘体系运行状况等；<br />2.组织实施面试，编写面试评估报告，跟进部门复试及录用审批; <br />3.汇总招聘数据，进行效果分析，完成招聘分析报告； <br />4.负责对各分厂基层招聘工作和供应商管理进行监督、予以技术支持。 <br />5.协助上级对供应链招聘需求拟定项目性招聘策略，并对项目工作统筹及跟进。'],
		['1.根据软件系统要求，进行电商系统、CRM系统系统设计；<br />2.根据设计文档或需求说明完成代码编写，程序设计。'],
		['1.负责公司所有APP产品移动端应用的规划和开发；<br />2.负责App产品的研发，需求，开发，测试，升级，至少满足Android/IOS两种系统平台之一使用；<br />3.负责 Android 项目的架构设计、方案的制定；<br />4.跟进 Android 的新技术发展，编写设计开发及实现文档；<br />5.根据产品功能需求设计并完成软件实现；负责最终的审核调试并出具报告；<br />6.负责优化移动产品的质量、性能、用户体验；<br />7.负责开发无线设备上的创新型应用并攻克技术实现瓶颈；<br />8.参与软件需求分析，进行模块概要设计，模块详细设计，代码编写，单元测试等工作，对软件质量负责；9.负责团队的建设与协调，不断提高用户体验。'],
		['1.设计、开发、维护和管理RF系统功能需求、性能要求的软件模块； <br />2.根据公司技术文档规范要求编写相应的技术文档； <br />3.配合完成产品试制过程中生产和测试的相关工作。 '],
		['1.能够针对用户需求，并结合自己的项目经验为客户进行系统设计，包括系统流程设计、运行环境选型、系统交互设计、数据计算逻辑等；<br />2.制定应用系统规划和整体解决方案；控制程序开发的工作进度和质量；<br />3.开展与最终用户的进行架构层面的沟通和交流.'],
		['1.基于hadoop、spark等构建数据分析平台，进行设计、开发分布式计算业务；<br />2.辅助管理Hadoop集群运行，稳定提供平台服务；<br />3.搭建数据开发、部署的流程，保证日常数据稳定、安全、准确。'],
		['1.参与数据产品前后台模块的设计及开发;<br />2.遵循开发规范，在项目范围内贯彻规范的执行； <br />3.在开发后期，进行代码业务及规范性检查； '],
		['1.接收业务部门行政需求，协调调动行政部各职能模块资源满足需求业务部门需求；<br />2.主动挖掘客户需求，学习借鉴外部公司行政优秀经验；<br />3.发起并调动各模块开展行政服务优化项目<br />4.统筹协调公司级项目活动行政工作；'],
		['1.行政功能需求研究（比如洗手间、会议室、停车场、车棚、门卫岗、空调出风口等）并提出专题设计方案;<br />2.行政规划项目管理（立项，组建项目组并推动项目开展）;<br />3.参与设计图评审（外立面设计图、功能布局平面图、装修设计图等）;<br />4.参与施工图评审（土建施工图和装修施工图）;<br />5.检查建设施工现场行政部分的施工质量情况，及时提出问题和推动施工变更。'],
		['1.分析各部门采购需求的合理性；<br />2.寻源开发不同类型的供应商；<br />3.指导采购专员谈判及签订采购合同工作；<br />4.制定和完善工作流程；'],
		['1.负责统筹全国酒店、交通工具寻源，寻找合适酒店给出差员工住宿；<br />2.统筹合适酒店洽谈、合作跟进；<br />3.能适应出差。'],
	];
	var b = [
		['1.有扎实的文字功底，具有良好的语言和文字表达能力；<br />2.有创新意识，对生活环境有敏锐的感知能力。<br /><br />★投递通道：lixiaojuan@bluemoon.com.cn'],
		['1.具有敏锐的洞察能力和新事物接收与传播能力；<br />2.对互联网营销有一定的理解；<br />3.拥有互联网公关营销工作经验，或成功网络、微信、微博推广经验，口碑营销、主题营销、视频营销活动策划成功案例者优先考虑。<br /><br />★投递通道：lixiaojuan@bluemoon.com.cn'],
		['1.踏实肯干，有责任感<br />2.逻辑性强，善于思考分析;<br />3.细致、严谨，能沉下心来思考研究<br />4.沟通表达能力好，理解力好;<br />5.学习意愿较强，有上进心<br />6.承压能力较好<br />7.信息收集与分析能力较好<br />8.有2-3年的店铺运营经验<br />9.有一定的人员管理、团队管理经验<br/><br/>★投递通道：guxiaoyi@bluemoon.com.cn'],
		['1.全日制本科以上学历，人力资源相关专业优先，2年以上人事相关的工作；<br />2.掌握基础的人员评估方法，人际敏感度高，有一定的人员识别能力；；<br />3.承压力较好，应变性及灵活性较好，客户导向意识强。。<br/><br/>★投递通道：chijieyun@bluemoon.com.cn'],
		['1.全日制本科以上学历，有一定的excel和PPT的技术，学过平衡计分卡或者战略地图为佳；<br />2.承压能力好，理解能力较好，逻辑思维好，客户导向意识强，有优化意识。<br/><br/>★投递通道：chijieyun@bluemoon.com.cn'],
		['1.全日制本科以上学历，1年以上薪酬、绩效相关经验（手工核算经验），熟练EXCEL函数；<br />2.善于对数据进行分析，工作认真细致，保密意识强，沟通表达能力好，逻辑性及抗压能力强。<br/><br/>★投递通道：chijieyun@bluemoon.com.cn'],
		['1.全日制本科及以上学历，专业不限； <br />2.3年及以上招聘工作经验； <br />3.人际敏感度高，有一定的人员识别能力； <br />4.愿意想办法解决问题，有良好的服务意识与团队合作能力； <br />5.善于沟通表达，逻辑条理清晰，有一定的灵活性； <br />6.责任心强，主动意识好。<br/><br/>★投递通道：guxiaoyi@bluemoon.com.cn'],
		['1.本科及以上学历，计算机及相关专业，有过一年以上java开发经验；<br />2.熟悉分布式集群服务，有dubbo、zookeeper、redis使用经验优先<br />3.有过电商平台、微信平台或 CRM系统相关项目开发经验优先。<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.有3年及以上APP开发经验；<br />2.有完整的APP产品开发经验, 主导或参与过正式发布上线APP的开发，具备IAndriod APP开发能力；<br />3.精通Android开发架构、主流的框架、系统API调用；<br />4.具备良好的文档编写习惯和撰写能力，有较强的沟通能力和团队协作精神<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.熟练运用C/C++/C#，熟悉Windows平台软件的开发或熟悉面向对象编程；<br />2.具有丰富的Win32 SDK / MFC编程经验；熟悉USB、RS232/RS485、了解RFID者优先； <br />3.了解USB摄像机、IP摄像机开发接入者优先。<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.本科及以上学历，数学、统计学或计算机相关专业，3年以上系统设计工作经验；<br />2.熟悉数据仓库及大数据类项目的开发流程及系统架构， 对系统中各部分的工具及技术要有一定的了解；<br />3.有Hadoop、ETL或SQL开发经验。<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.计算机相关专业本科及以上学历，2年以上编程经验，熟悉hadoop原理、熟悉hadoop集群的搭建、管理及优化；<br />2.熟悉HDFS/HBase/Hive/MapReduce，有丰富的分布式编程及海量数据处理经验；<br />3.熟悉Core Java, 熟悉Java IO, NIO, 多线程编程. 熟悉JVM运行机制和内存管理, 网络协议。<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.本科或以上学历，2年或以上工作经验；<br />2.对Java ee体系有比较广泛的接触和了解，熟悉Oracle、MySQL、PostgreSQL等主流数据库及SQL编程；<br />3.熟悉HTML，JavaScript，AJAX等前端技术，有数据可视化开发经验者优先。<br/><br/>★投递通道：jiangzhanneng@bluemoon.com.cn'],
		['1.本科学历，专业不限；<br />2.具有大中型企业5年以上行政全模块工作经验；<br />3.具备一定团队建设经验，有人员相关管理经验更佳；<br />4.有较强的承压能力和关注细节的工作习惯。<br/><br/>★投递通道：liupeng@bluemoon.com.cn'],
		['1.本科学历，专业不限；<br />2.具有大中型企业3年以上办公规划工作经验；<br />3.有较强的承压能力和关注细节的工作习惯。<br/><br/>★投递通道：liupeng@bluemoon.com.cn'],
		['1.本科学历，专业不限；<br />2.具有大中型企业3年以上采购工作经验，对家具建材类有一定了解；<br />3.具备一定团队建设经验，有人员相关管理经验更佳；<br />4.有较强的承压能力和关注细节的工作习惯。<br/><br/>★投递通道：liupeng@bluemoon.com.cn'],
		['1.本科学历，专业不限；<br />2.具有大中型企业3年以上酒店寻源经验，对酒店行业和出差交通工具有一定了解和认识；<br />3.具备一定团队建设经验，有人员相关管理经验更佳；<br />4.有较强的承压能力和关注细节的工作习惯。<br/><br/>★投递通道：liupeng@bluemoon.com.cn'],
	];

	function buttonS(e) {
		console.log(e);
		if(e == 99) {
			$('#des_bg').addClass('fadeOutOut');
			setTimeout(function() {
				$('#des_bg').css('display', 'none');
				$('#des_bg').removeClass();
				$('#des_title').removeClass();
				$('#des_demand').removeClass();
			}, 300)
			$('#close').css('display', 'none');
			$('#mask').css('display', 'none');
			$('.up-arrow').css('display', 'block');
			$('.music').css('display', 'block');
		} else {
			switch(e) {
				case 0:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('mkt_des');
					$('#des_title').addClass('mkt_title');
					$('#des_demand').addClass('mkt_demand');
					break;
				case 1:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('mkt_des');
					$('#des_title').addClass('mkt_title');
					$('#des_demand').addClass('mkt_demand');
					break;
				case 2:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('mkt_des');
					$('#des_title').addClass('mkt_title');
					$('#des_demand').addClass('mkt_demand');
					break;
				case 3:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('hr_des');
					$('#des_title').addClass('hr_title');
					$('#des_demand').addClass('hr_demand');
					break;
				case 4:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('hr_des');
					$('#des_title').addClass('hr_title');
					$('#des_demand').addClass('hr_demand');
					break;
				case 5:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('hr_des');
					$('#des_title').addClass('hr_title');
					$('#des_demand').addClass('hr_demand');
					break;
				case 6:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('hr_des');
					$('#des_title').addClass('hr_title');
					$('#des_demand').addClass('hr_demand');
					break;
				case 7:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 8:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 9:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 10:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 11:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 12:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('it_des');
					$('#des_title').addClass('it_title');
					$('#des_demand').addClass('it_demand');
					break;
				case 13:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('xz_des');
					$('#des_title').addClass('xz_title');
					$('#des_demand').addClass('xz_demand');
					break;
				case 14:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('xz_des');
					$('#des_title').addClass('xz_title');
					$('#des_demand').addClass('xz_demand');
					break;
				case 15:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('xz_des');
					$('#des_title').addClass('xz_title');
					$('#des_demand').addClass('xz_demand');
					break;
				case 16:
					showup(e);
					/*add class.start*/
					$('#des_bg').addClass('xz_des');
					$('#des_title').addClass('xz_title');
					$('#des_demand').addClass('xz_demand');
					break;
				default:
					break;
			}
			/*add class.end*/
			$('#close').css('display', 'block');
			$('#des_bg').css('display', 'block');
			$('#mask').css('display', 'block');
			$('#des_bg').addClass('fadeInIn');
			$('.up-arrow').css('display', 'none');
			$('.music').css('display', 'none');
			setTimeout(function() {
				$('#des_bg').removeClass('fadeInIn');
			}, 300)
		}

	}

	function showup(e) {
		var duty = $("#des_duty");
		var job = $("#des_jobrequire");
		duty.html(a[e]).show();
		job.html(b[e]).show();
	}
	$('.button').on('click', function() {
		buttonS(parseInt($(this).attr('num')));
	})
}
init();