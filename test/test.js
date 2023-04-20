const assert = require('assert');
const quickStringify = require('../index').quickStringify;

describe('quickStringify', function() {
    it('should stringify JSON objects', function() {
      const data = {name: 'John', age: 30};
      const expectedJson = '{"name":"John","age":30}';
      assert.strictEqual(quickStringify(data), expectedJson);
    });
  
    it('should stringify large data sets', function() {
      const data = [];
      for (let i = 0; i < 10000; i++) {
        data.push({id: i, name: 'John Doe', age: 30, email: 'johndoe@example.com'});
      }
      const expectedJson = JSON.stringify(data);
      assert.strictEqual(quickStringify(data), expectedJson);
    });
  });
  