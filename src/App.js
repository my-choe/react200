import React from 'react';
import './App.css';
import PropsDefault from './R022_PropsDefault';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDefault ReactNumber={200}/>
    </div>
  );
}

export default App;
