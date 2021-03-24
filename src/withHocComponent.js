import React from 'react';
/**
 * R075_ReactHoc 컴포넌트가 export하면서 전달한 파라미터를 받는다.
 * 전달받은 InComponent 변수는 R075_ReactHoc 컴포넌트 자체다.
 * R075_ReactHoc 컴포넌트를 return 하면서 props값을 전달하는데,
 * props에는 App.js에서 전달한 name 변수가 있다.
 * 컴포넌트가 return 되면 R075_ReactHoc 컴포넌트의 render 함수가 실행되며,
 * 로그를 출력하고 props 데이터에 있는 name 변수를 화면에 그려준다.
 * render함수가 실행된 후 파라미터로 전달받은 컴포넌트명 InComponentName 변수를 로그로 출력한다.
 */
export default function withHocComponent(InComponent, InComponentName){
    return class OutComponent extends React.Component {
        componentDidMount() {
            console.log(`3. InComponentName : ${InComponentName}`);
        }
        render() {
            console.log("1. InComponent render")
            return (<InComponent {...this.props}/>)
        }
    }
}