import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

/**Collapse 패키지는 특정 영역을 펼치고 숨기는 기능을 제공한다.
 * 버튼 이벤트로 펼치고 숨기는 기능을 제어할 수 있다.
 * 상단부터 점차적으로 펼쳐지고 하단부터 숨겨진다는 것이 show(), hide() 함수와의 차이점이다.
 * UncontrolledCollapse는 태그나 함수를 생략해도 기본 기능을 제공해준다.
 * 따라서 기본 기능만 사용할 것이라면 ,Collapse보다 UncontrolledCollapse를 사용하는 것이 간편하다.
 */

class R042_ReactstrapCollapse extends Component {
    render() {
        return (
            <div>
                <Button color="warning" id="toggle">펼치기/접기</Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_ReactstrapCollapse;