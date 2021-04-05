import Reat, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

/**
 * Dropdown패키지는 대표 메뉴 클릭 시 하위 메뉴 리스트 표시 기능
 * 이때 대표 메뉴를 누를 때마다 하위 메뉴 리스트를 번갈아가며 표시, 미표시 해야 함.
 * 이를 위해서는 현재 하위 메뉴 리스트 상태가 표시인지 미표시인지에 대한 정보 필요
 */
class R037_ReactstrapDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false //true: 하위메뉴 표시, false: 미표시
        }
    }

    toggle = (e) => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://google.com/">
                        <DropdownItem>구글로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert버튼")}>Alert 버튼</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default R037_ReactstrapDropdown;