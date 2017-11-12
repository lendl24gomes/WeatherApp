const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout')

var app = express();

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//app.use(timeout('5s'))

app.post('/weather',(req, res) => {
var loc=[];
var weathers=[];
console.log (req.body);
var input= req.body.address;
	
console.log(input);
geocode.geocodeAddress(input, (errorMessage, result) => {
  if (errorMessage) {
    res.send(errorMessage);
  } else {
    //console.log(result.address);
	var add= result.address;
	//console.log(JSON.stringify(add, undefined, 2)); 
	//console.log (add.results[0].geometry.location.lat)
	for(var i in add.results)
	{
		//console.log (`Address is ${add.results[i].formatted_address}.`); 
		  loc.push(add.results[i].formatted_address);
		  //console.log(loc);
		weather.getWeather(add.results[i].geometry.location.lat, add.results[i].geometry.location.lng, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
		  weathers.push(weatherResults);
		 // console.log("Size of array ",add.results.length);
		  if (add.results.length== weathers.length)
		  {
			 console.log(loc);
			 console.log(weathers);
			 var data={loc,weathers};
			 res.send(data);
		  }	 
      }
    });			  
  }
  }
});

});



app.listen(2400, () => {
    console.log('Started on port 2400');
});
