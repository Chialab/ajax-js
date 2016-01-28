!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a.Ajax={})}(this,function(a){"use strict";var b=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},c=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),d=function(){function a(){b(this,a)}return c(a,null,[{key:"request",value:function(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return new Promise(function(c,d){var e=window.XMLHttpRequest||ActiveXObject,f=new e("MSXML2.XMLHTTP.3.0"),g=!1;"string"==typeof b&&(b={url:b});for(var h in a.defaultOptions)"undefined"==typeof b[h]&&(b[h]=a.defaultOptions[h]);if(f.open(b.method||"GET",b.url,!!b.async),b.header)for(var h in b.header)f.setRequestHeader(h,b.header[h]);b.responseType&&(f.responseType=b.responseType),f.onreadystatechange=function(){if(4===f.readyState){var a=function(a){var b=void 0;if("string"==typeof a.response&&"string"==typeof a.responseText)try{b=JSON.parse(a.responseText)}catch(c){b=a.responseText}else b=a.response;return b};g=!0,200===f.status||304===f.status?c(a(f)):d(f)}},f.onerror=function(a){g=!0,d(f)},f.onabort=function(a){g=!0,d(f)},f.addEventListener("progress",function(a){var c=a.loaded||a.position,d=a.total||a.totalSize;"function"==typeof b.notify&&b.notify(c,d)},!1),f.upload&&(f.upload.onprogress=function(a){var c=a.loaded||a.position,d=a.total||a.totalSize;"function"==typeof b.notify&&b.notify(c,d)}),b.timeout&&setTimeout(function(){g||(f.timeout=!0,f.status=0,d(f))},b.timeout);try{void 0!==b.data?f.send(b.data):f.send()}catch(i){g=!0,d(f)}})}},{key:"head",value:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.url=b,c.method="HEAD",a.request(c)}},{key:"get",value:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.url=b,c.method="GET",a.request(c)}},{key:"post",value:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],d=arguments[2];return c.url=b,c.method="POST",void 0!==d&&(c.data=d),a.request(c)}},{key:"put",value:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],d=arguments[2];return c.url=b,c.method="PUT",void 0!==d&&(c.data=d),a.request(c)}},{key:"delete",value:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.url=b,c.method="DELETE",a.request(c)}},{key:"defaultOptions",get:function(){return{async:!0,timeout:6e4,responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest","Content-type":"application/x-www-form-urlencoded"}}}}]),a}();a.Ajax=d});
//# sourceMappingURL=ajax.js.map