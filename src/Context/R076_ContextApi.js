import React, { Component } from 'react';
import Children from "./contextChildren";

/** props를 사용하면 데이터를 부모->자식 컴포넌트롤 전송할 수 있다.
 * 그런데 만약 손자가 부모 컴포넌트의 데이터를 필요로 한다면, 자식이 중간에서 데이터를 전달해야 한다.
 * 이때 자식이 부모 데이터가 필요하지 않은 상황이라면 불필요한 코드륵 작성하게 된다.
 * 컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있다.
 * 
 * 리액트 기본 제공 함수인 createContext를 호출하고 공급자 Provider와 소비자 Consumer를 받아 사용할 수 있도록 한다.
 * 하위 컴포넌트에서 소비자를 사용할 수 있도록 export 한다.
 * 자식 컴포넌트를 <Provider> 태그로 감싸고 전달할 데이터를 value값으로 할당한다.
 */

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R076_ContextApi extends React.Component {
    render() {
        return (
            <Provider value='React200'>
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextApi;