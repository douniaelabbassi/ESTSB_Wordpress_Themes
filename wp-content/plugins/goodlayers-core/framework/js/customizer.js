!function(e){"use strict";function t(e,t){if("color"==t)return-1==e.indexOf("#")?"#"+e:e;if("rgba"==t){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return parseInt(r[1],16)+", "+parseInt(r[2],16)+", "+parseInt(r[3],16)}return"text"==t?e.trim():"pixel"==t?parseFloat(e)+"px":"file"==t?e:"font"==t?e.trim():"percent"==t?parseInt(e)+"%":"opacity"==t?parseInt(e)/100:e}var r=e('<div class="gdlr-core-customizer-script" ></div>').appendTo(e("body"));e.each(gdlr_core_customizer.post_val,function(e,o){wp.customize(o.control,function(e){e.bind(function(e){var l=r.find("style#gdlr-core-customizer-"+o.slug),n=o.selector;"rgba"==o.data_type?(n=n.replace(/#gdlra#/g,t(e,o.data_type)),n=n.replace(/#gdlr#/g,t(e,"color"))):"font"==o.data_type?("undefined"!=typeof gdlr_core_customizer.google_font_link[e]&&(r.find("link#gdlr-core-customizer-font-"+o.slug).remove(),r.append('<link type="text/css" rel="stylesheet" id="gdlr-core-customizer-font-'+o.slug+'" href="'+gdlr_core_customizer.google_font_link[e]+'" >')),n=n.replace(/#gdlr#/g,t(e,o.data_type))):n=n.replace(/#gdlr#/g,t(e,o.data_type)),l.length>0?l.html(n):r.append('<style type="text/css" id="gdlr-core-customizer-'+o.slug+'" >'+n+"</style>")})})})}(jQuery);