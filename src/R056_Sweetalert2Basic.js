import React, { Component } from 'react';
import Swal from 'sweetalert2';

/**
 * Sweetalert2 패키지 : 다양한 디자인과 기능의 알림 창 지원.
 * 기본 자바스크립트 alert()와 같이 사용자에게 필요한 정보를 알림창으로 표시.
 * [npm install weetalert2]를 입력하여 Sweetalert2 설치
 * 
 * line 18, 19 주석부분을 해제하고 line 20~22 주석처리한다.
 * 코드 실행 시 line7이 line6보다 먼저 실행된다.
 * 이유는 sweetalert2는 비동기적으로 동작해 Swal.fire() 함수를 실행시켜놓고 완료 여부에 상관없이 다음코드를 실행하기 때문이다.
 * 이때 alert() 함수는 동기적으로 동작하기때문에 [확인] 버튼을 누르지 않으면 다음 작업으로 넘어가지 않는다.
 * 따라서 동기적으로 사용하기 위해 함수 결괏값이 반환됐을때 .then(result =>) alert()함수를 실행한다.
 */

class R056_Sweetalert2Basic extends Component {
    componentDidMount() {
        // Swal.fire('1. SweetAlert')
        // alert('2. alert()')
        Swal.fire('1. SweetAlert').then(result => {
            alert('2. result.value : ' + result.value)
        })
    }

    render() {
        return (
            <h1>sweetalert2</h1>
        )
    }
}

export default R056_Sweetalert2Basic;