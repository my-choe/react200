import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/new.css'; // css
import HeaderAdmin from './Header/HeaderAdmin'; // header
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';
import Register from './Register/Register';

/**
 * <Routh> 태그 path속성에 /:변수명 형태로 추가하면,
 * /SoftwareView/ 경로 뒤에 붙어오는 문자열을 변수에 저장할 수 있다.
 * 
 */
class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderAdmin/>
        <Route exact path='/' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/Register' component={Register} />
        <Footer/>
      </div>
    );
  }
}

export default App;
