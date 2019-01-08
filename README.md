# React Gallery Slider
Simple and convenient photo slider for your application! This component is basing on CSS [snap-scroll](https://developers.google.com/web/updates/2018/07/css-scroll-snap) property :boom:

## Installation :wrench:

Install with [npm](https://www.npmjs.com/):

```
npm install --save react-gallery-slider
```

or

Install with [yarn](https://yarnpkg.com/):

```
yarn add react-gallery-slider
```

## Getting Started :bulb:

```js
const React = require('react')
const ReactDOM = require('react-dom')
const GallerySlider = require('react-gallery-slider')

const Photo = require("./img.jpg");

const photos = ["some url", Photo]

ReactDOM.render(
  <GallerySlider photos={photos} />,
  document.getElementById('container')
)
```

ES6

```js
import React from "react";
import ReactDOM from 'react-dom';
import PhotoSlider from "./react-photo-slider";

import Photo from "./img.jpg";
const photos = ["some url", Photo]

ReactDOM.render(
  <GallerySlider photos={photos} />,
  document.getElementById('container')
)
```

### Options :hammer:

* `photos` - _array_ Array of photos' urls (**required**)
* `activePhoto` - _number_ Index (starting from 0) of the current photo. 
* `className` - _string_ Class name of the container element.
* `style` - _object_ Inline styles of the gallery container.

### License :page_facing_up:

MIT © [Espen Hovlandsdal](https://espen.codes/)
