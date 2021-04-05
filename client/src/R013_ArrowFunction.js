import React, { Component } from 'react';

class R013_ArrowFunction extends Component{

    constructor(props) {
        super(props);
        this.state = {
            arrowFunc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1){
            return console.log(num1 + '. ES5 Function');
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3 + '. Function : ' + this.state.arrowFunc);
    }

    Function3() {
        var this_bind = this; 
        // 콜백함수 내부에서는 컴포넌트에 this로 접근할 수 없기 때문에
        // 접근할 수 있는 변수에 this를 백업한다.
        // 백업 변수인 this_bind를 이용해 컴포넌트의 state 변수에 접근할 수 있다.
        setTimeout(function() {
            console.log(this_bind.state.num + '. ES5 Callback Function noBind : ');
            console.log(this.state.arrowFunc); // 콜백함수 내부에서 this는 window 객체이기 때문에 this로 state변수에 접근하면 undefined 에러가 발생한다.
        }, 100);
    }

    Function4() {
        setTimeout(function() {
            console.log('4. ES5 Callback Function Bind : ' + this.state.arrowFunc);
        }.bind(this), 100);
        // 콜백함수에 함수 밖의 this를 bind해주면, this를 컴포넌트로 사용할 수 있다.
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFunc);
            // 화살표 함수에서는 this를 bind해주지 않아도 this를 컴포넌트로 사용해 state 변수에 접근할 수 있다.
        }, 100);
    }

    render() {
        return (
            <h2>[ THIS IS ArrowFunction ]</h2>
        )
    }
}

export default R013_ArrowFunction;