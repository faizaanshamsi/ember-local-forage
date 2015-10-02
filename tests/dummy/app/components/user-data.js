import Ember from 'ember';
import localforage from 'ember-local-forage';

const {
  Component,
  on
} = Ember;

export default Component.extend({
  what: on('didInsertElement', function() {
    localforage.setItem('userData', 'exampleUser').then((value) => {
      console.log('The value of userData is: ' + value);
    });
  })
});
