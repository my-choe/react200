import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
/**
 * Tab패키지 : 사용자 동작에 따라 특정 영역에 다른 내용을 표시할 때 사용.
 * 클릭 이벤트에 따라 원하는 영역을 표시해야 할 경우, 간편하게 사용할 수 있다.
 * 
 * 네비게이션 메뉴클릭 시 toggle 함수 호출하는데, 파라미터로 표시할 tab 영역의 tabid값을 넘긴다.
 * 파라미터로 넘어온 값(tabnum)이 현재 tabid의 상태(Tabstate)값과 다르다면, 변경된 값으로 상태(Tabstate)값을 수정한다.
 * 변경된 상태값을 <TabContent> 태그의 activeTab 속성에 할당한다. 
 * 이때 할당된 값과 <TabPane> 태그의 tabid값을 비교해 일치하는 <TabPane> 태그 영역을 표시한다.
 */

class R055_ReactstrapTab extends Component {
    constructor(props){
        super(props);
        this.state = { TabState:'React'}
    }

    toggle = (tabnum) => {
        if(this.state.TabState !== tabnum)
            this.setState({TabState:tabnum});
    }

    render() {
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('React');} }>First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('200');} }>Second Tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="200"><h3>200</h3></TabPane>
                </TabContent>
            </>
        )
    }
}

export default R055_ReactstrapTab;

