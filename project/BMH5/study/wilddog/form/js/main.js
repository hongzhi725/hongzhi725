var TR = $("<tr><td><input type='checkbox'></td><td class='td-uname'></td><td class='td-email'></td></tr>"),
	TREdit = $("<tr><td><input type='checkbox' disabled='disabled'></td><td><input></td><td><input></td></tr>"),
	ref = new Wilddog("https://bm-2016.wilddogio.com/KAH5");
$("#btn-user-add").click(function() {
		var t = $("#input-username").val(),
			e = $("#input-email").val();
		ref.push({
			phone: e,
			name: t
		})
	}),
	$("#btn-user-delete").click(function(t) {
		$("input:checked").each(function(t, e) {
			var d = $(e).attr("id");
			ref.child(d).remove()
		})
	}),
	$("table").click("td.td-uname", function(t) {
		var e = $(t.target).text(),
			d = $("<input >").val(e),
			n = $(t.target).parents("tr").eq(0).find("input[type=checkbox]").attr("id");
		d.focusout(function() {
				var t = d.val();
				ref.child(n).update({
					name: t
				})
			}),
			$(t.target).html(d)
	}),
	ref.on("child_added", function(t) {
		var e = t.val().phone,
			d = t.val().name,
			n = t.key(),
			a = TR.clone();
		a.find("td").eq(1).text(d), a.find("td").eq(2).text(e), a.find("input").eq(0).attr("id", n), $("#all-user-table").append(a)
	}),
	ref.on("child_changed", function(t) {
		var e = t.key(),
			d = t.val().phone,
			n = t.val().name,
			a = $("#" + e).parents("tr").eq(0);
		a.remove();
		var i = TR.clone();
		console.log(i), i.find("td").eq(1).text(n), i.find("td").eq(2).text(d), i.find("input").eq(0).attr("id", e), $("table").append(i)
	}),
	ref.on("child_removed", function(t) {
		var e = t.key();
		console.log("#" + e);
		var d = $("#" + e).parents("tr");
		d.remove()
	});