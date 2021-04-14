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
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
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