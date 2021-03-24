import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

/**
 * store상속을 위해 react-redux의 Provider를 import해 사용할 수 있도록 한다.
 * <Provider> 태그로 App 컴포넌트를 감싸는 부분이 변경됐다.
 * Provider에 데이터를 넘겨주면 중간 컴포넌트에서 props값을 다시 전달해 줄 필요 없이
 * 모든 하위 컴포넌트에서 데이터를 사용할 수 있다. 컨텍스트 api에서 사용했던 Provider와 동일기능.
 * line24는 App 컴포넌트에서 사용할 변수 indexProp에 react문자열을 할당해 props로 전달한다.
 * 81~83번 실행결과는 83번에서 확인 가능하다.
 */

const store = createStore(reducers); // 스토어 생성함수 import

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