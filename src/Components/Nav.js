import React from "react";
import styled from "styled-components";

import ALink from "./ALink";
import Button from "./Button";


const Nav=styled.div`
width: 100%;
height: 58px; 
background-color: rgba(230,230,230,1);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
`;

export default function (){
    const [loggedIn,setLoggedIn]=React.useState(false);
    function login(event) {
        setLoggedIn(true);
    }
    function logout(event) {
        setLoggedIn(false);
    }
    return (
        <Nav>
            <div>
                <ALink text="찾기" to ="/"/>
                <ALink text="내 프로필" to="/folio"/>
            </div>
            <div>
            {loggedIn===false ?
                <>
                <Button text="로그인" onClick={login}/>
                <Button text="회원가입"/>
                </> :
                <Button text="로그아웃" onClick={logout}/>
            }
            </div>
        </Nav>
    );
};