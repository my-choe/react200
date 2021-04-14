var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var swtoolRouter = require("./routes/SwtoolRout");
var fileuploadRouter = require("./routes/UploadRout");
var usersRouter = require("./routes/UsersRout");
var MailRout = require("./routes/MailRout");

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/Swtool", swtoolRouter);
app.use("/api/upload", fileuploadRouter);
app.use(express.static("./uploads"));
app.use("/api/register", usersRouter);
app.use("/api/LoginForm", usersRouter);
app.use("/api/mail", MailRout);
/**
 * express.static 함수를 사용하면 정적 파일 경로(/uploads)를 설정할 수 있다.
 * 정적 파일 경로를 사용하면 파일 사용이 필요할 때 지정한 경로에서만 파일을 찾을 수 있다는 보안상의 이점이 있다.
 * 또 지정 경로(/uploads)를 제외한 짧은 url로 파일 경로를 호출할 수 있다.
 * 예를 들어,C:\react200\uploads\image 경로에 있는 react.jpg라는 이미지를 사용하기 위해
 * uploads경로를 제외한 http://localhost:500/image/react.jpg 경로를 호출하면 된다.
 */


// node 서버 포트를 5000으로 설정하는 코드 추가
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

/**
 * cmd 하나로 react와 node 서버 동시 구동 가능.
 * yarn dev명령어를 실행하면 react와  node 서버가 구동 됨
 * /ApiPostJson 경로를 호출해 react페이지에서 node api를 정상적으로 호출한 것을 확인한다.
 * (안 되면 react200에 npm install --g yarn 설치)
 */
