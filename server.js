/** 
 * //package.json 설명
 * concurrently는 여러 개의 명령어를 동시에 실행할 수 있게 도와주는 패키지다.
 * [npm install --save concurrently]
 * 추가로 nodemon 패키지를 설치한다. 
 * nodemon은 node폴더의 소스가 수정될 때 자동으로 node 서버를 재시작 시켜준다.
 * [npm install --g nodemon]
 */

var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var swtoolRouter = require("./routes/SwtoolRout");

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/Swtool', swtoolRouter);


// node 서버 포트를 5000으로 설정하는 코드 추가
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

/**
 * cmd 하나로 react와 node 서버 동시 구동 가능.
 * yarn dev명령어를 실행하면 react와  node 서버가 구동 됨
 * /ApiPostJson 경로를 호출해 react페이지에서 node api를 정상적으로 호출한 것을 확인한다.
 * (안 되면 react200에 npm install --g yarn 설치)
 */
