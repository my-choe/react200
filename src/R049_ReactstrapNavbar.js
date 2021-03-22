import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

/** Navbar 패키지는 웹 사이트의 내부 페이지들로 쉽게 이동할 수 있도록 메뉴리스트와 링크를 제공한다.
 * <NavbarBrand> : 내비게이션에서 무조건 표시되는 영역
 * <NavbarToggler> : 화면 오른쪽에 표시되는 버튼으로 클릭 시 toggle 함수 실행
 * <Collapse> : toggle 함수가 실행되면 표시 또는 미표시 되는 영역
 *              toggle 함수에서 변경되는 state 변수, colapsed 값에 따라 동작한다.
*/
class R049_ReactstrapNavbar extends Component {
    constructor(props){
        super(props);
        this.state = { collapsed: false }
    }

    toggle = () => {
        this.setState({collapsed: !this.state.collapsed})
    }

    render(){
        return (
            <>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2"/>
                <Collapse isOpen={this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">react</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://github.com/my-choe">200</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </>
        )
    }
}

export default R049_ReactstrapNavbar;