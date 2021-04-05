import react, { Component } from 'react';
import datatype from 'prop-types';

/**
 * ReactString이라는 props값을 필수 값으로 지정한다.
 * 하지만 상위 컴포넌트에서 ReactString이라는 변수를 전달하지 않았기 때문에 경고 메시지가 발생한다.
 * ReactString 변숫값은 비어 있기 때문에 상위 컴포넌트에서 전달받은 ReactNumber 변수값 (200)만 화면에 출력된다.
 */

class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired,
}

export default R021_PropsRequired;