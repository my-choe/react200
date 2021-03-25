import React, { Component } from 'react';
import cookie from 'react-cookies';
/**
 * save 함수가 쿠키를 (key,value)쌍으로 저장하는 함수였다면,
 * load함수는 웹 브라우저에 남아있는 쿠키에 key로 접근해 value를 가져오는 함수다.
 */
class R086_cookieLoad extends Component {
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
        setTimeout(function(){
            alert(cookie.load('userid'))
        },1000);
    }

    render() {
        return(
            <><h3>react-cookies Save</h3></>
        )
    }
}

export default R086_cookieLoad;