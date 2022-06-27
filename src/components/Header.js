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
  display:flex;
  justify-content:center;
  align-items:center;
  border:solid;
  width:100%;
  height:125vh;
`
const Img = styled.img`
 width: 95%;
 height:98%
`


export default function App(){
  return(
    <Header>
        <GlobalStyle/>
        <Img src={BackImg}/>
        <div>
            <ul>
                
            </ul>
        </div>
    </Header>
  )
}