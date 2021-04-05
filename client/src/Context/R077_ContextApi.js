import React, { Component } from 'react';
import Children from "./contextChildren"
/** 
 * Props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동할 수 있다.
 * 컨텍스트를 사용하면 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있다.
 * 
 * state변수 name에 파라미터 value를 할당하는 함수를 선언한다.
 * content변수에 R077_ContextApi 컴포넌트의 state와 setStateFunc함수를 할당한다.
 */

const { Provider, Consumer } = React.createContext()
export {Consumer}

class R077_ContextApi extends Component {
    constructor (props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value){
        this.setState({name:value});
    }

    render() {
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        }
        return(
            <Provider value={content}>
                <Children />
            </Provider>
        )
    }
}

export default R077_ContextApi;