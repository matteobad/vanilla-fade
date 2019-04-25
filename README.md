# vanilla-fade

[![npm version](https://badge.fury.io/js/vanilla-fade.svg)](https://badge.fury.io/js/vanilla-fade) [![Build Status](https://travis-ci.org/matteobad/vanilla-fade.svg?branch=master)](https://travis-ci.org/matteobad/vanilla-fade/)

Vanilla js implementation of the JQuery fade methods. the `fadeIn()` and `fadeOut()` methods will be added to the `Element` prototype and can be used with different options.

## Installation

This package can be downloaded from the NPM registry or included in via a standard script tag from [this url](https://unpkg.com/vanilla-fade/dist/vanilla-fade.js).

```javascript
// ES5
<script src="https://unpkg.com/vanilla-fade/dist/vanilla-fade.js">

// ES6
import 'vanilla-fade';
```

## Usage

After import the package the `Element.prototype.fadeIn()` and `Element.prototype.fadeOut()` will be available to use. The two methods accepts three paramenters: duration = 250, easing = 'linear', complete = null.

Easing can be one of the following:
linear, quadratic, swing, circ, back, bounce, elastic.

The Element display property will be set to 'none' after `fadeOut`, but the original value will be preserved inside the Element and reapplied after `fadeIn`.

## TODO

- [ ] call to fadeIn/Out if element is already visible/hidden
- [ ] old browsers support
- [ ] write some tests
- [ ] add fadeToggle function
