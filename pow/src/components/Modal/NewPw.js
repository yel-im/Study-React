import React, { Component } from 'react';
import * as s from './style';
import pow from './Img/pow.png';

class NewPw extends Component {
    render() {
        return(
            <s.ModalCenter>
                <s.PwModal>
                    <s.Logo>
                        <img src={pow} alt=""></img>
                    </s.Logo>
                    <s.PwSpan>
                        <span>로그인으로 돌아가기</span><br/>
                        <span>비밀번호 변경</span>
                    </s.PwSpan>
                    <s.PwInput>
                        <input className="ModalInput" placeholder="현재 비밀번호를 입력해주세요"></input>
                    </s.PwInput>
                    <s.NewPwInput>
                        <input className="ModalInput" placeholder="변경할 비밀번호를 입력해주세요"></input>
                        <input className="ModalInput" placeholder="비밀번호 확인"></input>
                    </s.NewPwInput>
                    <s.EnterBtn>
                        <button className="LoginBtn" >ENTER</button>
                    </s.EnterBtn>
                </s.PwModal>
            </s.ModalCenter>
        )
    }
}

export default NewPw;