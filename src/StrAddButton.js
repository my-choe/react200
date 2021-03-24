import React, { Component } from 'react';
import {add} from './actions';
/**
 * dispatch함수를 통해 add함수(actions 폴더의 index.js 파일)의 반환값을 스토어에 전달한다.
 * 이때 add 함수의 type 값을 리듀서(reducers 폴더의 index.js)에서 참고해 스토어 데이터를 변경한다.
 * 결론적으로 dispatch함수는 reducer에 액션을 전달하고
 * 리듀서에는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경한다.
 */
class StrAddButton extends Component {
    render() {
        return (
            <input value="Add200" type="button" onClick={this.addString}/>
        )
    }

    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddButton;