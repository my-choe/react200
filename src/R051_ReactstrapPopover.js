import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

/** 
 * Popover패키지: html 요소 클릭 시 요소에 연결된 메시지 박스를 띄우는 기능(tooltip과 거의 동일동락)
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