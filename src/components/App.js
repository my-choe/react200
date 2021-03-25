import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/new.css'; // css
import HeaderAdmin from './Header/HeaderAdmin'; // header
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';

/** 
 * 라우팅 상관 없이 항상 표시돼야 하는 header와 footer 작업
 * 상단에 header, 하단에 footer 영역이 고정으로 위치하고 중간영역에 라우팅되는 컴포넌트 표시.
 * 루트 경로(/)에서 /reactRouter2 경로로 url을 이동해도 중간에 표시되는 컴포넌트 영역만 변경됨.
 */
class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderAdmin/>
        <Route exact path='/' component={LoginForm} />
        <Footer/>
      </div>
    );
  }
}

export default App;
