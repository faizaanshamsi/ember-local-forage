module.exports = {
  description: 'Add localForage to Ember',

  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'localforage', target: '~1.2.10' }
    ]);
  }
};
