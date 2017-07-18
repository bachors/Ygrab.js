/******************************************************
* #### jQuery-Ygrab.js v0.0.2 ####
* Coded by Ican Bachors 2016.
* http://ibacor.com/labs/jquery-ygrabjs/
* Updates will be posted to this site.
******************************************************/

var ygrab = function(h, callback) {
	
    var j = [];
	
    if (Object.prototype.toString.call(h) === '[object Array]') {
        $.each(h, function(i, a) {			
			yql(a.url, function(e) {			
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
		yql(a.url, function(k) {
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
	
    function yql(b, html) {
        var d = '';
        $.ajax({
            url: 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('SELECT content FROM data.headers WHERE url="' + b + '" and ua="Googlebot/2.1 (http://www.googlebot.com/bot.html)"') + '&format=xml&env=store://datatables.org/alltableswithkeys',
            async: true
        }).done(function(a) {
            var e = $(a).find("content").text();
            d = removeElements(e);
			html(d);
        });
    }

    function removeElements(a) {
        var b = $("<div>" + a + "</div>");
        b.find('style').remove();
        b.find("script").remove();
        b.find("iframe").remove();
        b.find("embed").remove();
        return b.html()
    }
	
}
