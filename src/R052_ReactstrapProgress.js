import React, { Component } from 'react';
import { Progress } from 'reactstrap';

/**
 * Progress 패키지 : 전체 작업에 대한 현재 진행 상태 표현.
 * 진행 바 내부에 문자열을 넣거나 색상을 적용할 수도 있다.
 * componentDidMount() 함수가 실행되면서 progress()함수 호출.
 * setState() 함수가 실행될 때마다 render() 함수 실행.
 * 여러 개 진행바를 사용할 때는 <Progress multi>로 묶어준다.
 * <Progress> 태그의 속성은 진행바 형태(bar, animated, striped), 색상(color), 진행률(value)이 있다.
 */

class R052_ReactstrapProgress extends Component {
    constructor(props){
        super(props);
        this.state = { progress:0 }
    }

    componentDidMount() { this.progress() }

    progress = () => {
        if(this.state.progress !== 100){
            setTimeout(function() {
                this.setState({progress: this.state.progress + 1});
                this.progress();
            }.bind(this), 100)
        }
    }

    render() {
        return (
            <>
                <Progress style={{"height":"100%"}} color="info" value={this.state.progress}>
                    {this.state.progress}%
                </Progress><br/>
                <Progress multi style={{"height":"100%"}}>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">Wow!</Progress>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                </Progress>
            </>
        )
    }
}

export default R052_ReactstrapProgress;