# ssc-formula2 <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> An easily internationalizable, mobile-friendly datepicker library for the web.

![ssc-formula2 in action](https://raw.githubusercontent.com/yyssc/ssc-formula2/master/ssc-formula2-demo.gif)

## Live Playground

For examples of the datepicker in action, go to https://yyssc.github/ssc-formula2.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=ssc-formula2;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save ssc-formula2 moment@>=#.## react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##
  ```

### Include component
```js
import { Formula } from 'ssc-formula2';
```

## 组件结构

- Formula
  - TextBox
  - FormulaTabs
    - DanJuZiDuan
      - SearchBox
      - DanJuZiDuanTree
    - GuDingZhiTab
      - [Refers]
    - DangAnZhuanHuanTab

[package-url]: https://npmjs.org/package/ssc-formula2
[npm-version-svg]: http://versionbadg.es/yyssc/ssc-formula2.svg
[travis-svg]: https://travis-ci.org/yyssc/ssc-formula2.svg
[travis-url]: https://travis-ci.org/yyssc/ssc-formula2
[deps-svg]: https://david-dm.org/yyssc/ssc-formula2.svg
[deps-url]: https://david-dm.org/yyssc/ssc-formula2
[dev-deps-svg]: https://david-dm.org/yyssc/ssc-formula2/dev-status.svg
[dev-deps-url]: https://david-dm.org/yyssc/ssc-formula2#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/ssc-formula2.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/ssc-formula2.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/ssc-formula2.svg
[downloads-url]: http://npm-stat.com/charts.html?package=ssc-formula2
