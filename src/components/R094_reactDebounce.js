import React, { Component } from 'react';
import { debounce } from 'lodash';

/**
 * debounce는 연속된 이벤트 호출이 일어나는 상황에 사용한다.
 * 마지막 이벤트가 실행되고 일정시간동안 추가 이벤트가 발생하지 않을 때 실행되는 함수다.
 * debounce는 꼭 필요한 시점에만 함수를 실행해 서버 자원을 효율적으로 사용할 수 있게 해준다.
 * [npm install --save lodash]
 * 
 * input 태그에 텍스트를 입력할 때마다 debounce 함수를 호출한다.
 * debounceFunc 함수에 1초의 지연 시간을 할당한다.
 * debounceFunc 함수는 글자가 입력될 때마다 호출되지만, debounce함수는 마지막 호출이 끝나고 1초 후에 콘솔 로그를 출력한다.
 * 
 * 실제로 사용자가 입력한 텍스트가 포함된 검색어를 불러와야 할 때 line 22에 검색어 데이터를 호출하는 코드가 위치해야 한다.
 * 이때 디바운스를 사용하지 않고 react라는 글자를 입력한다면 r, re, rea, reac, react가 입력되는 시점에 모두 데이터를 호출해야 한다.
 * 디바운스를 사용하면 react라는 글자가 모두 작성되고 지연 시간 1초가 지난 후 데이터를 한 번만 호출한다.
 */
class R094_reactDebounce extends Component {
    debounceFunc = debounce(() => {
        console.log("Debounce API Call");
    }, 1000);

    render() {
        return(
            <>
                <h2>검색어 입력</h2>
                <input type="text" onChange={this.debounceFunc} />
            </>
        )
    }
}

export default R094_reactDebounce;