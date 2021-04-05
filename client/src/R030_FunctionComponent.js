import React from 'react';

/**
 * 함수형 컴포넌트는 클래스형 컴포넌트와 달리, state가 없고 생명주기 함수를 사용할 수 없다.
 * 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하고 render()함수가 없으므로 return만 사용해 화면을 그려준다.
 */
function R030_FunctionComponent(props){
    let { contents } = props;
    return (
        <h2>{contents}</h2>
    )
}

/**
 * 함수형 컴포넌트는 return 값이 있는 function과 동일한 구조를 갖는다.
 * 상위 컴포넌트에서 전달받은 props를 지역 변수에 할당한다.
 * 클래스형 컴포넌트와 달리, props 앞에 this가 붙지 않는다.
 * line8에서 할당받은 변수 contents 값을 화면에 표시한다.
 */

export default R030_FunctionComponent;