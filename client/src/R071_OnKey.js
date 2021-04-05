import React, { Component } from 'react';

/**
 * onKeyDown과 onKeyUp은 키를 누르고 떼는 동작 자체에 반응한다.
 * 문자, 숫자, Ctrl, Shift, Alt, F1~F12, Scroll Lock, Pause, Enter를 인식하고 한/영, Print Screen은 인식하지 못한다.
 * onKeyPress는 onKeyDown과 달리, 문자가 실제로 입력됐을 때 반응한다.
 * Ctrl, Shift, Alt, F1~F12, Scroll Lock, Pause, Enter, 한/영, Print Screen은 인식하지 못한다.
 */

class R071_OnKey extends Component {
    OnKey(event, e){
        var val = e.target.value;
        console.log('event : ' + event + ", value : " + val);
    }

    render() {
        return (
            <>
                onKeyDown : <input type="text" onKeyDown={e => this.OnKey("onKeyDown", e)}/><br/>
                onKeyPress : <input type="text" onKeyPress={e => this.OnKey("onKeyPress", e)}/><br/>
                onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp", e)}/><br/>
            </>
        )
    }
}

export default R071_OnKey;