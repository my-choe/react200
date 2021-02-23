import React, { Component } from 'react';
import datatype from 'prop-types';


/**
 * props 값을 하위 컴포넌트에 전달할 경우, 자료형을 object로 선언.
 * 하지만 객체 형태(객체 내부 변수들)의 자료형을 선언할 때는 shape이라는 유형 사용
 */
class R020_PropsObjVal extends Component {
    render(){
        let {
            ObjectJson
        } = this.props
        return(
            <div style={{padding:"0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number // String으로 전달했지만 number로 선언해서 콘솔 경고창 발생
    })
}

export default R020_PropsObjVal;