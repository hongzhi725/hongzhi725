var Dialog = function() {
		this.win = $(window), this.doc = $(document.body), this.winH = this.win.height(), this.docH = this.doc.height(), this.overlay = $('<div style="width:100%;height:' + this.docH + 'px;background:#000;opacity:0.75;position:absolute;top:0;left:0;z-index:999"></div>'), this.content = $('<div style="position:absolute;z-index:1000;"></div>'), this.showflg = !1;
		var t = this;
		this.win.resize(function() {
			t.overlay.css({
				height: t.doc.height()
			})
		})
	};
Dialog.prototype = {
	addOverlay: function() {
		var t = this;
		return this.showFlg ? this.overlay.show() : t.overlay.appendTo(t.doc), t.overlay
	},
	removeOverlay: function() {
		var t = this;
		return t.overlay.remove(), t
	},
	setBody: function(t) {
		var i = this;
		return i.content.append(t), i
	},
	show: function() {
		var t = this;
		this.showFlg ? this.content.show() : this.content.appendTo(t.doc);
		t.content.children().height(), t.content.children().width(), t.win.scrollTop();
		return this.content.css({
			width: "100%",
			height: "100%",
			display: "box",
			display: "-ms-box",
			display: "-webkit-box",
			"box-orient": "vertical",
			"-webkit-box-orient": "vertical",
			"-ms-box-orient": "vertical",
			"box-pack": "center",
			"-webkit-box-pack": "center",
			"-ms-box-pack": "center",
			"box-align": "center",
			"-webkit-box-align": "center",
			"-ms-box-align": "center",
			top: 0,
			left: 0
		}), this.addOverlay(), this.showFlg = !1, this
	},
	remove: function() {
		return this.content.remove(), this.removeOverlay(), this
	},
	hide: function() {
		return this.content.hide(), this.overlay.hide(), this.showFlg = !0, this
	}
};
var alert_v = function(t, i, e) {
		var o = i || "确定";
		"function" == typeof i && (o = "确定", e = i);
		var n = $('<div style="width:200px;background:#ffd500;border:1px solid #e0aa05;border-radius:5px;padding:20px;"><div style="text-align:center;color:#333">' + t + '</div><div style="text-align:center;margin-top:15px;"><a href="javascript:;" style="background:#e0aa05;width:100px;height:25px;display:inline-block;line-height:25px;color:#333;border:1px solid #b48804;border-radius:5px" id="closeAlert">' + o + "</a></div></div>"),
			r = (new Dialog).setBody(n).show();
		$("#closeAlert").on("tap", function() {
			r.remove(), r = null, e && e()
		})
	},
	Loading = function(t) {
		this.html = $('<div style="width:200px;background:#e0aa05;border:1px solid #b48804;border-radius:5px;padding:20px;"><div style="text-align:center;color:#333">' + t + "</div></div>"), this.dig = null
	};
Loading.prototype.show = function() {
	return this.dig || (this.dig = (new Dialog).setBody(this.html).show()), this
}, Loading.prototype.remove = function() {
	this.dig.remove(), this.dig = null
}, Loading.prototype.dailyRemove = function() {
	var t = this;
	setTimeout(function() {
		t.remove()
	}, 1e3)
};