import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
/**
 * Badge 패키지는 부모 요소에 추가로 특정 문자열이나 숫자를 표시할 때 사용된다.
 * 사용 예시로 쇼핑몰 웹 사이트의 상품 옆에 신상품(new), 히트상품(hit), 세일상품(sale)과 같은 배지를 사용할 수 있다.
 * 버튼 안에 배지를 추가해 접속자, 메시지 수와 같은 어떤 속성 수치를 나타낼 때 사용할 수 있다.
 * pill : 테두리 둥글게 적용
 */
class R035_ReactstrapBadges extends Component {
    render() {
        return (
            <div>
                <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://example.com" color="light">GoLink</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;