import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/new.css'; // css
import HeaderAdmin from './Header/HeaderAdmin'; // header
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import SoftwareList from './SoftwareToolsManage/SoftwareList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <HeaderAdmin/>
        <Route exact path='/' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Footer/>
      </div>
    );
  }
}

export default App;
