import React, { Component } from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
// import search from '../Img/search.png';
import Login from '../Modal/Login';
import Modal from 'react-awesome-modal';

class Header extends Component {
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
            <s.Header>
                <s.Center>
                    <s.Area>
                        <s.PowLogo>
                            <img src={pow} alt=""></img>
                            <span>Project Once Writing</span>
                        </s.PowLogo>
                        <s.Searching>
                            <input placeholder="검색어를 입력해주세요"></input>
                        </s.Searching>
                        <s.LoginArea>
                            <button onClick={() => this.popModal()}>LOGIN</button>
                            <Modal visible={this.state.visible} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                                <Login></Login>
                            </Modal>
                        </s.LoginArea>
                    </s.Area>
                    <s.Area>
                        <s.KindCenter></s.KindCenter>
                        <s.Kind>
                            <s.Select>
                                <span>전공</span>
                                <div/>
                            </s.Select>
                            <s.Select>
                                <span>창체</span>
                                <div/>
                            </s.Select>
                            <s.Select>
                                <span>자율</span>
                                <div/>
                            </s.Select>
                        </s.Kind>
                        <s.State>
                            <span>로그인을 해주세요!</span>
                        </s.State>
                    </s.Area>
                </s.Center>
            </s.Header>
        );
    }
}

export default Header;