import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import cookie from 'react-cookies';
import axios from "axios";
import '../css/new.css'; // css
import HeaderAdmin from './Header/HeaderAdmin'; // header
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';
import Register from './Register/Register';
import PwChangeForm from './PwChangeForm';

/**
 * App.js는 react 페이지 라우터이고, 페이지 이동으로 새로고침이 발생할 때마다 코드가 실행된다.
 * componentDidMount() 함수 실행 시 회원정보 복호화 api(/api/LoginForm?type=SessionConfirm)를 호출하는데
 * 이 때 쿠키에 있는 아이디와 회원명을 load 함수로 불러와 파라미터로 전달한다.
 * 복호화된 아이디와 쿠키에 저장돼있던 암호화된 비밀번호를 각각 변수에 할당한다.
 * 회원정보 재인증을 위해 node api(/api/LoginForm?type=SessionSignin)를 호출한다.
 * 파라미터로 아이디와 암호화된 비번을 전달한다.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid') 
      , token2 : cookie.load('username') 
    })
    .then( response => {
        this.state.userid = response.data.token1
        let password = cookie.load('userpassword')
        if(password !== undefined){
          axios.post('/api/LoginForm?type=SessionSignin', {
            is_Email: this.state.userid,
            is_Token : password
          })
          .then( response => {
            if(response.data.json[0].useremail === undefined){
              this.noPermission()
            }
          })
          .catch( error => {
            this.noPermission()
          });
        }else{
          this.noPermission()
        }
    })
    .catch( response => this.noPermission());
  }

  noPermission = (e) => {
    if(window.location.hash != 'nocookie'){
      this.remove_cookie();
      window.location.href = '/login/#nocookie';
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/register' component={Register} />
        <Route path='/PwChangeForm/:email/:token' component={PwChangeForm} />
        <Footer/>
      </div>
    );
  }
}

export default App;