import React from 'react';
import {Consumer} from './R077_ContextApi';

/**
 * 버튼을 클릭하면, 파라미터로 전달받은 R077_ContextApi컴포넌트의 setStateFunc("react200")을 호출한다.
 * 이때 R077_ContextApi컴포넌트의 state 변수 name값을 react200으로 할당한다.
 */

class contextChildren extends React.Component {
    render () {
        return (
           <Consumer>
               {contextValue=>
                <button onClick={e => contextValue.setStateFunc("react200")}>
                    {contextValue.name}_button
                </button>
               }
           </Consumer>
        )
    }
}

export default contextChildren;