import React, { Component } from 'react';
import { throttle } from 'lodash';

/**
 * throttle도 debounce와 동일하게 시간 조건을 추가해 실행 횟수를 제한한다.
 * 차이점은 debounce가 연속된 이벤트 중 마지막 이벤트가 발생한 시점부터 특정 시간이 지났을 때 동작한다면,
 * throttle은 발생한 이벤트 수와 관계 없이 지정한 시간 단위당 최대 한 번만 동작한다는 것이다.
 * 
 * input 태그에 텍스트를 입력할 때마다 throttleFunc 함수를 호출한다.
 * throttle 함수에 1초의 실행 시간 간격을 할당한다. 
 * throttleFunc 함수는 글자가 입력될 때마다 호출되지만, throttleFunc 함수는 1초마다 0개 또는 1개의 로그를 출력한다.
 * 
 * 실제로 사용자가 입력한 텍스트가 포함된 검색어를 불러와야 할 때 line6에 검색어 데이터를 호출하는 코드가 위치해야 한다.
 * 만약 react라는 검색어를 0초(r), 0.3초(e), 0.5초(a), 1.1초(c), 2초(t)에 입력했다면,
 * throttle는 0초(r), 1초(rea), 2초(react)에 1초 단위로 데이터 호출 코드를 실행한다.
 */

class R095_reactThrottle extends Component {
    throttleFunc = throttle(() => {
        console.log("Throttle API Call");
    }, 1000);

    render() {
        return(
            <>
                <h2>검색어 입력</h2>
                <input type="text" onChange={this.throttleFunc} />
            </>
        )
    }
}

export default R095_reactThrottle;