import React, { Component } from 'react';
import StrAddButton from './StrAddButton';

/** 
 * redux만 사용해도 충분히 스토어 데이터를 사용하고 변경할 수 있다.
 * react-redux는 react를 react와 연동해서 사용하기 편리하도록 만든 라이브러리다.
 * [npm install --save react-redux] 로 설치한다.
 * 
 * react-redux의 장점
 * 1. store를 하위 컴포넌트에 매번 상속하지 않고 사용할 수 있다.
 * 2. 스토어 데이터를 사용, 변경하는 코드를 모듈화 해 컴포넌트 내에 중복코드사용을 최소화할 수 있다.
 * 
 * react-redux도 redux와 마찬가지로 스토어 > 컴포넌트 > 액션 > 리듀서 > 다시 스토어 과정을 통해 데이터를 변경한다.
 * 차이점은 스토어 > 컴포넌트, 컴포넌트 > 액션 단계에서 connect라는 react-redux 패키지 함수가 사용된다는 것이다.
 * actions 폴더의 index.js와 reducer 폴더의 index.js파일은 변경 사항이 없다.
 * 
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
