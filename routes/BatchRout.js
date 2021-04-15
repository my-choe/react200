var express = require('express');
var router = express.Router();
var cron = require('node-cron');

// cron.schedule('5 * * * *', () => {
// cron.schedule('5 0 * * *', () => {
cron.schedule('* * * * *', () => {
  var mapper = 'BatchMapper';//mybatis xml 파일명
  var crud = 'insert';//select, insert, update, delete 중에 입력
  var mapper_id = 'insertBatchlog';

  var param = { is_Batchnm: '테스트 배치', is_Batchlog: '테스트 배치가 정상 실행되었습니다.' };
  console.log('#######  배치 실행 / 테스트 배치 #######');

  const mysql = require('mysql');
  const mybatisMapper = require('mybatis-mapper');

  const connection = mysql.createConnection({
    host: "react200.#########.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    database: 'react',
    user: "admin",
    password: "react200RDS"
  });

  mybatisMapper.createMapper(['./models/'+mapper+'.xml']);
  var time1 = new Date();
  console.log('## '+time1+ ' ##');
  console.log("\n Called Mapper Name  = "+mapper);

  var format = { language: 'sql', indent: '  ' };
  var query = mybatisMapper.getStatement(mapper, mapper_id, param, format);
  console.log("\n========= Node Mybatis Query Log Start =========");
  console.log("* mapper namespce : "+mapper+"."+mapper_id+" *\n");
  console.log(query+"\n");

  connection.connect();
  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log("db error************* : "+error);
    }
    var time2 = new Date();
    console.log('## '+time2+ ' ##');
    console.log('## RESULT DATA LIST ## : \n', results);
    console.log("========= Node Mybatis Query Log End =========\n");
  });
  connection.end();
});

module.exports = router;