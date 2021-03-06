const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f92d815252fd51fc54ca0c57d1dd4253/' + latitude + ',' + longitude;

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees Fahrenheit out. There is a ${body.currently.precipProbability}% chance of rain. The high is ${body.daily.data[0].temperatureHigh} degrees, and the low is ${body.daily.data[0].temperatureLow} degrees.`);
        }
    });
}

module.exports = forecast;