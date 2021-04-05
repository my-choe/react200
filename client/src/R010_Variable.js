import React, { Component } from 'react';

class R010_Variable extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);

        var varName = '200'; 
        console.log('varName2 : ' + varName);
        // 'varName' is already defined no-redeclare
        // 이미 선언한 var 변수 varName을 다시 선언했을 때 경고 메시지가 콘솔 로그에 출력되지만
        // var변수는 재선언, 재할당을 허용하기 때문에 경고 메시지가 출력돼도 페이지가 정상적으로 표시

        let letName = 'react';
        console.log('letName1 : ' + letName);
        // letName = '200'
        // Parsing error : Identifier 'letName' has already been declared
        // let변수는 재선언을 허용하지 않기 때문에 에러 페이지 표시
        // let변수는 재할당 허용

        letName = 'react200';
        console.log('letName2 : ' + letName);

        const constName = 'react';
        console.log('constName : ' + constName);
        // const constName = '200'
        // Parsing error : Identifier 'constName' has already been declared
        // constName = 'react200'
        // Uncaught TypeError: Assignment to constant variable.
        // const 변수는 재할당, 재선언을 허용하지 않기 때문에 에러페이지 표시
    }

    render() {
        return(
            <h2>[ THIS IS Variable ]</h2>
        )
    }
}

export default R010_Variable;