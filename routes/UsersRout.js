var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;
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
    }
})

module.exports = router;