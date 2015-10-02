module.exports = {
  description: 'Who knows'

  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      { name: 'localforage', target: '~1.12.0' }
    ]);
  }
};
