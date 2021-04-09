var express = require('express');
var router = express.Router();
var upload = requrie('./fileupload');
var multer = requrie('multer');

/**
 * 문서, 이미지 같은 파일을 서버 경로에 업로드하기 위해 multer라는 패키지를 사용한다.
 * 등록 수정 node api를 호출할 때는 json 형태로 문자열 데이터를 전달했다.
 * [npm install --save multer]
 * 
 * 같은 파일을 여러 번 업로드하는 경우, 파일명이 구분되지 않기 때문에 현재 시간 정보를 파일명에 추가해 저장한다.
 * moment 패키지를 사용해 node 서버의 날짜, 시간 정보를 가져올 ㅅ ㅜ있다.
 * [npm install --save moment]
 */
router.post("/", (req, res, next) => {
    upload(req, res, function(err) {
        if(err instanceof multer.MulterError) {
            return next(err);
        }else if(err){
            return next(err);
        }
        console.log('원본 파일명 : ' + req.file.originalname)
        console.log('저장 파일명 : ' + req.file.filename)
        console.log('크기 : ' + req.file.size)
        return res.json({filename:req.file.filename});
    })
})

module.exports = router;