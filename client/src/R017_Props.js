import React, { Component } from 'react';

/**
 * props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용.
 * props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없음.
 * 데이터를 변경하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야 함.
 */

class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val;
        props_value += ' from App.js'
        return(
            <div>{props_value}</div>
        )
    }
}
export default R017_Props;