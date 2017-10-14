/****************************************
* #### jQuery-Ygrab.js v1.0 ####
* Coded by Ican Bachors 2016.
* https://github.com/bachors/Ygrab.js
* Updates will be posted to this site.
*****************************************/

var ygrab = function(h, callback) {
	
    var j = [];
	
    if (Object.prototype.toString.call(h) === '[object Array]') {
        $.each(h, function(i, a) {			
			GS(a.url, function(e) {			
				if (a.loop) {
					$.each($(e).find(a.selector), function() {
						var c = $(this);
						var d = {};
						$.each(a.result, function(x, v) {
							var a = c.find(v.find);
							var b = '';
							if (v.grab.by == 'text') {
								b = a.text()
							} else if (v.grab.by == 'html') {
								b = a.html()
							} else if (v.grab.by == 'attr') {
								b = a.attr(v.grab.value)
							} else if (v.grab.by == 'data') {
								b = a.data(v.grab.value)
							}
							d[v.name] = b
						});
						j.push(d)
					})
				} else {
					var f = $(e).find(a.selector + ':eq(0)');
					var g = {};
					$.each(a.result, function(x, v) {
						var a = f.find(v.find);
						var b = '';
						if (v.grab.by == 'text') {
							b = a.text()
						} else if (v.grab.by == 'html') {
							b = a.html()
						} else if (v.grab.by == 'attr') {
							b = a.attr(v.grab.value)
						} else if (v.grab.by == 'data') {
							b = a.data(v.grab.value)
						}
						g[v.name] = b
					});
					j.push(g)
				}
				callback(j);
			});
        });
    } else {
        var a = h;		
		GS(a.url, function(k) {
			if (a.loop) {
				$.each($(k).find(a.selector), function() {
					var c = $(this);
					var d = {};
					$.each(a.result, function(x, v) {
						var a = c.find(v.find);
						var b = '';
						if (v.grab.by == 'text') {
							b = a.text()
						} else if (v.grab.by == 'html') {
							b = a.html()
						} else if (v.grab.by == 'attr') {
							b = a.attr(v.grab.value)
						} else if (v.grab.by == 'data') {
							b = a.data(v.grab.value)
						}
						d[v.name] = b
					});
					j.push(d)
				})
			} else {
				var l = $(k).find(a.selector + ':eq(0)');
				var m = {};
				$.each(a.result, function(x, v) {
					var a = l.find(v.find);
					var b = '';
					if (v.grab.by == 'text') {
						b = a.text()
					} else if (v.grab.by == 'html') {
						b = a.html()
					} else if (v.grab.by == 'attr') {
						b = a.attr(v.grab.value)
					} else if (v.grab.by == 'data') {
						b = a.data(v.grab.value)
					}
					m[v.name] = b
				});
				j.push(m)
			}
			callback(j);
        });
    }
	
    function GS(b, html) {
        $.getJSON("https://script.google.com/macros/s/AKfycbyMgb620k8sJr3FrESNboqRaVeMTVR-ZikslQeg2xLUoRnOeLAL/exec?url=" + b + "&callback=?",function(json){
			html(json.data);
		});
    }
	
}
