import React, { Component } from 'react';

/**
 * promise는 콜백함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다.
 * promise를 사용하면 콜백 함수와 달리, 코드 가독성을 높일 수 있고 예외 처리도 쉽게 할 수 있다.
 * 
 * promise에는 대기, 이행, 거부의 개념이 있다.
 * 대기 상태에서 이행 상태로 변할 때 then() 함수 안의 코드가 실행된다.
 * promisef라는 객체를 생성해 promise를 사용하는데, 파라미터로 하나의 함수(resolve)만 받을 경우, 이행 함수로 사용된다.
 * promise then 함수를 사용하면 코드를 콜백 함수의 계단식 복잡한 코드 형태보다 가독성있게 구현할 수 있다.
 */

class R064_Promise extends Component {
    componentDidMount() {
        new Promise(resolve => {
            setTimeout(function() {
                resolve('react');
            }, 1500);
        })
        .then(function(result){
            console.log(result);
            return result + 200;
        })
        .then(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R064_Promise;