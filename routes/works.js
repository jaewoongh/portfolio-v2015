var express = require('express');
var router = express.Router();

/* GET works listing. */
router.get('/:slug', function(req, res, next) {
  res.render('works/' + req.params.slug, { title: 'Jaewoong.works.' + req.params.slug, worklist: req.app.get('worklist') });
});

module.exports = router;
