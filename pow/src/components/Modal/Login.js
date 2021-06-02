import React, { Component } from 'react';
import * as s from './style';
import pow from './Img/pow.png';

class Login extends Component {
    render() {
        return(
            <s.ModalCenter>
                <s.LoginModal>
                    <s.Etc>...</s.Etc>
                    <s.Logo>
                        <img src={pow} alt=""/>
                        <span>로그인하기</span>
                    </s.Logo>
                    <s.LoginInput>
                        <input className="ModalInput" placeholder="코드를 입력해주세요"/>
                        <input className="ModalInput" placeholder="비밀번호를 입력해주세요"/>
                    </s.LoginInput>
                    <s.LoginBtn>
                        <s.Change>비밀번호 변경하기</s.Change>
                        <button className="LoginBtn">LOGIN</button>
                    </s.LoginBtn>
                </s.LoginModal>
            </s.ModalCenter>
        )
    }
}

export default Login;