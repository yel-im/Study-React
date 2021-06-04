import React from 'react';
import * as s from './style';
import pow from './Img/pow.png';

const AccountDel = () => {
    return(
        <s.ModalCenter>
            <s.DelModal>
                <s.Logo>
                    <img src={pow} alt=""/>
                    <span>계정 탈퇴</span>
                </s.Logo>
                <s.PwInput>
                    <input className="ModalInput" placeholder="비밀번호를 입력해주세요"></input>
                </s.PwInput>
                <span className="accountCheck">계정을 탈퇴하시겠습니까?</span>
                <s.DelBtn>
                    <button className="agree">네</button>
                    <button className="cancel">아니요</button>
                </s.DelBtn>
            </s.DelModal>
        </s.ModalCenter>
    )
}

export default AccountDel;