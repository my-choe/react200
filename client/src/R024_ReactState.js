import React, { Component } from 'react';
/**
 * 가장 먼저 실행되는 생성자 함수 constructor 안에서 state변수의 초깃값을 정의해야 한다.
 * StateString 변수에는 props로 전달된 reactString 값을 저장하고 StateNumber 변수에는 숫자 200을 저장한다.
 * this.state.변수명 << 문법으로 state변수에 접근한다.
 */
class R024_ReactState extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render() {
        return(
            <div style={{padding:"0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}

export default R024_ReactState;