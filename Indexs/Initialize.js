/* Name: Initialize Index Data
 * Version: 1.0.0
 * Created Data: [2015-09-07 06:26:09]
 * Description: Collect index data and save to database.
 * 1. Clear data from table [Index].
 * 2. Get data from Yahoo! finance API.
 * 3. Save data to table [Index]
 */

var http = require('http');
var uri = 'http://table.finance.yahoo.com/table.csv?s=';

//GetData('000001.ss');
download(uri + '000001.ss', function(data) {
	console.log(data);
	console.log(data);
});
/* download data from Yahoo! finance API
 * URI: http://table.finance.yahoo.com/table.csv?s=600000.ss
 */
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function(e) {
		console.log("Got error: " + e.message);
		callback(null);
  });
}
