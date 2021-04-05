import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

/** 
 * Popover패키지: html 요소 클릭 시 요소에 연결된 메시지 박스를 띄우는 기능(tooltip과 거의 동일 동작)
 * <Button> 태그 id값을 <UncontrolledPopover> 태그의 target 속성 값과 동일하게 주면,
 * 버튼 클릭 시 <Uncontrolled>태그 영역이 나타난다.
 * 버튼을 누를 때마다 <UncontrolledPopover> 태그 영역 표시 상태가 반대로 바뀐다.
 * placement는 요소 기준 메시지 박스가 표시되는 위치 속성. (top, bottom, left, right 사용 가능)
 * <UncontrolledPopover>태그 안에서 <PopoverHeader> 태그로 헤더 영역에 제목 입력, <PopoverBody>태그에는 메시지 내용 표시
 */

class R051_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button id="Popover_id" type="button">Popover Button</Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React 200</PopoverHeader>
                    <PopoverBody>
                        Aenean id magna id risus congue ornare.
                        Vestibulum sed diam et mi pulvinar facilisis sed eu risus.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;