'use strict';

/**
 * A XMLHttpRequest wrapper.
 * @class
 */
export class Ajax {
  static get defaultOptions() {
    return {
      'async': true,
      'timeout': 1000 * 60,
      'responseType': 'application/json',
      'headers': {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  }
  /**
   * Exec a XMLHttpRequest.
   *
   * @static
   * @param {Object|String} options A set of options (or the url) for the XMLHttpRequest
   * @property {String}   options.url           The requested url
   * @property {Object}   options.headers       A set of headers to set (key => value)
   * @property {String}   options.responseType  The response type mime
   * @property {Number}   options.timeout       A value for request timeout (0 => no timeout)
   * @property {Function} options.notify        A callback function for progress event
   * @property {Boolean}  options.async         Should exec the request asynchronously
   * @return {Promise}
   */
  static request(options = {}) {
    return new Promise((resolve, reject) => {
      let XHR = window.XMLHttpRequest || ActiveXObject;
      let request = new XHR('MSXML2.XMLHTTP.3.0');
      let resolved = false;
      if (typeof options == 'string') {
        options = { 'url': options };
      }
      for (let k in Ajax.defaultOptions) {
        if (options[k] !== undefined) {
          options[k] = Ajax.defaultOptions[k];
        }
      }
      request.open(options.method || 'GET', options.url, !!options.async);
      if (options.header) {
        for (let k in options.header) {
          request.setRequestHeader(k, options.header[k]);
        }
      }

      if (options.responseType) {
        request.responseType = options.responseType;
      }

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          let parse = (req) => {
            let result;
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

      request.onerror = (er) => {
        resolved = true;
        reject(request);
      }

      request.onabort = (er) => {
        resolved = true;
        reject(request);
      }

      request.addEventListener('progress', (e) => {
          let done = e.loaded || e.position,
              total = e.total || e.totalSize;

          if (typeof options.notify == 'function') {
            options.notify(done, total);
          }
      }, false);
      if (request.upload) {
          request.upload.onprogress = (e) => {
              let done = e.loaded || e.position,
                  total = e.total || e.totalSize;
              if (typeof options.notify == 'function') {
                options.notify(done, total);
              }
          };
      }

      if (options.timeout) {
        setTimeout(() => {
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
   * @param {String} url The url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return {Promise}
   */
  static head(url, options = {}) {
    options['url'] = url;
    options['method'] = 'HEAD';
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method GET.
   * @static
   * @param {String} url The url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return {Promise}
   */
  static get(url, options = {}) {
    options['url'] = url;
    options['method'] = 'GET';
    return Ajax.request(options);
  }
  /**
   * Exec a XMLHttpRequest with method POST.
   * @static
   * @param {String} url The url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @param {Object} data The data to send in the POST request
   * @return {Promise}
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
   * @param {String} url The url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @param {Object} data The data to send in the PUT request
   * @return {Promise}
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
   * @param {String} url The url for the XMLHttpRequest
   * @param {Object} options A set of options for the XMLHttpRequest
   * @return {Promise}
   */
  static delete(url, options = {}) {
    options['url'] = url;
    options['method'] = 'DELETE';
    return Ajax.request(options);
  }
}
