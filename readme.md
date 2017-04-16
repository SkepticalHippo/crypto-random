# Crypto-Random

![](https://travis-ci.org/SkepticalHippo/crypto-random.svg?branch=master)

A cryptographically strong random number generator. Designed to be a drop-in replacement for `Math.random`. Can be used with Node or in a browser.

## Requirements

* Node 6+
* For supported browsers please refer to [this MDN article](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues).

## Install

`npm i crypto-random --save`

## Usage

```js
const Random = require('crypto-random');

console.log(Random.value()); // a random float between 0 and 1. Replacement function for Math.random.
console.log(Random.range(10, 101)); // a random integer between 10 and 101.
```

## Contributing

Feedback and any contributions are very welcome. Please open up an Issue or a Pull Request.
