import React from 'react';
import * as s from './style';
import pow from '../Img/pow.png';
import search from '../Img/search.png';

const Header = () => {
    return(
        <s.header>
            <s.center>
                <s.area>
                    <s.powLogo>
                        <img src={pow}></img>
                        <span>Project Once Writing</span>
                    </s.powLogo>
                    <s.searching>
                        <input placeholder="검색어를 입력해주세요"></input>
                    </s.searching>
                    <s.login>
                        <input type="button" value="Login"></input>
                    </s.login>
                </s.area>
                <s.area>
                    <s.kindCenter></s.kindCenter>
                    <s.kind>
                        <s.select>
                            <span>전공</span>
                            <div/>
                        </s.select>
                        <s.select>
                            <span>창체</span>
                            <div/>
                        </s.select>
                        <s.select>
                            <span>자율</span>
                            <div/>
                        </s.select>
                    </s.kind>
                    <s.state>
                        <span>로그인을 해주세요!</span>
                    </s.state>
                </s.area>
            </s.center>
        </s.header>
    );
}

export default Header;