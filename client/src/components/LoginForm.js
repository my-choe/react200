import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mlogi3 from "../img/main/m_log_i3.png";
import mlogi2 from "../img/main/m_log_i2.png";

/** 
 * react는 <img> 태그에 require 문법을 사용해 이미지 경로를 할당해야 한다.
 */
class LoginForm extends Component {
    render () {
        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" /></span>LOGIN</h3>
                <div className="log_box">
                    <form onSubmit={this.handleSubmit}>
                    <div className="in_ty1">
                        <span><img src={mlogi3} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" onChange={this.handleChange} />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2"><img src={mlogi2} alt="" /></span>
                        <input type="password" id="pwd_val" name="password" placeholder="비밀번호" onChange={this.handleChange} />
                    </div>
                    <button className="s_bt" type="submit" onClick={this.submitClick}>로그인</button>
                    <ul className="af">
                        <li><Link to={'/register_check'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    </form>
                </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;