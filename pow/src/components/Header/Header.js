import React, { useState } from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
// import search from '../Img/search.png';
import Login from '../Modal/Login';

const Header = () => {
    const [loginModal, setLoginModal] = useState(false);

    const onClickLogin = () => {
        setLoginModal(true);
    }

    return(
        <>
            {loginModal && <Login></Login>}
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
                            <button onClick={onClickLogin}>LOGIN</button>
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
        </>
        
    );
}

export default Header;