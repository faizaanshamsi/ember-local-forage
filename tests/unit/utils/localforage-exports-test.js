import { module, test } from 'qunit';
import localforage from 'ember-local-forage';

module('Unit | Utility | localforage exports');

test('localforage is exported successfully', function(assert) {
  assert.ok(localforage, 'localforage is exported');
});

test('localforage has expected functions', function(assert) {
  assert.equal(typeof localforage.getItem, 'function',
    'localforage has a known function on it (getItem)');
  assert.equal(typeof localforage.getItem, 'function',
    'localforage has a known function on it (setItem)');
});
