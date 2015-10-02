/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-local-forage',

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/localforage/dist/localforage.js');
    app.import('vendor/ember-local-forage/local-forage-shim.js', {
      type: 'vendor',
      exports: { 'localforage': ['default'] }
    });
  }
};
