import React, { Component } from 'react';

/** 자바스크립트 내장 함수인 fetch를 사용해서 get 방식으로 url을 호출해 데이터를 가져온다.
 * 가져온 데이터를 response라는 변수에 할당한다.
 * 이때 fetch함수에 별도 http 메서드 설정이 없다면, get방식으로 호출한다.
 * 웹 브라우저에서 테스트 url을 호출하여 데이터를 확인한다.
 * 이 때 fetch 함수의 비동기적 틍직 때문에 line 15보다 16이 먼저 실행 돼 에러가 발생할 수 있다.
 * 
 * 이런 에러는 비동기 함수에 async와 await 문법을 추가해 해결할 수 있다.
 * 비동기 함수를 실행하는 함수에 async를 추가하고 동기적으로 처리돼야 하는 함수 구문 앞에 await를 추가한다.
 */

class R059_FetchGet extends Component {
    componentDidMount = async() => {
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        console.log(body);
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch get</h1>
        )
    }
}

export default R059_FetchGet;

