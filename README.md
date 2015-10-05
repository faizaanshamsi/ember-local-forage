# ember-local-forage

[![Build Status](https://travis-ci.org/faizaanshamsi/ember-local-forage.svg?branch=master)](https://travis-ci.org/faizaanshamsi/ember-local-forage)
[![Dependency Status](https://david-dm.org/faizaanshamsi/ember-local-forage.svg)](https://david-dm.org/faizaanshamsi/ember-local-forage)
[![devDependency Status](https://david-dm.org/faizaanshamsi/ember-local-forage/dev-status.svg)](https://david-dm.org/faizaanshamsi/ember-local-forage#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-local-forage.svg)](http://emberobserver.com/addons/ember-local-forage)
[![npm version](https://badge.fury.io/js/ember-local-forage.svg)](http://badge.fury.io/js/ember-local-forage)
[![Code Climate](https://codeclimate.com/github/faizaanshamsi/ember-local-forage/badges/gpa.svg)](https://codeclimate.com/github/faizaanshamsi/ember-local-forage)

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
