import React, { Component } from 'react';

class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다\n다음줄 입니다.'
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'ES6'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열${Es6String2}!!
____ 다음줄 입니다`);
        
        var LongString = 'ES6에 추가된 String 함수들입니다.';
        console.log('startsWith : ' + LongString.startsWith("ES6에 추가"));
        console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes : ' + LongString.includes("추가된 String"));
        // startsWith는 변수 앞에서부터, endsWith는 뒤에서부터 일치하는 문자열이 있는지 찾는다.
        // includes는 위치에 상관없이 변수에 특정 문자열이 포함돼 있는지 판단한다.
        // 함수 조건에 부합하면 true, 부합하지 않으면 false 반환
    }

    render() {
        return(
            <h2>[ THIS IS ES6 STRING ]</h2>
        )
    }
}

export default R009_Es6;