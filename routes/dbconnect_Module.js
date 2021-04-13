var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

router.use(bodyParser.json());


// Connection Pool 세팅
const pool  = mysql.createPool({
  connectionLimit: 66,   // connection pool에 최대로 저장할 수 있는 connection 수
  waitForConnections: true, // true일 경우, connection이 모두 사용중일때 새로운 connection 요청이 들어온 경우 대기 시킴
  host: "react200.cheyrgtsyjfc.us-east-2.rds.amazonaws.com",
  port: "3306",
  database: 'react',
  user: "admin",
  password: "react200",
});


router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");
  var param = req.body;

  //mybatis mapper경로 설정
  mybatisMapper.createMapper(['./models/'+param.mapper+'.xml']);
  var time = new Date();
  console.log('## '+time+ ' ##');
  console.log("\n Called Mapper Name  = "+param.mapper);

  var format = { language: 'sql', indent: '  ' };
  //mysql 쿼리 정보 세팅
  var query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);
  console.log("\n========= Node Mybatis Query Log Start =========");
  console.log("* mapper namespce : "+param.mapper+"."+param.mapper_id+" *\n");
  console.log(query+"\n");


  pool.getConnection(function(err,connection){
    connection.query(query, function (error, results) {
      if (error) {
        console.log("db error************* : "+error);
      }
      var time2 = new Date();
      console.log('## '+time2+ ' ##');
      console.log('## RESULT DATA LIST ## : \n', results);
      if(results != undefined){
        string = JSON.stringify(results);
        var json = JSON.parse(string);
        if (req.body.crud == "select") {
          if (param.mapper_id == "selectLoginCheck") {
            if (json[0] == undefined) {
              res.send(null);
            } else {
              bcrypt.compare(req.body.is_Password, json[0].userpassword, function(
                err,
                login_flag
              ) {
                if (login_flag == true) {
                  res.send({ json });
                } else {
                  res.send(null);
                }
              });
            }
          } else {
            res.send({ json });
          }
        }else{
          res.send("succ");
        }
      }else{
        res.send("error");
      }

      connection.release();
      console.log("========= Node Mybatis Query Log End =========\n");
    });
  })
});


module.exports = router;