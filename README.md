<h1 align="center">Javascript Console Styling (JCS)</h1>

<div align="center">
  <p align="center">
    <a href="https://www.npmjs.com/package/javascript-console-styling">
      <img src="https://img.shields.io/npm/v/javascript-console-styling.svg?style=flat-square" alt="NPM Version" />
    </a>
    <a href="https://www.npmjs.com/package/javascript-console-styling">
      <img src="https://img.shields.io/npm/dm/javascript-console-styling.svg?style=flat-square" alt="NPM Downloads" />
    </a>
  </p>
</div>

<p align="center">
  A package made specifically for providing you with all the javascript console colours and styles you'll ever need as simple functions!
</p>

# Features
This package comes with all available console styling escape codes in the form of functions, which allows for features that [`console-styling`](https://www.npmjs.com/package/console-styling) does not provide such as nesting colours and/or decorations. This package also provides a `main.js` file that can be used to easily test out all the functions and their output in different environments.

## Colours
`Black`, `Black Background`, `Red`, `Red Background`, `Green`, `Green Background`, `Yellow`, `Yellow Background`, `Blue`, `Blue Background`, `Magenta`, `Magenta Background`, `Cyan`, `Cyan Background`, `White`, `White Background`, `Gray`, `Gray Background`, `Bright Red`, `Bright Red Background`, `Bright Green`, `Bright Green Background`, `Bright Yellow`, `Bright Yellow Background`, `Bright Blue`, `Bright Blue Background`, `Bright Magenta`, `Bright Magenta Background`, `Bright Cyan`, `Bright Cyan Background`, `Bright White`, `Bright White Background`

![All available colours](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ki6bt5lvbe4lbcrncsrn.png)

## Decorations
`Bright`, `Dim`, *Italic `Not widely supported`*, `Underline`, `SlowBlink`, *RapidBlink `Not widely supported`*, *Reverse `Not widely supported`*, *Hidden `Not widely supported`*, *Strikethrough `Not supported by all terminals (mostly the Windows Terminal)`*

![All available decorations, the eighth one is "hidden"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0r1rgk6jw9uxvsuy0f22.gif)

## Combinations
You can obviously combined colour styles and decorations together by nesting them:

![All available decoration/colour style combinations](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y439cad9qfhlzxxdqc1i.gif)

![The first block of those two is hidden](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mhvmily462ti5fu0h5h6.png)

# Usage
### Option 1: Import all the colours and decorations
You can import all the colour styles and decorations together with the following code:

```js
const JCS = require("javascript-console-styling");
```
You can also import the `Colours` and `Decorations` object with the following code:

```js
const { Colours, Decorations } = require("javascript-console-styling");
```
And later use individual styles:

```js
console.log(Colours.redBg(Decorations.underline("Hello, world!")));
```
or declare them on their own:

```js
const redBg = Colours.redBg;
const underline = Decorations.underline;
console.log(redBg(underline("Hello, world!")));
```

### Option 2: Import only the colours
If you only want to use the colour styles, you can import them on their own with the following code:

```js
const Colours = require("javascript-console-styling/Colours");
```
You can also import a specific colour styling on its own with the following code:

```js
const { red, magenta, cyanBg } = require("javascript-console-styling/Colours");
```

### Option 3: Import only the decorations
If you only want to use the decorations, you can import them on their own with the following code:

```js
const Decorations = require("javascript-console-styling/Decorations");
```
You can also import a specific decoration on its own with the following code:

```js
const { bright, underline, strikethrough } = require("javascript-console-styling/Decorations");
```

# Issues

You can file an issue on [Github](https://github.com/Proman4713/javascript-console-styling/issues), your issue can be a suggestion or a bug report as long as it's not a duplicate and is detailed and concisely described.