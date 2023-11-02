var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {

  let userData = await axios.get('https://jsonplaceholder.typicode.com/users');

  res.render('index', 
    { 
      userData: userData.data,
      title: 'Happy Haloween',
      content: 'It is a great day',
      isRaining: true,
      dailyForecast: [
        {day: 'Monday', temp: 45 },
        {day: 'Tuesday', temp: 50 },
        {day: 'Wednesday', temp: 30 },
        {day: 'Thursday', temp: 55 },
        {day: 'Friday', temp: 60 },
        {day: 'Saturday', temp: 70 },
        {day: 'Sunday', temp: 45 },
      ]
    });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
