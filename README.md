# Ajax
> A XMLHttpRequest wrapper.

## Install

[![NPM](https://img.shields.io/npm/v/chialab-ajax.svg)](https://www.npmjs.com/package/chialab-ajax)
```
$ npm i chialab-ajax --save
```
[![Bower](https://img.shields.io/bower/v/chialab-ajax.svg)](https://github.com/chialab/ajax-js)
```
$ bower i chialab-ajax --save
```

## Example

```js
// GET request
var xhrGet = Ajax.get('http://my.api.url/')
    .then(function(res) {
        console.log('Result:', res);
    }, function(xhr) {
        console.error('Error:', xhr.response);
    });

// POST request
var xhrPost = Ajax.post('http://my.api.url/', { title: 'Hello.' })
    .then(function(res) {
        console.log('Result:', res);
    }, function(xhr) {
        console.error('Error:', xhr.response);
    });

```

## Dev

[![Chialab es6-workflow](https://img.shields.io/badge/project-es6--workflow-lightgrey.svg)](https://github.com/Chialab/es6-workflow)
[![Travis](https://img.shields.io/travis/Chialab/ajax-js.svg?maxAge=2592000)](https://travis-ci.org/Chialab/ajax-js)
[![Code coverage](https://codecov.io/gh/Chialab/ajax-js/branch/master/graph/badge.svg)](https://codecov.io/gh/Chialab/ajax-js)

![Sauce Test Status](https://saucelabs.com/browser-matrix/chialab-sl-002.svg)
