import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import BackImg from "../img/headerOne.png"
import Logo from "../img/logo.png"

const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
`
const Header = styled.header`
  display:flex;
  position: relative;
  justify-content:center;
  align-items:center;
  width:100%;
  height:125vh;
`
const Img = styled.img`
display:flex;
position:absolute;
 width: 96.4%;
 height:92.6%;
`

const Image = styled.img`
  display:flex;
  width:50%;
  height:40%;

`

const Div = styled.div`
  border:solid red;
  justify-content:center
  align-items:center;
  position:absolute;
  left:5%;
  top:10vh;

`
const Nav = styled.nav`
 display:flex;
 justify-content:center;
 align-items:center;
 width:50%;
 height:30vh;
 font-family: 'M PLUS Rounded 1c', sans-serif;
`


export default function App(){
  return(
    <Header>
        <GlobalStyle/>
        <Img src={BackImg}/>
        <Div>
        <Image src={Logo}/>
        </Div>
        <Nav>
            <ul>
              <li>About</li>
              <li>Recipes</li>
              <li>Subscribe</li>
            </ul>
        </Nav>
        <h1>RECIPES</h1>
    </Header>
  )
}