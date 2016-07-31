var Main = function() {
		this.curIndex = 0, this.totalScore = 0, this.allTopic = [1, 2, 3, 4, 5, 6, 7, 8], this.allTopicNum = 5, this.totalObj = []
	};
Main.prototype = {
	init: function() {
		$("#J_SalIndex").addClass("web-box"), this.eventHandle()
	},
	eventHandle: function() {
		var t = this;
		$("#J_Btn1").on("tap", function() {
			$("#J_SalIndex").hide(), t.goNextTopic()
		}), $(".btns .btn").on("tap", function() {
			t.doSelect(this)
		}), $(".J_NextBtn").on("tap", function() {
			t.goNext(this)
		}), $("#J_OverBtn").on("tap", function() {
			t.goNextTopic()
		}), $("#J_ShareTipBtn").on("tap", function() {
			$("#J_ShareTip").show()
		}), $("#J_ShareTip").on("tap", function() {
			$(this).hide()
		})
	},
	setTopic: function() {
		var t = this.allTopic.length,
			i = Math.floor(Math.random() * t) + 1;
		i = i === t ? t - 1 : i;
		var o = this.allTopic[i];
		return this.allTopic.splice(i, 1), o
	},
	doSelect: function(t) {
		$(t).parent(".btns").find(".btn").removeClass("active"), $(t).addClass("active")
	},
	goNext: function(t) {
		var i = $(t).prev(".btns").find(".active");
		if (i.length <= 0) return alert_v("请先选择答案"), !1;
		var o = parseInt(i.attr("data-score")),
			e = i.index(),
			n = {
				topic: this.curTopic,
				option: e,
				score: o
			};
		this.totalObj.push(n), this.totalScore += o, $("#J_OverLay").css("display", "-webkit-box"), $(".over-con").hide(), $("#J_SubOverItem" + this.curTopic).show()
	},
	goNextTopic: function() {
		if (this.curTopic = this.setTopic(), 3 === this.curTopic) {
			var t = 0;
			setInterval(function() {
				$(".subject3 .sec-pic04").removeClass("a0 a1 a2").addClass("a" + t), t = 2 > t ? t + 1 : 0
			}, 100)
		}
		$("#J_OverLay,.sal-box").hide(), this.curIndex < this.allTopicNum ? (this.curIndex++, $("#J_SalBox" + this.curTopic).css("display", "-webkit-box")) : this.goOver()
	},
	goOver: function() {
		var t = this;
		$("#J_paperInspection").css("display", "-webkit-box"), setTimeout(function() {
			t.goResult()
		}, 2e3)
	},
	goResult: function() {
		$("#J_paperInspection").hide(), $("#J_Result").show();
		var t = this.totalScore;
		t >= 0 && 40 > t ? $("#J_Result_01").show() : t >= 40 && 60 > t ? $("#J_Result_02").show() : t >= 60 && 80 > t ? $("#J_Result_03").show() : t >= 80 && 90 > t ? $("#J_Result_05").show() : t >= 90 && 100 >= t && $("#J_Result_07").show();
		var i = JSON.stringify(this.totalObj);
		$.getJSON("http://h5.flyfinger.com/qualcomm/sign/submitUserInfo?userName=" + i + "&mark=nice")
	}
};
var main = (new Main).init();