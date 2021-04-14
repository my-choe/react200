import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import Swal from 'sweetalert2';
import $ from 'jquery';
import mlogi1 from "../img/main/m_log_i1.png";
import mlogi2 from "../img/main/m_log_i2.png";
import mlogi3 from "../img/main/m_log_i3.png";
import log_img from "../img/main/log_img.png";

/** 
 * react는 <img> 태그에 require 문법을 사용해 이미지 경로를 할당해야 한다.
 */
class LoginForm extends Component {
    submitClick = (e) => {
        this.email_val = $('#email_val').val();
        this.pwd_val = $('#pwd_val').val();
        if(this.email_val === '' || this.pwd_val === ''){
            this.sweetalert('이메일과 비밀번호를 확인해주세요.', '', 'info', '닫기')
        }else{
            axios.post('/api/LoginForm?type=signin', {
                is_Email: this.email_val,
                is_Password: this.pwd_val
            })
            .then( response => {
                var userid = response.data.json[0].useremail
                var username = response.data.json[0].username
                var upw = response.data.json[0].userpassword
                
                if(userid != null && userid != ''){
                    this.sweetalert('로그인 되었습니다.', '', 'info', '닫기')
                    const expires = new Date()
                    expires.setMinutes(expires.getMinutes() + 60)
                    
                    axios.post('/api/LoginForm?type=SessionState', {
                        is_Email: userid,
                        is_UserName: username,
                    })
                    .then( response => {
                        cookie.save('userid', response.data.token1
                        , { path: '/', expires })
                        cookie.save('username', response.data.token2
                        , { path: '/', expires })
                        cookie.save('userpassword', upw
                        , { path: '/', expires })
                    })  
                    .catch( error => {
                        this.sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기');
                    });
                    
                    setTimeout(function() {
                        window.location.href = '/SoftwareList';
                    }.bind(this),1000);
                }else{
                    this.sweetalert('이메일과 비밀번호를 확인해주세요.', '', 'info', '닫기')
                }
            })
            .catch( error => {this.sweetalert('이메일과 비밀번호를 확인해주세요.', '', 'info', '닫기')} );
        }
    }

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    pwdResetClick = () => {
        $('.signin').hide();
        $('.chgpw').fadeIn();
        $('.chgpw').css('display','table-cell');
    }

    pwdResetCancleClick = () => {
        $('.chgpw').hide();
        $('.signin').fadeIn();
        $('.signin').css('display','table-cell');
    }

    pwdResetConfim = (e) => {
        this.reset_email = $('#reset_email_val').val();
        this.reset_name = $('#reset_name_val').val();
        if(this.reset_email === '' || this.reset_name === ''){
            this.sweetalert('이메일과 성명을 확인해주세요.', '', 'info', '닫기')
        }else{
            axios.post('/api/LoginForm?type=pwreset', {
                is_Email: this.reset_email,
                is_Name: this.reset_name,
            })
            .then( response => {
                var userpassword = response.data.json[0].userpassword
                userpassword = userpassword.replace(/\//gi,"가")
                // 문자열에 슬래시가 있을 경우 웹사이트 경로 구분자로 인식돼 인증 불가
                // 따라서 암호화 결과 나올 수 없는 텍스트인 한글 가로 치환하고 이후 토큰 비교시 다시 슬래시로 치환해 사용
                if(userpassword != null && userpassword != ''){
                    this.sendEmail(this.reset_email, 'react200 비밀번호 재설정 메일', userpassword)
                }else{
                    this.sweetalert('이메일과 성명을 확인해주세요.', '', 'info', '닫기')
                }
            })
            .catch( error => {
                this.sweetalert('이메일과 성명을 확인해주세요.', '', 'info', '닫기')
            });
        }
    }

    sendEmail = (email, subject, password, e) => {
        axios.post('/api/mail', {
            is_Email : email,
            is_Subject : subject,
            is_Password: password
        })
        .then( response => {
            if(response.data == "succ"){
                this.sweetalert('입력하신 이메일로 비밀번호 \n'
                + '재설정 메일을 발송하였습니다.', '', 'info', '닫기')
            }else{
                this.sweetalert('작업중 오류가 발생하였습니다.', '', 'error', '닫기');
            }
        })
        .catch( error => {
            this.sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기');
        });
    }

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    render () {
        return (
            <section className="main">
                <div className="m_login signin">
                <h3><span><img src={log_img} alt="" /></span>LOGIN</h3>
                <div className="log_box">
                    <div className="in_ty1">
                        <span><img src={mlogi3} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" onChange={this.handleChange} />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2"><img src={mlogi2} alt="" /></span>
                        <input type="password" id="pwd_val" name="password" placeholder="비밀번호" onChange={this.handleChange} />
                    </div>
                    <button className="s_bt" type="" onClick={(e) => this.submitClick(e)}>로그인</button>
                    <ul className="af">
                        <li><Link to={'/register'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                </div>
                </div>
                <div className="m_login m_pw chgpw">
                <h3 className="pw_ls">비밀번호 재설정 <span className="compl1">완료</span></h3>
                <div className="log_box">
                    <div className="pw_one">
                        <div className="in_ty1">
                        <span><img src={mlogi3} alt="" /></span>
                        <input type="text" id="reset_email_val" name="" placeholder="이메일"/>
                        </div>
                        <div  className="in_ty1">
                        <span className=""><img src={mlogi1} alt="" /></span>
                        <input type="text" id="reset_name_val" name="" placeholder="성명"/>
                        </div>
                        <div className="btn_confirm btn_confirm_m">
                        <div className="bt_ty bt_ty_m bt_ty1 cancel_ty1" 
                        onClick={this.pwdResetCancleClick}>취소</div>
                        <a href="#n" className="bt_ty bt_ty_m bt_ty2 submit_ty1" 
                        onClick={this.pwdResetConfim}>확인</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;