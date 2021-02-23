import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
    // props 변수를 선언한 후 값을 할당하지 않고 넘기면 true가 기본값으로 할당된다.
    render() {
        let {
            BooleanTrueFalse
        } = this.props
        return(
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? "2. " : "1. "}
                {BooleanTrueFalse.toString()}
            </div>
        )
        // Boolean 변수는 직접 화면 출력할 수 없으므로 toString()함수를 사용해 문자열 변환
    }
}

export default R019_PropsBoolean;