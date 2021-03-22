import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

/**
 * ListGroup: 정돈된 스타일 목록을 표시할 때 사용
 * <ListGroup>과 <ListGroupItem> 태그는 html의 <ul><li>로 변환된다.
 * Button과 링크(<a>태그)에 별도 태그를 추가하지 않고 속성 값으로 간편하게 사용할 수 있다.
 */

class R047_ReactstrapListGroup extends Component {
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">Badge
                        <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
                    <ListGroupItem tag="a" href="http://github.com/my-choe">Link</ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e => alert("button")}>button</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}

export default R047_ReactstrapListGroup;