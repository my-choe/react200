var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

let jwt = require("jsonwebtoken");
let secretObj = require("../ignorefile/jwt");
/**
 * salt는 해커가 비밀번호를 유추하기 어렵도록 한 번 더 암호화하는 문자열이다.
 * bcrypt 패키지 내부적으로 salt의 크기만큼의 임의의 문자열을 생성한다.
 * bcrypt의 hash 함수와 salt를 사용해 암호화 한 결과는 hash함수만으로 암호화한 결과보다 복잡해 복호화가 어렵다.
 */
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res, next) => {
    var type = req.query.type;
    if(type == "signup"){
        // 회원가입 정보 삽입
        try {
            var dbconnect_Module = require('./dbconnect_Module');

            req.body.mapper = 'UserMapper';
            req.body.crud = 'insert';
            req.body.mapper_id = 'insertUser';

            var myPlaintextPassword = req.body.is_Password;
            if(myPlaintextPassword != '' && myPlaintextPassword != undefined ){
                bcrypt.genSalt(saltRounds, function(err, salt){
                    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                        req.body.is_Password = hash;
                        router.use('/', dbconnect_Module);
                        next('route')
                    });
                });
            }else{
                router.use('/', dbconnect_Module);
                next('route')
            }
        } catch (error) {
            console.log("Module > dbconnect error : " + error);
        }
    }else if(type == 'dplicheck'){
        // 이메일 중복체크
        try {
            var dbconnect_Module = require('./dbconnect_Module');

            req.body.mapper = 'UserMapper';
            req.body.crud = 'select';
            req.body.mapper_id = 'selectUserDpliCheck';

            router.use('/', dbconnect_Module);
            next('route')
        } catch (error) {
            console.log("Module > dbconnect error : " + error);
        }
    }else if(type == 'signin'){
        // 로그인 조회
        var dbconnect_Module = require('./dbconnect_Module');

        req.body.mapper = 'UserMapper';
            req.body.crud = 'select';
            req.body.mapper_id = 'selectLoginCheck';
            router.use('/', dbconnect_Module);
            next('route')
    }else if(type == "SessionState"){
        /**
         * jsonwebtoken 패키지의 sign 함수를 사용해 아이디의 암호화된 토큰을 생성한다.
         * email 토큰 변수에 파라미터로 전달받은 아이디(userid)를 할당한다.
         * 비밀키(secretObj.secret)를 sign 함수의 두번째 파라미터로 호출한다.
         * expiresIn 속성으로 토큰이 유효한 시간을 60분으로 할당한다.
         */
        var userid = req.body.is_Email
        var name = req.body.is_UserName
        try{
            let token1 = jwt.sign(
                { email: userid },
                secretObj.secret,
                { expiresIn: '60m'}
            )

            let token2 = jwt.sign(
                { username: name },
                secretObj.secret,
                { expiresIn: '60m'}
            )

           res.send({"token1":token1, "token2":token2});
        }catch(error){
            res.send(error)
        }
    }else if(type == "SessionConfirm"){
        try{
            // 아이디와 회원명 각 변수에 할당(이때 두 변수는 암호화 된 상태)
            let token1 = req.body.token1;
            let token2 = req.body.token2;

            if(token1 != undefined && token1 != '' && token2 != undefined && token2 != ''){
                let decoded1 = jwt.verify(token1, secretObj.secret);
                let decoded2 = jwt.verify(token2, secretObj.secret);
                res.send({
                    "token1":decoded1.email,
                    "token2":decoded2.username
                });
            }else{
                res.send({"token1":"","token2":""});
            }
        }catch(error){
            res.send(error)
        }
    }else if(type == "SessionSignin"){
        // 쿠키 정보로 사용자 인증 
        try {
          // Mysql Api 모듈(CRUD)
          var dbconnect_Module = require('./dbconnect_Module');
          //Mysql 쿼리 호출정보 입력
          req.body.mapper = 'UserMapper';//mybatis xml 파일명
          req.body.crud = 'select';//select, insert, update, delete 중에 입력
          req.body.mapper_id = 'selectSessionLoginCheck';
      
          router.use('/', dbconnect_Module);
          next('route')
          
        } catch (error) {
          console.log("Module > dbconnect error : "+ error);      
        }
      }else if(type == "pwreset"){
          // 비밀번호 재설정 시 이메일과 이름으로 회원 정보 조회
          try {
              // Mysql Api 모듈(CRUD)
              var dbconnect_Module = require('./dbconnect_Module');

              //Mysql 쿼리 호출정보 입력
              req.body.mapper = 'UserMapper';//mybatis xml 파일명
              req.body.crud = 'select';//select, insert, update, delete 중에 입력
              req.body.mapper_id = 'selectLoginResetCheck';

              router.use('/', dbconnect_Module);
              next('route')
          } catch (error) {
            console.log("Module > dbconnect error : "+ error);      
          }
      }else if(type == "emailtoken") {
        try {
            // Mysql Api 모듈(CRUD)
            var dbconnect_Module = require('./dbconnect_Module');

            //Mysql 쿼리 호출정보 입력
            req.body.mapper = 'UserMapper';//mybatis xml 파일명
            req.body.crud = 'select';//select, insert, update, delete 중에 입력
            req.body.mapper_id = 'selectEmailTokenCheck';

            router.use('/', dbconnect_Module);
            next('route')
        } catch (error) {
          console.log("Module > dbconnect error : "+ error);      
        }
      }else if(type == "pwdmodify"){
           // Mysql Api 모듈(CRUD)
           var dbconnect_Module = require('./dbconnect_Module');

           //Mysql 쿼리 호출정보 입력
           req.body.mapper = 'UserMapper';//mybatis xml 파일명
           req.body.crud = 'update';//select, insert, update, delete 중에 입력
           req.body.mapper_id = 'updatePwdUser';
           
           // 암호화
           var myPlaintextPassword = req.body.is_Password;
           if(myPlaintextPassword != '' && myPlaintextPassword != undefined ){
             bcrypt.genSalt(saltRounds, function(err, salt) {
               bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                 req.body.is_Password = hash;
                 router.use('/', dbconnect_Module);
                 next('route')
               });
             });
           }else{
             router.use('/', dbconnect_Module);
             next('route')
           }
           
         } catch (error) {
           console.log("Module > dbconnect error : "+ error);      
         }
       }
     });
     
     module.exports = router;