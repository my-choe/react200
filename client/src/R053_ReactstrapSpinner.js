import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

/**
 * Spinner : 어떤 작업이 진행되고 있음을 표시하는 원 형태의 디자인을 제공한다.
 * 색상, 너비, 높이 값을 지정할 수 있다.
 * <Spinner> 태그 color 속성 : 색상 변경
 * <Spinner> 태그 type 속성 grow : 원이 중앙에서 점점 커지다가 사라지는 디자인
 * <Spinner> 태그 size 속성 : 약속된 크기로 표시 가능. 기본 크기보다 작게 표시하려면 sm 입력
 * <Spinner> 태그 style 속성 : width, height 값을 할당하면 원하는 크기로 나타낼 수 있다.
 * rem은 css 크기 단위로, 기본 크기의 몇 배 크기로 표시할 지 정할 수 있다.
 * width와 height를 같은 값으로 하지 않으면 타원형이나 비정상적 모습으로 표시될 수 있다.
 * 
 */

class R053_ReactstrapSpinner extends Component {
    render() {
        return (
            <>
                <Spinner color="secondary"/>
                <Spinner color="success"/>
                <Spinner color="primary" size="sm"/>
                <Spinner color="dark" type="grow"/>
                <Spinner color="info" type="grow"/>
                <Spinner color="dark" style={{ width: '10rem', height: '0.5rem' }}/>
                <Spinner color="secondary" style={{ width: '10rem', height: '10rem' }}/>
                <Spinner color="primary" type="grow" style={{ width: '3rem', height: '10rem' }}/>
            </>
        )
    }
}

export default R053_ReactstrapSpinner;