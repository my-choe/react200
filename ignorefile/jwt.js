/**
 * 로그인 정보가 정상적으로 확인됐다면, 쿠키에 회원 정보를 저장해 로그인을 유지해야 한다.
 * 이때 회원 정보가 그대로 쿠키에 저장되면 위험하기 때문에 jsonwebtoken 패키지를 사용해 암호화한다.
 * [npm install --save jsonwebtoken]
 */
let jwtObj = {};
jwtObj.secret = "react200"
module.exports = jwtObj