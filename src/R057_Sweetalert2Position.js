import React, { Component } from 'react';
import Swal from 'sweetalert2';

/** sweetalert2 패키지는 알림창의 표시 방식과 구성 요소들을 원하는 형태로 변경할 수 있는 옵션 제공.
 * 옵션 중 position은 알림창의 표시 위치를 결정한다.
 */

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, positionflag, e) => {
        Swal.fire({
            position: positionflag,
            icon: 'success',
            title: flag + ' 됐습니다.',
            showConfirmButton: false,
            timer: 1500
        })
    }

    render() {
        return (
            <>
                <h2>sweetalert2</h2>
                <button onClick={e => this.saveAlert('저장', 'center')}>저장</button>
                <button onClick={e => this.saveAlert('수정', 'bottom-end')}>수정</button>
            </>
        )
    }
}

export default R057_Sweetalert2Position;