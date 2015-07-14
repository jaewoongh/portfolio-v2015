var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cover', { title: 'Jaewoong', worklist: req.app.get('worklist') });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Jaewoong.about', worklist: req.app.get('worklist') });
});

router.get('/cvresume', function(req, res, next) {
  res.render('cvresume', { title: 'Jaewoong.cv', worklist: req.app.get('worklist') });
});

module.exports = router;
