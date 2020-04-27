# Vanilla JS - fade &nbsp; [![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X81MJAP)

[![npm version](https://badge.fury.io/js/vanilla-fade.svg)](https://badge.fury.io/js/vanilla-fade) ![David](https://img.shields.io/david/dev/matteobad/vanilla-fade.svg) ![David](https://img.shields.io/david/matteobad/vanilla-fade.svg) [![Build Status](https://travis-ci.org/matteobad/vanilla-fade.svg?branch=master)](https://travis-ci.org/matteobad/vanilla-fade/) [![Greenkeeper badge](https://badges.greenkeeper.io/matteobad/vanilla-fade.svg)](https://greenkeeper.io/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)

Simple **Vanilla JS** implementation of the `fadeIn()`, `fadeOut()`, `fadeTo()` and `fadeToggle()` methods. This little package once loaded will add the mentioned methods to the `Element` prototype. All of the above methods accept the same paramaters: [duration, easing, complete]. Furthermore the `prefers-reduce-motion` is natively supported. You can read more about it [here](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion).

* [Installation](#installation)
* [Usage](#usage)
* [prefers-reduce-motion](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion)
* [Broser support](#browser-support)
* [Demo](https://matteobad.github.io/vanilla-fade)

---

**Find this usefull? ☕ [Buy me a coffee!](https://ko-fi.com/matteobad)**

---

## Installation

This package can be downloaded from the NPM registry `npm install vanilla-fade --save`. Or included in via a standard script tag from [this url](https://unpkg.com/vanilla-fade/dist/vanilla-fade.js). Once imported it will automatically initialize.

```javascript
// IIFE
<script src="https://unpkg.com/vanilla-fade/dist/vanilla-fade.js">

// CJS
require('vanilla-fade/cjs'); // all the library
require('vanilla-fade/cjs/fadeIn'); // single animation
require('vanilla-fade/cjs/fadeOut'); // single animation
require('vanilla-fade/cjs/fadeToggle'); // single animation
require('vanilla-fade/cjs/fadeTo'); // single animation

// ESM
import 'vanilla-fade/esm'; // all the library
import 'vanilla-fade/esm/fadeIn'; // single animation
import 'vanilla-fade/esm/fadeOut'; // single animation
import 'vanilla-fade/esm/fadeToggle'; // single animation
import 'vanilla-fade/esm/fadeTo'; // single animation
```

## Usage

After import the package the `Element.prototype.fadeIn()`, `Element.prototype.fadeOut()`, `Element.prototype.fadeTo()` and `Element.prototype.fadeToggle()` will be available to use. The methods accepts the following paramenters:

```javascript
Element.fadeIn(duration = 250, easing = 'linear', complete = null)
Element.fadeOut(duration = 250, easing = 'linear', complete = null)
Element.fadeTo(duration = 250, opacity = NaN, easing = 'linear', complete = null)
Element.fadeToggle(duration = 250, easing = 'linear', complete = null)
```

* **duration** can be a number or a string representing and integer of milliseconds.
* **opacity** final opacity value. _Required only in **fadeTo**_
* **easing** should be one of the following string: _[linear, quadratic, swing, circ, bounce]_.
* **complete** is a callback that will be executed after the animation completes.

The Element display property won't change after fading out. No assumption on the original display value or opacity value are made. Once triggered the opacity will go from 0 -> 1 and viceversa. So if the element original opacity was .5 this value won't be considered when toggling the fading effect.

## Browser support

Babel will automatically transpile according to the following browserslist:

```json
# Browsers that we support

defaults
```
