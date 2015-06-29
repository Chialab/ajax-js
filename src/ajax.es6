var defaultOptions = {
  'async': true,
  'timeout': 1000 * 60,
  'responseType': 'application/json',
  'headers': {
    'Content-type': 'application/x-www-form-urlencoded'
  }
}

/**
 * A XMLHttpRequest wrapper.
 * @class
 */
export class Ajax {
  /**
   * Exec a XMLHttpRequest.
   *
   * ## Options definition
   * - `String`   *url*           The requested url.
   * - `Object`   *headers*       A set of headers to set (key => value).
   * - `String`   *responseType*  The response type mime.
   * - `Number`   *timeout*       A value for request timeout (0 => no timeout).
   * - `Function` *notify*        A callback function for progress event.
   * - `Boolean`  *async*         Should exec the request asynchronously.
   * @static
   * @param {Object|String} options A set of options (or the url) for the XMLHttpRequest
   * @return Promise
   */
  static request(options = {}) {
    return new Promise(function(resolve, reject) {
      var XHR = window.XMLHttpRequest || ActiveXObject;
      var request = new XHR('MSXML2.XMLHTTP.3.0');
      var resolved = false;
      if (typeof options == 'string') {
        options = { 'url': options };
      }
      for (var k in Ajax.defaultOptions) {
        if (options[k] !== undefined) {
          options[k] = Ajax.defaultOptions[k];
        }
      }
      request.open(options.method || 'GET', options.url, !!options.async);
      if (options.header) {
        for (var k in options.header) {
          request.setRequestHeader(k, options.header[k]);
        }
      }

      if (options.responseType) {
        request.responseType = options.responseType;
      }

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          var parse = function (req) {
            var result;
            if (typeof req.response == 'string' && typeof req.responseText == 'string') {
              try {
                result = JSON.parse(req.responseText);
              } catch (e) {
                result = req.responseText;
              }
            } else {
              result = req.response;
            }
            return result;
          }
          resolved = true;
          if (request.status === 200 || request.status === 304) {
            resolve(parse(request));
          } else {
            reject(request);
          }
        }
      }

      request.onerror = function(er) {
        resolved = true;
        reject(request);
      }

      request.onabort = function(er) {
        resolved = true;
        reject(request);
      }

      request.addEventListener('progress', function(e) {
          var done = e.loaded || e.position, 
              total = e.total || e.totalSize;

          if (typeof options.notify == 'function') {
            options.notify(done, total);
          }
      }, false);
      if (request.upload) {
          request.upload.onprogress = function(e) {
              var done = e.loaded || e.position,
                  total = e.total || e.totalSize;
              if (typeof options.notify == 'function') {
                options.notify(done, total);
              }
          };
      }

      if (options.timeout) {
        setTimeout(function() {
          if (!resolved) {
            request.timeout = true;
            request.status = 0;
            reject(request);
          }
        }, options.timeout);
      }

      try {
        if (options.data !== undefined) {
          request.send(options.data);
        } else {
          request.send();
        }
      } catch(ex) {
        resolved = true;
        reject(request);
      }
    });
  }
  /**
   * Exec a XMLHttpRequest with method HEAD.
   * @static
   * @param {String} url the url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return Promise
   */
  static head(url, options = {}) {
    options['url'] = url;
    options['method'] = 'HEAD';
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method GET.
   * @static
   * @param {String} url the url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return Promise
   */
  static get(url, options = {}) {
    options['url'] = url;
    options['method'] = 'GET';
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method POST.
   * @static
   * @param {String} url the url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @param {Object} data The data to send in the POST request
   * @return Promise
   */
  static post(url, options = {}, data) {
    options['url'] = url;
    options['method'] = 'POST';
    if (data !== undefined) {
      options['data'] = data;
    }
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method PUT.
   * @static
   * @param {String} url the url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @param {Object} data The data to send in the PUT request
   * @return Promise
   */
  static put(url, options = {}, data) {
    options['url'] = url;
    options['method'] = 'PUT';
    if (data !== undefined) {
      options['data'] = data;
    }
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method DELETE.
   * @static
   * @param {String} url the url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return Promise
   */
  static delete(url, options = {}) {
    options['url'] = url;
    options['method'] = 'DELETE';
    return Ajax.request(options);
  }

}

Ajax.defaultOptions = defaultOptions;