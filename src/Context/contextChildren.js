import React from 'react';
import Childern2 from "./contextChildren2";

/** 부모컴포넌트의 데이터를 사용하지 않고 손자 컴포넌트 contextChildern2를 return 한다.
 * 손자 컴포넌트에서 사용할 데이터를 전달하지 않아도 된다.
 */
class contextChildren extends React.Component {
    render () {
        return (
            <Childern2 />
        )
    }
}

export default contextChildren;