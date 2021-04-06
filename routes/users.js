var express = require('express');
var router = express.Router();

// localhost:5000에 user 경로를 호출하면 response로 반환한 텍스트가 화면에 표출됨.
/* Post users listing. */
router.post('/', function(req, res, next) {
  res.send({'message':'node post success'});
});

module.exports = router;
