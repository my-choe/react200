import React, { Component } from 'react';
import cookie from 'react-cookies';
/**
 * react-cookies 패키지 save함수는 세 가지 파라미터를 받는다. 첫번째는 쿠키의 키(userid), 두번째는 쿠키 값(react200), 세번째는 쿠키 옵션이다.
 * 쿠키 옵션 path는 쿠키값을 저장하는 서버 경로. 예를 들어, path가 /react라면 localhost:3000/ 에서는 저장된 쿠키를 확인할 수 없고
 * localhost:3000/react에서만 확인할 수 있다. path가 /라면 모든 페이지에서 쿠키에 접근할 수 있다.
 * 옵션 두번째 인자는 쿠키 유효시간이다. setMinutes로 60분을 더했기 때문에 쿠키가 저장된 이후 1시간동안 웹브라우저에 쿠키가 남아있게 된다.
 * 옵션 secure가 true이면 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장된다.
 * 옵션 httpOnly는 document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션이다.
 * 크롬 개발자 도구 > Application > Cookies > http://localhost:3000을 클릭하면 저장된 쿠키값과 만료시간을 확인할 수 있다.
 */
class R085_cookieSave extends Component {
    componentDidMount() {
        const expires = new Date(); // 현재 날짜와 시간을 불러와 변수에 할당
        expires.setMinutes(expires.getMinutes() + 60)   // getMinutes 함수를 사용해 expires 변수를 분으로 환산하고 60분을 더한 값을 setMinutes 함수로 다시 할당
        cookie.save('userid', "react200"
        ,{
            path: '/',
            expires,
            //secure: true,
            // httpOnly: true
        });
    }

    render() {
        return(
            <><h3>react-cookies Save</h3></>
        )
    }
}

export default R085_cookieSave;