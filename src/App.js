import React, { Component } from 'react';
import StrAddButton from './StrAddButton';

/** 
 * props에 스토어를 담아 하위 컴포넌트로 전달하면, 전달받은 컴포넌트에서 스토어에 접근할 수 있다.
 * 컴포넌트에서 dispatch 함수를 사용하면 스토어 데이터를 변경할 수 있다.
 * 
 * props를 통해 index.js에서 전달받은 store에 접근한다.
 * 스토어 state 데이터에서 str 변숫값을 가져온다.
 * 버튼 컴포넌트 StrAddButton에 store를 전달한다.
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span><br/>
        <StrAddButton store={this.props.store}/>
      </div>
    );
  }
}

export default App;
