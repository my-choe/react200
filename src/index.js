import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

/**
 * redux 미들웨어는 액션을 dispatch함수로 전달하고 리듀서가 실행되기 전과 실행된 후에 처리되는 기능을 말한다.
 * redux 패키지에서 지원하는 applyMiddleware 함수를 사용하면 미들웨어를 간단하게 구현할 수 있다.
 * 81~83번 에제에 사용한 코드에서 src > index.js 파일만 수정해 미들웨어 동작을 확인한다.
 */

/** applyMiddleware 함수에 전달될 함수는 다중 컬링 구조로, 세가지 인자를 순서대로 받는다.
 * 첫번째 인자 : 스토어
 * 두번째 인자 : 다음 미들웨어를 호출하는 함수(예제에서는 미들웨어가 1개이기 때문에 리듀서 호출)
 * 세번째 인자 : 액션
 */
const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer 실행 전');
  console.log('2. action.type : ' + action.type + ', store str : ' + store.getState().data.str);
  
  // 다음에 실행할 미들웨어가 없으므로 리듀서를 실행한다.
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : ' + action.type + ', store str : ' + store.getState().data.str);
  return result;
}

// applyMiddleware 함수 전달. 파라미터는 새로 정의해 사용할 미들웨어 함수명을 넣는다.
const store = createStore(reducers, applyMiddleware(CallMiddleware)); // 스토어 생성함수 import

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp="react"/>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();

reportWebVitals();