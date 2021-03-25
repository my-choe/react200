import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

/**
 * App.js는 라우팅 전용 컴포넌트로 사용될 것이다.
 * App컴포넌트와 하위컴포넌트에서 Route, Link를 사용할 때마다 <BrowserRouter> 태그를 감싸 사용할 수도 있다.
 * 하지만 최상위 컴포넌트인 App컴포넌트를 <BrowserRouter> 태그안에 위치시키면,
 * 하위 모든 컴포넌트에서 라우팅 기능(Route, Link)을 사용할 수 있다.
 */


  ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ), document.getElementById('root'));

reportWebVitals();