const https = require('https');

// Replace YOUR_API_KEY with your OpenWeatherMap API key
const location = async () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Your location is: ${latitude}, ${longitude}`);
    const apiKey = '80489def9ea6e2edfc25ff2c03d6e2b6';


    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${apiKey}`;

    https.get(apiUrl, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const weatherData = JSON.parse(data);
        const rainfall = weatherData.hourly[0].rain ? weatherData.hourly[0].rain['1h'] : 0;

        console.log(`Rainfall at (${latitude}, ${longitude}): ${rainfall} mm`);
      });
    }).on('error', (err) => {
      console.error(`Error: ${err.message}`);
    }); 
  });
  return rainfall
}

module.exports = {location}
