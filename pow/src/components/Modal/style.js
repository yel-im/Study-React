import styled from 'styled-components';

export const ModalCenter = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ModalInput {
        box-sizing: border-box;
        padding: 5px 15px 5px 15px;
        width: 354px;
        height: 59px;
        border-radius: 30em;
        background-color: #F4F4F4;
        color: black;
        border: none;
        font-size: 15px;
    }
    .LoginBtn {
        background-color: white;
        color: #51ADCF;
        width: 172px;
        height: 65px;
        border-radius: 30em;
        border: 1px solid #707070;
        font-size: 20px;
    }
`

export const Logo = styled.div`
    height: 122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
        width: 142px;
        height: 51px;
    }
    span {
        color: #707070;
    }
`

// Login Modal

export const LoginModal = styled.div`
    box-sizing: border-box;
    width: 492px;
    height: 492px;
    border: 1px solid #707070;
    padding: 10px 20px;
    background-color: white;
`

export const Etc = styled.span`
    width: 452px;
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
`

export const LoginInput = styled.div`
    width: 452px;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const LoginBtn = styled.div`
    height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Change = styled.div`
    color: #707070;
    font-size: 10px;
    padding-bottom: 5px;

`

// NewPw Modal
export const PwModal = styled.div`
    width: 492px;
    height: 536px;
    box-sizing: border-box;
    border: 1px solid #707070;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    div {
        height: 29px;
    }
`

export const PwSpan = styled.div`
    height: 17px;
`

export const PwInput = styled.div`
    height: 102px;
    width: 452px;
    display: flex;
    align-items: center;
`

export const NewPwInput = styled.div`
    width: 452px;
    height: 131px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const EnterBtn = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
`