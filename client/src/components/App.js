import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/new.css'; // css
import HeaderAdmin from './Header/HeaderAdmin'; // header
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import ApiGetJson from './R110_ApiGetJson';

/** 
 * 서울시 유동 인구 데이터 사용하기 1 - 리스트 페이지 만들기
 */
class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderAdmin/>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/ApiGetJson' component={ApiGetJson} />
        <Footer/>
      </div>
    );
  }
}

export default App;
