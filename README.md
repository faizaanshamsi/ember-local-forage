# ember-local-forage

Easily add [localForage][localForage] to your ember-cli app.

## Installation

If you're using ember-cli v0.2.3+:

```no-highlight
ember install ember-local-forage
```

If you're using an older version of ember-cli:

```no-highlight
npm install ember-local-forage --save-dev
```

## Usage

And then in your ember.js app, you can import `localforage`

```
import localforage from 'ember-local-forage';

localforage.setItem('key', 'value') //returns a promise

```

For more information on how to use localForage see the [localForage][localForage] documentation




[bower]: http://bower.io "bower"
[localForage]: https://github.com/mozilla/localForage "localForage"
