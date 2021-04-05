import React, { Component } from 'react';

/**
 * 자바스크립트는 비동기적으로 동작하기에 먼저 실행된 작업이 끝나지 않았더라도 다음 작업이 시작될 수 있다.
 * 콜백 함수를 이용하면 특정 코드에 순서를 정해 원하는 시점에 실행할 수 있다.
 */

class R063_CallbackFunc extends Component {
    componentDidMount(){
        this.logPrint(1, function(return1){
            console.log("return1 : " + return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : " + return2);
            })
        }.bind(this))
    }

    logPrint(param, callback) {
        console.log("logPrint param : " + param);
        param += param
        callback(param);
    }

    render() {
        return (
            <h1>Callback Function</h1>
        )
    }
}

export default R063_CallbackFunc;
