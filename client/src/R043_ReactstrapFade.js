import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

/**Fade 패키지 : 특정 영역을 서서히 나타내고 숨기는 기능. 버튼 이벤트로 제어할 수 있음
 * 
 */
class R043_ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeInOut: true }
    }

    toggle = (e) => {
        this.setState = ({ fadeInOut: !this.state.fadeInOut })
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Fade>
            </div>
        )
    }
}

export default R043_ReactstrapFade;