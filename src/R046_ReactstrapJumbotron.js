import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
/**
 * Jumbotron은 대형 전광판을 의미한다.
 * 넓은 영역에 눈에 띄게 정보를 표시해 사용자의 관심을 불러일으킬 수 있다.
 */
class R046_ReactstrapJumbotron extends Component {
    render() {
        return (
            <>
                <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                    <h2 className="display-4">REACT 200</h2>
                    <p className="h4">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <hr className="my-2"/>
                    <p>
                        There are many variations of passages of Lorem Ipsum available.
                    </p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;