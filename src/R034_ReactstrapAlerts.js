import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

/**
 *  [npm install --save reactstrap]
 *  [npm install --save bootstrap]
 *  Alert : 일반 알림
 *  UncontrolledAlert : 삭제 가능한 알림
 * reactstrap color 속성 : primary, secondary, success, danger, warning, info, light, dark 중 선택
 */
class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color="warning">
                    Uncontrolled Alert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;