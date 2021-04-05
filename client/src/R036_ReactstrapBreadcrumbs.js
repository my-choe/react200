import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

/** Breadcurmbs 패키지는 페이지 위치 경로를 지정한 웹 내비게이션에 사용.
 * 보통 우베 사이트 상단에 표시되는 메뉴 리스트에 사용하며
 * 특정 메뉴를 선택하면 해당 페이지 위치로 이동시킨다.
 * 
 * <nav>, <div> 태그를 생성한다. bootstrap 코드로는 함축적으로 표현돼 있지만,
 * 개발자 도구에서 elements를 확인해보면 html의 <nav><div>태그가 생성된 것을 확인 할 수 있다.
 */
class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop:"1000px"}}>
                    <span>bottom</span>
                </div>
            </div>
        )
    }
}

export default R036_ReactstrapBreadcrumbs;