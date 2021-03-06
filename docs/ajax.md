## Classes

<dl>
<dt><a href="#Ajax">Ajax</a></dt>
<dd></dd>
<dt><a href="#Ajax">Ajax</a></dt>
<dd></dd>
</dl>

<a name="Ajax"></a>

## Ajax
**Kind**: global class  

* [Ajax](#Ajax)
    * [`new Ajax()`](#new_Ajax_new)
    * [`new Ajax()`](#new_Ajax_new)
    * _instance_
        * [`.request()`](#Ajax+request)
        * [`.head()`](#Ajax+head)
        * [`.get()`](#Ajax+get)
        * [`.post()`](#Ajax+post)
        * [`.put()`](#Ajax+put)
        * [`.delete()`](#Ajax+delete)
    * _static_
        * [`.create()`](#Ajax.create) ⇒ <code>XMLHttpRequest</code>
        * [`.request(options)`](#Ajax.request) ⇒ <code>Promise</code>
        * [`.head(url, options)`](#Ajax.head) ⇒ <code>Promise</code>
        * [`.get(url, options)`](#Ajax.get) ⇒ <code>Promise</code>
        * [`.post(url, options, data)`](#Ajax.post) ⇒ <code>Promise</code>
        * [`.put(url, options, data)`](#Ajax.put) ⇒ <code>Promise</code>
        * [`.delete(url, options)`](#Ajax.delete) ⇒ <code>Promise</code>

<a name="new_Ajax_new"></a>

### `new Ajax()`
A XMLHttpRequest wrapper.

<a name="new_Ajax_new"></a>

### `new Ajax()`
Create an Ajax instance.

<a name="Ajax+request"></a>

### `ajax.request()`
Exec a XMLHttpRequest.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.request  
<a name="Ajax+head"></a>

### `ajax.head()`
Exec a XMLHttpRequest with method HEAD.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.head  
<a name="Ajax+get"></a>

### `ajax.get()`
Exec a XMLHttpRequest with method GET.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.get  
<a name="Ajax+post"></a>

### `ajax.post()`
Exec a XMLHttpRequest with method POST.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.post  
<a name="Ajax+put"></a>

### `ajax.put()`
Exec a XMLHttpRequest with method PUT.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.put  
<a name="Ajax+delete"></a>

### `ajax.delete()`
Exec a XMLHttpRequest with method DELETE.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.delete  
<a name="Ajax.create"></a>

### `Ajax.create()` ⇒ <code>XMLHttpRequest</code>
Instantiate a XMLHttpRequest.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
<a name="Ajax.request"></a>

### `Ajax.request(options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> &#124; <code>String</code> | A set of options (or the url) for the XMLHttpRequest |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.url | <code>String</code> | The requested url. |
| options.headers | <code>Object</code> | A set of headers to set (key => value). |
| options.responseType | <code>String</code> | The response type mime. |
| options.timeout | <code>Number</code> | A value for request timeout (0 => no timeout). |
| options.notify | <code>function</code> | A callback function for progress event. |
| options.async | <code>Boolean</code> | Should exec the request asynchronously. |
| options.xhr | <code>XMLHttpRequest</code> | The xhr instance to use (optional). |

<a name="Ajax.head"></a>

### `Ajax.head(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method HEAD.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

<a name="Ajax.get"></a>

### `Ajax.get(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method GET.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

<a name="Ajax.post"></a>

### `Ajax.post(url, options, data)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method POST.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |
| data | <code>Object</code> | The data to send in the POST request. |

<a name="Ajax.put"></a>

### `Ajax.put(url, options, data)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method PUT.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |
| data | <code>Object</code> | The data to send in the PUT request. |

<a name="Ajax.delete"></a>

### `Ajax.delete(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method DELETE.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

<a name="Ajax"></a>

## Ajax
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| this.xhr | <code>XMLHttpRequest</code> | The XMLHttpRequest to use. |


* [Ajax](#Ajax)
    * [`new Ajax()`](#new_Ajax_new)
    * [`new Ajax()`](#new_Ajax_new)
    * _instance_
        * [`.request()`](#Ajax+request)
        * [`.head()`](#Ajax+head)
        * [`.get()`](#Ajax+get)
        * [`.post()`](#Ajax+post)
        * [`.put()`](#Ajax+put)
        * [`.delete()`](#Ajax+delete)
    * _static_
        * [`.create()`](#Ajax.create) ⇒ <code>XMLHttpRequest</code>
        * [`.request(options)`](#Ajax.request) ⇒ <code>Promise</code>
        * [`.head(url, options)`](#Ajax.head) ⇒ <code>Promise</code>
        * [`.get(url, options)`](#Ajax.get) ⇒ <code>Promise</code>
        * [`.post(url, options, data)`](#Ajax.post) ⇒ <code>Promise</code>
        * [`.put(url, options, data)`](#Ajax.put) ⇒ <code>Promise</code>
        * [`.delete(url, options)`](#Ajax.delete) ⇒ <code>Promise</code>

<a name="new_Ajax_new"></a>

### `new Ajax()`
A XMLHttpRequest wrapper.

<a name="new_Ajax_new"></a>

### `new Ajax()`
Create an Ajax instance.

<a name="Ajax+request"></a>

### `ajax.request()`
Exec a XMLHttpRequest.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.request  
<a name="Ajax+head"></a>

### `ajax.head()`
Exec a XMLHttpRequest with method HEAD.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.head  
<a name="Ajax+get"></a>

### `ajax.get()`
Exec a XMLHttpRequest with method GET.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.get  
<a name="Ajax+post"></a>

### `ajax.post()`
Exec a XMLHttpRequest with method POST.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.post  
<a name="Ajax+put"></a>

### `ajax.put()`
Exec a XMLHttpRequest with method PUT.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.put  
<a name="Ajax+delete"></a>

### `ajax.delete()`
Exec a XMLHttpRequest with method DELETE.

**Kind**: instance method of <code>[Ajax](#Ajax)</code>  
**See**: Ajax.delete  
<a name="Ajax.create"></a>

### `Ajax.create()` ⇒ <code>XMLHttpRequest</code>
Instantiate a XMLHttpRequest.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
<a name="Ajax.request"></a>

### `Ajax.request(options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> &#124; <code>String</code> | A set of options (or the url) for the XMLHttpRequest |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.url | <code>String</code> | The requested url. |
| options.headers | <code>Object</code> | A set of headers to set (key => value). |
| options.responseType | <code>String</code> | The response type mime. |
| options.timeout | <code>Number</code> | A value for request timeout (0 => no timeout). |
| options.notify | <code>function</code> | A callback function for progress event. |
| options.async | <code>Boolean</code> | Should exec the request asynchronously. |
| options.xhr | <code>XMLHttpRequest</code> | The xhr instance to use (optional). |

<a name="Ajax.head"></a>

### `Ajax.head(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method HEAD.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

<a name="Ajax.get"></a>

### `Ajax.get(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method GET.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

<a name="Ajax.post"></a>

### `Ajax.post(url, options, data)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method POST.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |
| data | <code>Object</code> | The data to send in the POST request. |

<a name="Ajax.put"></a>

### `Ajax.put(url, options, data)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method PUT.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |
| data | <code>Object</code> | The data to send in the PUT request. |

<a name="Ajax.delete"></a>

### `Ajax.delete(url, options)` ⇒ <code>Promise</code>
Exec a XMLHttpRequest with method DELETE.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest. |
| options | <code>Object</code> | A set of options for the XMLHttpRequest. |

