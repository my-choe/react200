import React from 'react';
import withHocComponent from './withHocComponent';
/**
 * 커링과 같이 함수 자체를 인자로 받거나 반환하는 함수를 '고차함수'라고 한다.
 * 이와 비슷하게 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트(HOC, Higher-Order Component)'라고 한다.
 * 하이오더 컴포넌트를 구현하면, 여러 컴포넌트에 동일하게 적용돼야 하는 공통 기능을 코드중복없이 사용할 수 있다.
 * 예를 들어, withHocComponent.js에서 line17의 console.log함수를 모든 컴포넌트에서 출력해야하는데,
 * hoc을 구현하지 않았다면 각각의 컴포넌트에서 동일 코드를 작성해야 한다.
 * 
 * 같은 폴더 경로에 있는 withHocComponent컴포넌트를 사용할 수 있도록 import 한다.
 * withHocComponent 컴포넌트를 호출하면서 R075_ReactHoc컴포넌트와 컴포넌트명을 파라미터로 넘긴다.
 * 이때 R075_ReactHoc컴포넌트는 export 되지 않기 때문에 render함수가 실행되지 않는다.
 */
class R075_ReactHoc extends React.Component {
    render() {
        console.log('2. HocComponent render');
        return (
            <h2>props.name : {this.props.name}</h2>
        )
    }
}

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')
