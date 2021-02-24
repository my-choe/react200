import React, { Component } from 'react';
/**
 * this.state.변수명=value << 처럼 state를 직접 변경하면 render()함수를 호출하지 않는다.
 * 이때 forceUpdate() 함수로 새로 고침하면, render() 함수를  호출해 변경된 값을 화면에 보여줄 수 있다.
 */

 class R026_ForceUpdate extends Component {
     constructor(props){
         super(props);
         this.state = {
             stateString: 'react',
         }
     }

     StateChange = () => {
         this.state.stateString = '리액트';
         this.forceUpdate();
     }

     render() {
         return(
             <div style={{padding: "0px"}}>
                 <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경하기</button><br/>
                 [state 변경하기] StateString : {this.state.stateString}
             </div>
         )
     }
 }
 export default R026_ForceUpdate;