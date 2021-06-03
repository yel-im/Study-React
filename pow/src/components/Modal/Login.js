import React, { Component } from 'react';
import * as s from './style';
import pow from './Img/pow.png';
import NewPw from './NewPw';
import Modal from 'react-awesome-modal';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    popModal = function() {
        this.setState({
            visible : true
        });
    }
    
    closeModal = function() {
        this.setState({
            visible : false
        });
    }

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
                        <s.Change onClick={() => this.popModal()}>비밀번호 변경하기
                            <Modal visible={this.state.visible} onClickAway={() => this.closeModal()}>
                                <NewPw></NewPw>
                            </Modal>
                        </s.Change>
                        <button className="LoginBtn">LOGIN</button>
                    </s.LoginBtn>
                </s.LoginModal>
            </s.ModalCenter>
        )
    }
}

export default Login;