import React, { Component } from 'react';
import {connect} from 'react-redux';
import StrAddButton from './StrAddButton';

/** 
 * react-redux 패키지의 connect 함수는 파라미터를 4개까지 받을 수 있는데,
 * 파라미터 위치에 따라 미리 정의된 함수나 object를 사용할 수 있다.
 * 예제에서는 2개 파라미터를 사용한다.
 * 첫번째 파라미터(mapStateToProps)는 스토어의 상태값을 컴포넌트 props에 할당하는 함수이고,
 * 두번째 파라미터(mapDispatchToProps)는 dispatch함수를 컴포넌트 함수에 바인딩하는 함수다.
 * 
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        {/* <span>{this.props.store.getState().data.str}</span><br/>
        <StrAddButton store={this.props.store}/> */}
        <span>{this.props.str}</span><br/>
        <StrAddButton AppProp="200"/>
      </div>
    );
  }
}

// mapStateToProps 함수는 첫 번째 파라미터로 스토어의 state 변수를,
// 두번째 파라미터로 부모 컴포넌트에서 전달한 props변수를 받는다.
let mapStateToProps = (state, props) => {
  console.log('Props from index.js : ' + props.indexProp)
  return {
    str: state.data.str,
  };
};

// 첫번째 파라미터는 mapStateToProps함수로 스토어의 state값에 접근할 수 있다.
App = connect(mapStateToProps, null)(App);

export default App;
