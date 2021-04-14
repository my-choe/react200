import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import $ from 'jquery';
import Swal from 'sweetalert2';

import logoImg from '../../img/layout/logo.jpg';

/**
 * 로그인 성공시, 그 시점부터 쿠키 시간을 새로 60분 할당한다.
 * 쿠키 시간 재할당 코드는 모든 페이지에서 표시되는 header에 구현한다.
 */

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernm:'',
        };
    }

    componentDidMount() {
        var cookie_userid = cookie.load('userid')
        var cookie_usernm = cookie.load('usernm')
        var cookie_userpassword = cookie.load('userpassword')

        if(cookie_userid != undefined){
            const expires = new Date();
            expires.setMinutes(expires.getMinutes + 60);

            cookie.save('userid', cookie_userid, { path: "/", expires })
            cookie.save('usernm', cookie_usernm, { path: "/", expires })
            cookie.save('userpassword', cookie_userpassword, { path: "/", expires })

            $('.menulist').show();
            $('.hd_top').show();
        }else{
            $('.menulist').hide();
            $('.hd_top').hide();
        }
        this.callSessionInfoApi()
    }

    callSessionInfoApi = (type) => {
        axios.post('/api/LoginForm?type=SessionConfirm', {
            token1 : cookie.load('userid'),
            token2 : cookie.load('username')
        })
        .then( response => {
            this.setState({ usernm : response.data.token2 })
        })
        .catch( error => {
            this.sweetalert('작업중 오류가 발생했습니다.', error, 'error', '닫기');
        })
    }

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    myInfoHover () {
        $(".hd_left > li > .box1").stop().fadeIn(400);
    }
    
    myInfoLeave () {
        $(".hd_left > li > .box1").stop().fadeOut(400);
    }

    logout = async e => {
        cookie.remove('userid', { path: '/'});
        cookie.remove('username', { path: '/'});
        cookie.remove('userpassword', { path: '/'});
        window.location.href = '/login';
    }

    render () {
        return(
            <header className="gnb_box">
            <div className="hd_top">
                <div className="top_wrap ct1 af">
                <ul className="hd_left af">
                <li className="my1" onMouseEnter={this.myInfoHover} onMouseLeave={this.myInfoLeave}><b>내정보</b>
                        <div className="box0 box1">
                            <ul>
                            <li><a>내 정보 수정</a></li>
                            <li><a href="javascript:" onClick={this.logout}>로그아웃</a></li>
                            </ul>
                        </div>
                        </li>
                    <li className="my2"><b><span>0</span>알림</b>
                    </li>
                </ul>
                <div className="hd_right">
                    <p><span>'{this.state.usernm}'</span>님 반갑습니다.</p>
                </div>
                </div>
            </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/'}><img src={logoImg} height="65px" width="200px" alt=""/></Link>
                    </div>
                    <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li className="menulist">
                            <Link to={'/UserApproval'}>사용자 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminResearchProject'}>Research Projects 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminSoftwareList'}>Software Tools 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminDataSourceList'}>Data Sources 관리</Link>
                        </li>
                        {/* 드롭다운 이벤트 */}
                        <li  className="menulist"><Link to={'/floatPopulationList'}>유동인구 조회</Link>
                        <ul className="gn_2">
                            <li><Link to={'/community/notice'}>공지사항</Link></li>
                        </ul>
                        </li>
                        <li  className="menulist">
                            <Link to={'/SubCodeManage'}>Sub code 관리</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;