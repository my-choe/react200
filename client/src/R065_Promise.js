import React, { Component } from 'react';

/**
 * promise의 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때 catch 함수를 실행한다.
 * 대기상태의 promise에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우다.
 * 
 * promise사용 시 파라미터로 2개의 함수를 받으면 첫번째 함수(resolve)는 이행함수, 두번째 함수(reject)는 거부함수로 사용된다.
 * promise동작 중 거부 함수가 실행되면, 이행 상태가 되지 못하기 때문에 then 함수는 실행되지 않는다.
 */

 class R065_Promise extends Component {
    componentDidMount() {
        new Promise((resolve, reject) => {
            reject(Error("ERROR Info"));
        })
        .then(result => console.log("then " + result))
        .catch(result => console.log('catch : ' + result));
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R065_Promise;