var CreateFunds = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('date', 'datetime');
          t.column('price', 'number');
          t.column('qty', 'number');
          t.column('net', 'number');
          t.column('increment', 'number');
          t.column('currency', 'string');
          t.column('account', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('fund', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('fund', callback);
  };
};

exports.CreateFunds = CreateFunds;
