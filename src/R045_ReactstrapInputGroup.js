import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

/** Input Group 패키지 : 여러 개의 태그를 하나의 input 그룹으로 묶어 사용할 수 있도록 지원한다.
 * <InputGroup> 태그로 <input> 태그와 고정 텍스트 표시 영역(@reactmail.com)을 묶어 사용한다.
 * <InputGroupAddon> 태그의 addonType 속성값 append는 <input> 태그 오른쪽, prepend는 왼쪽에 표시하기 적합한 스타일이 적용된다.
*/
class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
            <InputGroup>
                <Input placeholder="userid"/>
                <InputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button>버튼</Button>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;