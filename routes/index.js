var express = require('express');
var router = express.Router();
var data = require('../data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parks', { title: 'Jon', parks: data.national_parks, activities: data.outdoor_activities });
});

router.get('/park/:name', function(req, res, next) {

  var query = req.params.name;
  var list = [];
  data.national_parks.forEach(function (park) {
    if (query.toLowerCase() == park.name.toLowerCase()) {
      list.push(park);
    };
  })
  
  res.render('searchedPark', {listOfParks: list });
});

module.exports = router;
