import React, { Component } from 'react';
/**
 * react에서 element 값을 얻거나 수정할 때 보통 javascript나 jquery를 사용한다.
 * 이때 id나 class같은 속성으로 element에 접근한다.
 * Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.
 * line 27 element에 ref속성을 추가하고 Ref변수에 inputRef를 할당해 참조하도록 한다.
 * 이때 참조에 대한 정보가 ref의 current라는 속성에 할당된다.
 */

class R073_ReactRef extends Component{
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.InputRef.current.focus();
    }

    JavascriptFocus() {
        document.getElementById('id').focus();
    }

    render(){
        return(
            <>
                <input type="text" id="id" ref={this.InputRef}/>
                <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
                <input type="button" value="Javascrupt Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default R073_ReactRef;