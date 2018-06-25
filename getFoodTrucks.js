var https = require('https');
var limit = 10;
const getCurrentDateTime = require('./getCurrentDateTime');
var sysdate = getCurrentDateTime.getCurrentDateTime();
var stdin = process.openStdin();
var APP_TOKEN = 'wsQXg21sDdnXnIxoH5jVeY8N1';

var self = module.exports = {
  getFoodTrucks: function(offset) {
    // console.log('fetching data for offset:' + offset + ' and limit:' + limit);

    if (sysdate.hour < 9) {
      sysdate.hour = '0' + sysdate.hour;
    }

    if (sysdate.minutes < 9) {
      sysdate.minutes = '0' + sysdate.minutes;
    }
    var cur_time = sysdate.hour + ":" + sysdate.minutes;
    // cur_time = "08:00";
    //console.log(cur_time);
    //console.log(sysdate.day);

    var optionsget = {
      host: 'data.sfgov.org',
      path: `/resource/bbb8-hzi6.json?$$app_token=${APP_TOKEN}&dayorder=${sysdate.day}&$where=start24<='${cur_time}'%20and%20end24>'${cur_time}'&$select=applicant,location&$order=applicant&$limit=${limit}&$offset=${offset}`,
      method: 'GET'
    }
    // do the GET request
    var reqGet = https.request(optionsget, function(res) {

      res.on('data', function(foodTruckData) {

        // process.stdout.write(foodTruckData);
        var parsedForTrucks = JSON.parse(foodTruckData);
        var count = parsedForTrucks.length;
        for (i = 0; i < count; i++) {
          console.log(parsedForTrucks[i].applicant.padEnd(75) + parsedForTrucks[i].location);
        }
        // console.log(count);
        self.printNextData(count, offset);
      });
    });

    reqGet.end();
    reqGet.on('error', function(e) {
      console.error(e);
    });
  },

  printNextData: function(count, offset) {
    if (count == limit) {
      console.log("Press any key to continue...");
      stdin.addListener('data', function(d) {
        stdin.removeAllListeners('data');
        self.getFoodTrucks(offset + limit);
      });
    } else {
      process.exit();
    }
  }
}