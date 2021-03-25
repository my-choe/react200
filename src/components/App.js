import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';
/** 
 * <Route> 태그에 path 속성은 호출url 경로, component 속성은 연결할 컴포넌트 할당
 */
class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactRouter2' component={reactRouter2} />
      </div>
    );
  }
}

export default App;
