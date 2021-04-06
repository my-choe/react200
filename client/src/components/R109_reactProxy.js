import React, { Component } from 'react';

/**
 * 프록시란, 클라이언트가 다른 서버에 간접적으로 접속할 수 있도록 중계해주는 프로그램
 * 예를 들면, 웹 브라우저(클라이언트)에 react 서버(localhost:3000)을 띄우고
 * react페이지에서 node api를 호출해 데이터를 표시할 수 있다.
 * 이때 프록시를 설정하면 node 서버 url을 localhost:5000/users 가 아닌 /users로 간략하게 사용할 수 있다.
 * 프롤시를 보통 보안, 캐시 목적으로 사용하는데, 예제에서는 node 서버 호출 url을 간략히 사용하기 위한 용도로 사용한다.
 */
class R109_reactProxy extends Component {
    componentDidMount = async() => {
        // 프록시 설정을 해줬기 때문에 node 서버 api 주소를 localhost:5000/users가 아닌 /users로 사용할 수 있다
        const response = await fetch('/users');
        // response 변수값을 확인하기 위해 .test함수로 문자열로 변환해 로그 출력
        // node 서버와 react서버 둘다 구동 후 확인
        const body = await response.text();
        console.log("body : " + body);
    }

    render() {
        return (
            <>
            <h1>Proxy Call Node Api</h1>
            </>
        )
    }
}

export default R109_reactProxy;