import React, { useState, useEffect } from 'react';

/**
 * useState() 함수로 state변숫값을 선언 및 할당한다.
 * 이때 두 가지 인자가 선언된 배열이 반환된다.
 * 첫 번째 인자 contents : state 변수명
 * 두 번째 인자 setContents : state 변숫값을 변경해주는 함수
 * 
 * useEffect() 함수는 생명주기 함수 componentDidMount()와 같이
 * return되는 html코드들이 화면에 그려진 이후에 실행된다.
 * 최초 페이지가 로딩될 때 한 번 실행되고 setContents() 함수로 state값이 변경되면 한 번 더 실행된다.
 * 버튼을 클릭하면 line 16에서 선언한 setContents() 함수로 contents값을 수정한다.
 * 이때 state 값이 변경되면 화면을 다시 그려주는데, 'THIS IS REACT'라는 글자가 'THIS IS HOOK'로 변경되는 것 확인 가능.
 */
function R031_ReactHook(props){
    const [contents, setContents] = useState('[THIS IS REACT]');

    useEffect(() => {
       console.log('useEffect'); 
    });

    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() =>setContents('[THIS IS HOOK]')}> 버튼</button>
        </div>
    )
}

export default R031_ReactHook;