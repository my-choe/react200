import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';
/**
 * Form 패키지를 이용하면 <html form> 태그에 깔끔하고 정리된 스타일을 간편적용할 수 있다.
 * <Form> : 하나의 폼 단위로 사용할 영역을 묶어준다.
 * <Label> : 폼 요소를 설명하는 문자열을 추가할 수 있다.
 * input select의 bsSize는 sm대신 lg를 사용하면 큰 크기의 선택박스를 사용할 수 있다.
 * <Row>: 줄 단위로 태그들을 묶어 사용할 수 있게 해준다.
 * <Col> : <Row>태그로 묶인 영역들이 각각 어느정도 영역을 차지할 지 정해준다.
 *          md 속성으로 너비값을 정할 수 있는데 한 줄은 12개의 영역으로 나뉜다.
 *          한 <Row>에 속한 <Col>태그 md 속성의 합이 12가 되도록 해야한다.
 * <FormGroup> : 비슷한 용도의 태그들을 <div> 태그로 감싸 사용할 수 있다.
 */
class R044_ReactstrapForm extends Component {
    render() {
        return (
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                    <option>No select</option>
                    <option>Woman</option>
                    <option>Man</option>
                </Input>
                <Row form>
                    <Col md={7}>
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address"/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleMobile">mobile</Label>
                            <Input type="text" name="mobile" id="mobile"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleAge">age</Label>
                            <Input type="text" name="age" id="age"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default R044_ReactstrapForm;