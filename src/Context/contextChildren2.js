import React from 'react';
import {Consumer} from "./R076_ContextApi";

/** 
 * 부모 컴포넌트의 데이터를 사용하기 위해 R076_ContextApi에서 export 했던 Consumer를 import해 사용한다.
 * <Consumer> 태그로 출력할 element를 감싸고 R076_ContextApi컴포넌트에서 value에 할당했던 데이터를 contextValue로 받아 출력한다.
 * 컨텍스트를 사용하면 하위컴포넌트가 여러 개인 구조에서 유용하게 사용할 수 있다.
 * 몇 번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다.
 */
class contextChildren2 extends React.Component {
    render() {
        return (
            <Consumer>
                {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
            </Consumer>
        )
    }
}

export default contextChildren2;