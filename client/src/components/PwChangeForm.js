import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import $ from 'jquery';
import axios from "axios";

class PwChangeForm extends Component {
    constructor (props) {
    super(props);
        this.state = {
            email: props.match.params.email,
            token: props.match.params.token,
        }
    }

    componentDidMount() {
        let token = this.state.token.replace(/가/gi, "/"); 
        axios.post('/api/LoginForm?type=emailtoken', {
            is_Email : this.state.email,
            is_Token : token,
        })
        .then( response => {
            if(response.data.json[0].username == undefined){
                window.location.replace('about:blank')
            }
        })
        .catch( error => {
            this.sweetalert('유효한 접속이 아닙니다.', error, 'error', '닫기')
            setTimeout(function() {
                window.location.replace('about:blank')    
                }.bind(this),1000
            );
        });
    }

    submitClick = async (e) => {
        this.pwd_val_checker = $('#pwd_val').val();
        this.pwd_cnf_val_checker = $('#pwd_cnf_val').val();

        this.fnValidate = (e) => {
            var pattern1 = /[0-9]/;
            var pattern2 = /[a-zA-Z]/;
            var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;

            if(this.pwd_val_checker ==='') {
                $('#pwd_val').addClass('border_validate_err');
                this.sweetalert('비밀번호를 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            if(this.pwd_val_checker !='') {
                var str = this.pwd_val_checker;
                if(str.search(/\s/) != -1) {
                    $('#pwd_val').addClass('border_validate_err');
                    this.sweetalert('비밀번호 공백을 제거해 주세요.', '', 'info', '닫기')
                    return false;
                } 
                if(!pattern1.test(str) || !pattern2.test(str) || !pattern3.test(str)
                || str.length < 8 || str.length > 16) {
                    $('#pwd_val').addClass('border_validate_err');
                    this.sweetalert('8~16자 영문 대 소문자, 숫자\n 특수문자를 사용하세요.', '', 'info', '닫기')
                    return false; 
                } 
            }
            $('#pwd_val').removeClass('border_validate_err');

            if(this.pwd_cnf_val_checker ==='') {
                $('#pwd_cnf_val').addClass('border_validate_err');
                this.sweetalert('비밀번호 확인을 입력해주세요.', '', 'info', '닫기')
                return false;
            }
            if(this.pwd_val_checker != this.pwd_cnf_val_checker) {
                $('#pwd_val').addClass('border_validate_err');
                $('#pwd_cnf_val').addClass('border_validate_err');
                this.sweetalert('비밀번호가 일치하지 않습니다.', '', 'info', '닫기')
                return false;
            }
            $('#pwd_cnf_val').removeClass('border_validate_err');
            return true;
        }

        if(this.fnValidate()){
            var jsonstr = $("form[name='frm']").serialize();
            jsonstr = decodeURIComponent(jsonstr);
            var Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
            Json_form = "{\"" +Json_form.replace(/\&/g,'\",\"').replace(/=/gi,'\":"')+"\"}";
            
            try {
                const response = await fetch('/api/register?type=pwdmodify', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: Json_form,
                });
                const body = await response.text();
                if(body == "succ"){
                    this.sweetalertSucc('비밀번호 수정이 완료되었습니다.', false)
                    setTimeout(function() {
                        this.props.history.push('/');
                        }.bind(this),1500
                    );
                }else{
                    this.sweetalert('작업 중 오류가 발생하였습니다.', '', 'error', '닫기')
                }  
            } catch (error) {
                this.sweetalert('작업 중 오류가 발생하였습니다.', error, 'error', '닫기')
            }
        }
    };

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    sweetalertSucc = (title, showConfirmButton) => {
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: title,
            showConfirmButton: showConfirmButton,
            timer: 1000
        })
    }

    render () {
        return (
            <section className="main">
                <div className="m_login">
                <h3 className="pw_ls">비밀번호 재설정 <span className="compl1">완료</span></h3>
                    <form method="post" name="frm" action="">
                        <input type="hidden" id="is_Useremail" name="is_Useremail" value={this.state.email}/>
                        <div className="log_box">
                            <div className="in_ty1">
                                <span className="ic_2">
                                    <img src={require("../img/main/m_log_i2.png")} alt="" />
                                </span>
                                <input type="password" id="pwd_val"
                                name="is_Password" placeholder="새 비밀번호" />
                                </div>
                                <div className="in_ty1">
                                <span className="ic_2">
                                    <img src={require("../img/main/m_log_i2.png")} alt="" />
                                </span>
                                <input type="password" id="pwd_cnf_val"
                                name="is_Password" placeholder="새 비밀번호 확인" />
                                </div>
                                <div className="btn_confirm btn_confirm_m">
                                <Link to={'/'}>
                                    <div className="bt_ty bt_ty_m bt_ty1 cancel_ty1">취소</div>
                                </Link>
                                <a href="#n" className="bt_ty bt_ty_m bt_ty2 submit_ty1" 
                                onClick={(e) => this.submitClick(e)}>재설정</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default PwChangeForm;