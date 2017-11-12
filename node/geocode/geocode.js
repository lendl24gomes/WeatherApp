const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request.get({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
	timeout: 5000
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body
      });
    }
  });
  
  //request.setTimeout(5000);
  
 /* req.setTimeout(6000, function(){
    this.abort();
	}).bind(req);
	req.write('Please type a valid message');
	req.end(); */
};

module.exports.geocodeAddress = geocodeAddress;
