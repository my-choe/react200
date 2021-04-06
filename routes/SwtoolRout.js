var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');
//body-parser 패키지의 urlencoded함수를 실행하면 &key1=value1&key2=value2와 같은 형태로 전달되는 데이터를 추출할 수 있다.
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * http://localhost:5000/api/Swtool?type=list와 같은 호출url에서 type이라는 key의 value(list)를 추출하기 위해서는
 * req.query문법으로 접근해야 한다. type값에 따라 호출하는 정보를 분기처리한다.
 */
router.post('/', (req, res, next) => {
    var type = req.query.type;
    if(type == 'list'){
      //Swtool 리스트 조회
      try {
        // Mysql Api 모듈(CRUD)
        var dbconnect_Module = require('./dbconnect_Module');
    
        //Mysql 쿼리 호출 정보 입력
        req.body.mapper = 'SwToolsMapper';//mybatis xml 파일명
        req.body.crud = 'select';//select, insert, update, delete 중에 입력
        req.body.mapper_id = 'selectSwToolsList';
        
        /** line18에서 require한 dbconnect_Module 파일로 라우팅한다.
         * dbconnect_Module파일도 라우터 역할을 하는데,
         * mysql 서버를 연결해 쿼리를 실행하고 결괏값을 response로 전송한다.
         * 이때 line 21~23에서 body에 넣었던 데이터들이 함께 전송된다.
         */
        router.use('/', dbconnect_Module);
        // next함수 사용 시 현재 라우터에서 response를 보내지 않고 다음 라우터(dbconnect_Module)로 response 작업을 넘길 수 있다.
        next('route')
      } catch (error) {
        console.log("Module > dbconnect error : "+ error);      
      }
    }
});

module.exports = router;