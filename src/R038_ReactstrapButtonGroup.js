import React, { Component } from 'react';
import { Button, ButtonDropdown, ButtonGroup } from 'reactstrap';

/**
 * Button Group패키지 : 비슷한 형태와 기능을 하는 버튼들을 그룹으로 관리할 수 있게 지원함.
 * 
 */
class R038_ReactstrapButtonGroup extends Component {
    constructor(props){
        super(props);
        this.state = { number: 10 }
    }

    move = (type, e) => {
        if(type === 'Left'){
            this.setState({number: this.state.number - 1})
        }else if(type === 'Right'){
            this.setState({number: this.state.number + 1})
        }else if(type === 'Reset'){
            this.setState({number: 10})
        }
    }

    render() {
        return (
            <div style={{padding:"0px"}}>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move('Left')}>Left</Button>
                    <Button onClick={e => this.move('Reset')}>Reset</Button>
                    <Button onClick={e => this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br/>{this.state.number}
            </div>
        )
    }
}

export default R038_ReactstrapButtonGroup;