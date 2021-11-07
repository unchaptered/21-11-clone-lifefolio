import React from "react";
import styled from "styled-components";
import InitialStyles from "./Components/InitialStyles";

import Button from "./Components/Button";
import Scroll from "./Components/Scroll";
import Poster from "./Components/Poster";
import MainPoster from "./Components/MainPoster";
const AllContainer=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  @media screen and (max-width:1200px){
    padding: 20px 0;
  }
`;
const Nav=styled.div`
width: 100%;
height: 58px; 
/* background-color: rgba(230,230,230,1); */
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
`;
const ContentContainer=styled.div`
  width:100%;
  height: calc(100vh - 98px);
  display:flex;
  align-items:center;
  justify-content: center;
`;
const WrapContainer=styled.div`
  width:1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: olive; */
  @media screen and (max-width: 1200px){
    width:100%;
    flex-direction:column;
    justify-content: space-around;
  }
`;
const MainContent=styled.div`
  width: 60%;
  @media screen and (max-width: 1200px){
    margin-top: 10px;
    width: 70%;
  }
  @media screen and (max-width: 900px){
    width: 90%;
  }
  display:flex;
  flex-direction: column;
  /* background-color: orange; */
`;
const MainTitle=styled.header`
height: 30px;
border: 1px solid black;
display: flex;
align-items: flex-end;
`;
const SideContent=styled.div`
  width:30%;
  height: calc(100% * 2 / 3 - 25px);
  gap: 20px;
  display: grid;
  grid-template: repeat(3,1fr) / repeat(1,1fr);
  @media screen and (max-width: 1200px){
    margin-top: 10px;
    gap: 10px;
    width: 70%;
    grid-template: repeat(1,1fr) / repeat(3,1fr);
    justify-self: flex-start;
  }
  @media screen and (max-width: 900px){
    gap: 5px;
    width: 90%;
  }
`;

class App extends React.Component  {
  state={
    loggedIn:false,
  }
  login=event=>{
    const {loggedIn}=this.state;
    this.setState({loggedIn:true});
  }
  logout=event=>{
    const {loggedIn}=this.state;
    this.setState({loggedIn:false});
  }
  render(){
      const {loggedIn}=this.state;
      return (
        <>
          <InitialStyles />
          <AllContainer>
            <Nav>
              <div>
                <Button text="검색"/>
              </div>
              <div>
                {loggedIn===false ?
                  <>
                    <Button text="로그인" onClick={this.login}/>
                    <Button text="회원가입"/>
                  </> :
                  <Button text="로그아웃" onClick={this.logout}/>
                }
              </div>
            </Nav>
            <ContentContainer>
              <WrapContainer>
                <MainContent>
                  <MainTitle> Title </MainTitle>
                  <MainPoster text="hi"/>
                  <Scroll />
                </MainContent>
                <SideContent>
                  <Poster text="profile"/>
                  <Poster text="1"/>
                  <Poster text="2"/>
                </SideContent>
              </WrapContainer>
            </ContentContainer>
          </AllContainer>
        </>
      );
  };
};

export default App;