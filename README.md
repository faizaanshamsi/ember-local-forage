# ember-local-forage

Easily add [localForage][localForage] to your ember-cli app.

## Usage

This addon provides the ability to import localForage as an ES6 module:

```javascript
import localforage from 'ember-local-forage';

localforage.setItem('key', 'value');
```

For more information on how to use localForage see the [localForage][localForage] documentation.

An example is provided in the `user-data` component in the dummy app.

## Installation

If you're using ember-cli v0.2.3+:

```no-highlight
ember install ember-local-forage
```

If you're using an older version of ember-cli:

```no-highlight
npm install ember-local-forage --save-dev
ember generate ember-local-forage
```


[bower]: http://bower.io "bower"
[localForage]: https://github.com/mozilla/localForage "localForage"
