import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/** Modal은 alert()함수와 달리, 웹 브라우저에서 팝업 창을 차단할 수 없고
 * 배경 페이지와 어울리는 디자인을 적용할 수 있다.
 */
class R048_ReactstrapModal extends Component {
    constructor(props){
        super(props);
        this.state = { modal: false }
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <>
            <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
            <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
                <ModalBody>
                    The generated Lorem Ipsum is therefor always free from repetition.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>확인</Button>
                    <Button color="secondary" onClick={this.toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default R048_ReactstrapModal;