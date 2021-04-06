/** node경로의 app.js파일은 react에서 App.js와 동일한 라우팅 기능을 담당한다.
 * (라우팅이란, 네트워크 주소에 따라 목적지 경로를 체계적으로 결정하는 경로 선택 과정)
 * express 프레임워크에서 기본적으로 라우터 구조가 잡혀있기 때문에 api를 간편하게 구현할 수 있다.
 * 
 * node.js는 back-end, front-end도 구현할 수 있는 언어지만
 * front-end 언어로는 node보다 react가 강점이 많기 때문에 node 서버는 back-end api 서버로만 사용할 것이다.
 * node경로에서 불필요한 front-end관련 소스(public, views 폴더)를 삭제한다.
 * 
 * node 경로의 app.js파일명을 react의 App.js와 구분하기 위해 server.js로 수정한다.
 * server.js에서 불필요한 코드를 삭제하고 다음과 같이 수정한다.
 */

var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
