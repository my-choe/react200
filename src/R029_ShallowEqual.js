import React, { Component } from 'react';
import { shallowEqualArrays, ShallowEqualArrays } from 'shallow-equal';

// shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교한다. 객체는 PureComponent와 동일하게 참조값을 비교한다.
// 명령 프롬프트에서 설치경로로 이동 후 npm install shallow-equal 패키지 설치 후 진행
class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props);
        this.state = { StateString: 'react' }
    }

    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount(){
        const object = {react: '200'};
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', { react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : '
        + shallowEqualArrays(Array1, Array2));  // 선언한 배열 값을 비교함. 이때 object 변수는 동일 객체를 참고하는데 동일하면 ture 반환.
        console.log('shallowEqualArrays(Array2, Array3) : '
        + shallowEqualArrays(Array2, Array3)); // 서로 다른 참조값을 갖는 객체. shallowEqualArrays() 함수 비교 결과 false 반환
        this.state({ StateString : 'react'})
    }

    /**
     * shouldComponentUpdate() 함수는 변경된 props와 state 값을 파라미터로 받을 수 있고 반환 값이 true일때 render() 함수 실행 시킴.
     * line26에서 this.state로 state 값이 변경됐는데, 원래 component 클래스에서는 변경으로 인식해 render()함수를 실행시킨다.
     * sholdComponentUpdate() 함수에서 shallowEqualArrays()함수로 값만 비교하기 때문에 false를 반환하고 render()함수를 실행하지 않는다.
     * 
     * Component클래스에서도 shouldComponent(), shallowEqualArrays() 함수를 사용하면,
     * PureComponent 클래스처럼 값만 비교해 render()함수를 실행시킬 수 있다.
     */

    render(){
        console.log('render() 실행');
    }
}