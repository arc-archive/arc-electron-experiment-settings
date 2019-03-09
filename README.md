[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-electron-experiment-settings.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-electron-experiment-settings)

[![Build Status](https://travis-ci.org/advanced-rest-client/arc-electron-experiment-settings.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-electron-experiment-settings)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-electron-experiment-settings)

## &lt;arc-electron-experiment-settings&gt;

Experiments settings panel for ARC


```html
<arc-electron-experiment-settings></arc-electron-experiment-settings>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/arc-electron-experiment-settings
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/arc-electron-experiment-settings/arc-electron-experiment-settings.js';
    </script>
  </head>
  <body>
    <arc-electron-experiment-settings></arc-electron-experiment-settings>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/arc-electron-experiment-settings/arc-electron-experiment-settings.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <arc-electron-experiment-settings rest-apis></arc-electron-experiment-settings>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/arc-electron-experiment-settings
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
