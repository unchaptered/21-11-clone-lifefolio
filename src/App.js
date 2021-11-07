import React, { Component } from "react";
import Router from "./Router";
import styled from "styled-components";
import InitialStyles from "./Components/InitialStyles";

const App=styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
padding: 20px 30px;
/* background-color: red; */
@media screen and (max-width:1200px){
  padding: 20px 0;
}
`;
export default class extends React.Component  {
  render(){
      return (
        <>
          <App>
            <Router />
          </App>
          <InitialStyles />
        </>
      );
  };
};