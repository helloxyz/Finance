var assert = require('assert')
  , tests
  , Fund = geddy.model.Fund;

tests = {

  'after': function (next) {
    // cleanup DB
    Fund.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var fund = Fund.create({});
    fund.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
