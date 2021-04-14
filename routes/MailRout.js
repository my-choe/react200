/**
 * 메일 발송 api 호출 시 파라미터로 메일제목, 이메일(아이디), 비밀번호 전달.
 * 메일 템플릿의 [비밀번호 변경하기] 버튼 링크를 웹 사이트 주소에 이메일(아이디)과 비번 토큰을 넣은 값으로 치환한다.
 * 메일 템플릿 파일을 불러오기 위해 fs 패키지와 메일발송을 위해 nodemailer 패키지를 설치한다.
 * [npm install --save nodemailer]
 * [npm install --save fs]
 */

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var fs = require('fs')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res, next) => {
  let email = req.body.is_Email;
  let subject = req.body.is_Subject;
  var password = req.body.is_Password;
  password = password.substr(0, 20)
  
  // 메일서버정보세팅
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,   //메일발송 시 ssl을 사용해 암호화된 통신
    auth: {
      user: '@gmail.com',
      pass: ''
    }
  });

  home_url = 'http://localhost:3000'
  var toHtml = ''
  fs.readFile(__dirname+'/template/mail_template_pw.html', function (err, html) {
    toHtml = html.toString()
    toHtml = toHtml.replace('{replacetext}', home_url+'/PwChangeForm/'+ email +'/'+password)
  })

  setTimeout(function() {
    let mailOptions = {
      from: '@gmail.com',
      to: email,
      subject: subject,
      html : toHtml
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send("error");
      }
      else {
        console.log('Email sent: ' + info.response);
        res.send("succ");
      }
    });
  }.bind(this),1000
  );
});

module.exports = router;