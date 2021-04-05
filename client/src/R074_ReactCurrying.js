import React, { Component } from 'react';
/**
 * 커링(Currying) : 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수.
 * 함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야 한다.
 * 컬링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다.
 * PlusFunc2는 화살표 함수로 간단하게 표현한 것이며 PlusFunc1과 완전 동일함수이다.
 */

class R074_ReactCurrying extends Component {

    plusNumOrString(c, d){
        return c + d;
    }

    PlusFunc1(a){
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a, b)

    PlusFunc(a){
        return this.PlusFunc1(a)(200)
    }

    render() {
        return (
            <>
                <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>   
                <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))}/>   
            </>
        )
    }
}

export default R074_ReactCurrying;