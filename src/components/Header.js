import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import BackImg from "../img/headerOne.png"

const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
`
const Header = styled.header`
  border:solid;
  width:100%;
  height:110vh;
  background-image:url(${BackImg});
  background-size:80%;
  background-repeat: no-repeat;
`

export default function App(){
  return(
    <Header>
        <GlobalStyle/>
        
    </Header>
  )
}