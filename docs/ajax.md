<a name="Ajax"></a>
## Ajax
A XMLHttpRequest wrapper.

**Kind**: global class  

* [Ajax](#Ajax)
  * [.request(options)](#Ajax.request) ⇒
  * [.head(url, options)](#Ajax.head) ⇒
  * [.get(url, options)](#Ajax.get) ⇒
  * [.post(url, options, data)](#Ajax.post) ⇒
  * [.put(url, options, data)](#Ajax.put) ⇒
  * [.delete(url, options)](#Ajax.delete) ⇒

<a name="Ajax.request"></a>
### Ajax.request(options) ⇒
Exec a XMLHttpRequest.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> &#124; <code>String</code> | A set of options (or the url) for the XMLHttpRequest |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.url | <code>String</code> | The requested url |
| options.headers | <code>Object</code> | A set of headers to set (key => value) |
| options.responseType | <code>String</code> | The response type mime |
| options.timeout | <code>Number</code> | A value for request timeout (0 => no timeout) |
| options.notify | <code>function</code> | A callback function for progress event |
| options.async | <code>Boolean</code> | Should exec the request asynchronously |

<a name="Ajax.head"></a>
### Ajax.head(url, options) ⇒
Exec a XMLHttpRequest with method HEAD.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest |
| options | <code>Object</code> | A set of options for the XMLHttpRequest |

<a name="Ajax.get"></a>
### Ajax.get(url, options) ⇒
Exec a XMLHttpRequest with method GET.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest |
| options | <code>Object</code> | A set of options for the XMLHttpRequest |

<a name="Ajax.post"></a>
### Ajax.post(url, options, data) ⇒
Exec a XMLHttpRequest with method POST.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest |
| options | <code>Object</code> | A set of options for the XMLHttpRequest |
| data | <code>Object</code> | The data to send in the POST request |

<a name="Ajax.put"></a>
### Ajax.put(url, options, data) ⇒
Exec a XMLHttpRequest with method PUT.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest |
| options | <code>Object</code> | A set of options for the XMLHttpRequest |
| data | <code>Object</code> | The data to send in the PUT request |

<a name="Ajax.delete"></a>
### Ajax.delete(url, options) ⇒
Exec a XMLHttpRequest with method DELETE.

**Kind**: static method of <code>[Ajax](#Ajax)</code>  
**Returns**: Promise  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url for the XMLHttpRequest |
| options | <code>Object</code> | A set of options for the XMLHttpRequest |

