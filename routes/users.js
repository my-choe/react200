var express = require('express');
var router = express.Router();

// localhost:5000에 user 경로를 호출하면 response로 반환한 텍스트가 화면에 표출됨.
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
