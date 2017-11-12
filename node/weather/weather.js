const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
    json: true,
	timeout:5000
	}, (error, response, body) => {
		//console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {	
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature		
      });
    }
  });
};

module.exports.getWeather = getWeather;
