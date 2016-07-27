/**
 * A XMLHttpRequest wrapper.
 * @class Ajax
 */
export class Ajax {
    static get defaultOptions() {
        return {
            async: true,
            timeout: 1000 * 60,
            responseType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-type': 'application/x-www-form-urlencoded',
            },
        };
    }
    /**
     * Instantiate a XMLHttpRequest.
     * @return {XMLHttpRequest}
     */
    static create() {
        const XHR = window.XMLHttpRequest || window.ActiveXObject;
        return new XHR('MSXML2.XMLHTTP.3.0');
    }
    /**
     * Exec a XMLHttpRequest.
     *
     * @static
     * @param {Object|String} options A set of options (or the url) for the XMLHttpRequest
     * @property {String}   options.url           The requested url.
     * @property {Object}   options.headers       A set of headers to set (key => value).
     * @property {String}   options.responseType  The response type mime.
     * @property {Number}   options.timeout       A value for request timeout (0 => no timeout).
     * @property {Function} options.notify        A callback function for progress event.
     * @property {Boolean}  options.async         Should exec the request asynchronously.
     * @property {XMLHttpRequest}  options.xhr    The xhr instance to use (optional).
     * @return {Promise}
     */
    static request(options = {}) {
        if (typeof options === 'string') {
            options = {
                url: options,
            };
        }
        return new Promise((resolve, reject) => {
            let request = options.xhr || Ajax.create();
            let resolved = false;
            for (let k in Ajax.defaultOptions) {
                if (typeof options[k] === 'undefined') {
                    options[k] = Ajax.defaultOptions[k];
                }
            }
            request.open(options.method || 'GET', options.url, !!options.async);
            if (options.headers) {
                let headers = options.headers;
                for (let k in headers) {
                    if (headers.hasOwnProperty(k)) {
                        request.setRequestHeader(k, headers[k]);
                    }
                }
            }

            if (options.responseType) {
                request.responseType = options.responseType;
            }

            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    let parse = (req) => {
                        let result;
                        if (options.responseType === 'text' &&
                            typeof req.responseText === 'string') {
                            result = req.responseText;
                        } else if (typeof req.response !== 'undefined') {
                            if (options.responseType === 'json' &&
                                typeof req.response === 'string') {
                                result = JSON.parse(req.response);
                            } else {
                                result = req.response;
                            }
                        } else {
                            // IE workaround
                            try {
                                if (options.responseType === 'json' &&
                                    typeof req.responseText === 'string') {
                                    result = JSON.parse(req.responseText);
                                } else {
                                    result = req.responseText;
                                }
                            } catch (ex) {
                                result = req.responseText;
                            }
                        }
                        return result;
                    };
                    resolved = true;
                    if ((request.status >= 200 && request.status < 300) || request.status === 304) {
                        resolve(parse(request));
                    } else {
                        reject(request);
                    }
                }
            };

            request.onerror = () => {
                resolved = true;
                reject(request);
            };

            request.onabort = () => {
                resolved = true;
                reject(request);
            };

            request.addEventListener('progress', (e) => {
                let done = e.loaded || e.position;
                let total = e.total || e.totalSize;

                if (typeof options.notify === 'function') {
                    options.notify(done, total);
                }
            }, false);

            if (request.upload) {
                request.upload.onprogress = (e) => {
                    let done = e.loaded || e.position;
                    let total = e.total || e.totalSize;
                    if (typeof options.notify === 'function') {
                        options.notify(done, total);
                    }
                };
            }

            let data = options.data;
            if (data !== undefined) {
                request.send(options.data);
            } else {
                request.send();
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
        });
    }
    /**
     * Exec a XMLHttpRequest with method HEAD.
     * @static
     * @param {String} url The url for the XMLHttpRequest.
     * @param {Object} options A set of options for the XMLHttpRequest.
     * @return {Promise}
     */
    static head(url, options = {}) {
        options.url = url;
        options.method = 'HEAD';
        return this.request(options);
    }
    /**
     * Exec a XMLHttpRequest with method GET.
     * @static
     * @param {String} url The url for the XMLHttpRequest.
     * @param {Object} options A set of options for the XMLHttpRequest.
     * @return {Promise}
     */
    static get(url, options = {}) {
        options.url = url;
        options.method = 'GET';
        return this.request(options);
    }
    /**
     * Exec a XMLHttpRequest with method POST.
     * @static
     * @param {String} url The url for the XMLHttpRequest.
     * @param {Object} options A set of options for the XMLHttpRequest.
     * @param {Object} data The data to send in the POST request.
     * @return {Promise}
     */
    static post(url, options = {}, data) {
        options.url = url;
        options.method = 'POST';
        if (data !== undefined) {
            options.data = data;
        }
        return this.request(options);
    }
    /**
     * Exec a XMLHttpRequest with method PUT.
     * @static
     * @param {String} url The url for the XMLHttpRequest.
     * @param {Object} options A set of options for the XMLHttpRequest.
     * @param {Object} data The data to send in the PUT request.
     * @return {Promise}
     */
    static put(url, options = {}, data) {
        options.url = url;
        options.method = 'PUT';
        if (data !== undefined) {
            options.data = data;
        }
        return this.request(options);
    }
    /**
     * Exec a XMLHttpRequest with method DELETE.
     * @static
     * @param {String} url The url for the XMLHttpRequest.
     * @param {Object} options A set of options for the XMLHttpRequest.
     * @return {Promise}
     */
    static delete(url, options = {}) {
        options.url = url;
        options.method = 'DELETE';
        return this.request(options);
    }
    /**
     * Create an Ajax instance.
     * @property {XMLHttpRequest} this.xhr The XMLHttpRequest to use.
     */
    constructor() {
        this.xhr = this.constructor.create();
    }
    /**
     * Exec a XMLHttpRequest.
     * @see Ajax.request
     */
    request(options = {}) {
        if (typeof options === 'string') {
            options = {
                url: options,
            };
        }
        options.xhr = this.xhr;
        return Ajax.request(options);
    }
    /**
     * Exec a XMLHttpRequest with method HEAD.
     * @see Ajax.head
     */
    head(...args) {
        return Ajax.head.call(this, ...args);
    }
    /**
     * Exec a XMLHttpRequest with method GET.
     * @see Ajax.get
     */
    get(...args) {
        return Ajax.get.call(this, ...args);
    }
    /**
     * Exec a XMLHttpRequest with method POST.
     * @see Ajax.post
     */
    post(...args) {
        return Ajax.post.call(this, ...args);
    }
    /**
     * Exec a XMLHttpRequest with method PUT.
     * @see Ajax.put
     */
    put(...args) {
        return Ajax.put.call(this, ...args);
    }
    /**
     * Exec a XMLHttpRequest with method DELETE.
     * @see Ajax.delete
     */
    delete(...args) {
        return Ajax.delete.call(this, ...args);
    }
}
