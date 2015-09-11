var Funds = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Fund.all(function(err, funds) {
      if (err) {
        throw err;
      }
      self.respondWith(funds, {type:'Fund'});
    });
  };

  this.add = function (req, resp, params) {
		geddy.log.debug(params);
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , fund = geddy.model.Fund.create(params);

    if (!fund.isValid()) {
      this.respondWith(fund);
    }
    else {
      fund.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(fund, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Fund.first(params.id, function(err, fund) {
      if (err) {
        throw err;
      }
      if (!fund) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(fund);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Fund.first(params.id, function(err, fund) {
      if (err) {
        throw err;
      }
      if (!fund) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(fund);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Fund.first(params.id, function(err, fund) {
      if (err) {
        throw err;
      }
      fund.updateProperties(params);

      if (!fund.isValid()) {
        self.respondWith(fund);
      }
      else {
        fund.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(fund, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Fund.first(params.id, function(err, fund) {
      if (err) {
        throw err;
      }
      if (!fund) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Fund.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(fund);
        });
      }
    });
  };

};

exports.Funds = Funds;
