import React, { Component } from 'react';
import datatype from 'prop-types';

/**
 * 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면,
 * 부모 컴포넌트에서 넘어오는 props변수들의 자료형과 비교한다.
 * 이때 자료형이 일치하지 않는다면, 경고메시지로 알려주기 때문에 잘못된 데이터를 확인할 수 있다.
 */

 class R018_PropsDatatype extends Component {
     render(){
         // 지역변수 선언
         let {
             String, Number, Boolean, Array, ObjectJson, Function
         } = this.props;
         return(
             <div style={{padding: "0px"}}>
                 <p>StringProps: {String}</p>
                 <p>NumberProps: {Number}</p>
                 <span>BooleanProps: {Boolean.toString()}</span>
                 <p>ArrayProps: {Array.toString()}</p>
                 <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                 <p>FunctionProps: {Function}</p>
             </div>
         )
     }
 }

 // props 값들 각각에 적합한 자료형을 선언한다.
 // 자료형 선언을 위해 리액트 기본 내장 패키지인 prop-types를 임포트해 사용했다.
 // protoTypes가 데이터 유효성 검증을 하고 콘솔에 경고 메시지를 출력한다.
 R018_PropsDatatype.protoTypes = {
     String: datatype.number, // 콘솔 경고메시지가 발생하도록 설정.
     Number: datatype.number,
     Boolean: datatype.bool,
     Array: datatype.array,
     ObjectJson: datatype.object,
     Function: datatype.func,
 }

 export default R018_PropsDatatype;