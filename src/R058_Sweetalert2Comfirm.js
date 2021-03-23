import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R058_Sweetalert2Comfirm extends Component {
    deleteAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showConfirmButton: true,
            confirmButtonColor: 'rgb(163 151 241)',
            cancelButtonColor: '#01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니오'
        }).then((result) => {
            if(result.value){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제 완료',
                    'success' // 아이콘 모양
                )
            }
        })
    }

    render() {
        return (
            <>
                <h2 id="deleteId">sweetalert2</h2>
                <button onClick={e => this.deleteAlert()}>삭제</button>
            </>
        )
    }
}

export default R058_Sweetalert2Comfirm;