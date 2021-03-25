import React from 'react';
import CookieRemove from '../R087_cookieRemove';

/** 
 * 라우팅(Routing)이란?
 * 호출되는 url에 따라 페이지(view) 이동을 설정하는 것. react에서 view는 component를 사용한다.
 * react에서 라우팅을 지원하는 패키지는 여러 개 있지만, 웹 개발을 위한 패키지로 적합한 react-router-dom을 설치한다.
 * [npm install --save react-router-dom]
 * 
 * react-router-dom 패키지는 BrowserRouter, Route, Link의 기능을 제공한다.
 * Route : 호출 url에 따라 이동할 component 정의
 * Link : <a>태그와 같이 페이지에 표시되는 링크를 클릭하면 url 호출
 * Route와 Link를 사용하기 위해서는 <BrowserRouter> 태그로 감싸 사용해야 한다.
 * 
 * 이후 예제에서 component들을 폴더 단위로 묶어서 관리하기 위해
 * component 폴더 생성 후 App.js를 이동시켰다.
 */
function App() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <CookieRemove/>
      </div>
    );
}

export default App;
