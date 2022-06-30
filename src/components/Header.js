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
  position:relative;
`
const Img = styled.img`
display:flex;
position:absolute;
 width: 96.4%;
 height:92.6%;
`

const Div = styled.div`
display:flex;
  width:95%;
  justify-content:center;
  align-items:space-around;;
  position:absolute;
  left:3%;
  top:8vh;

`
const Image = styled.img`
  justify-content:flex-start;
  align-items:flex-start;
  display:flex;
  height:10%;
  margin-right:45vw;

`

const Nav = styled.nav`
 justify-content:flex-end;
 display:flex;
 width:35%;
 margin-left: 8vw;
 

`
const Ul = styled.ul`
display: flex;
justify-content: space-evenly;
color: black;
list-style: none;
font-size: 20px;
font-weight: light;
`
const Li = styled.li`
   display:flex;
   align-items:center;
   justify-content:space-between;
   width:6vw;
   margin-left:2vw;
   
`
const List = styled.li`
display:flex;
align-items:center;
justify-content:center;
width:10vw;
margin-left:2vw;
border:solid black;
  &:hover{
  cursor:pointer;
  }
`


export default function App(){
  return(
    <Header>
        <GlobalStyle/>
        <Img src={BackImg}/>
      <Div>
        <Image src={Logo}/>
        <Nav>
            <Ul>
              <Li>ABOUT</Li>
              <Li>RECIPES</Li>
              <List>SUBSCRIBE</List>
            </Ul>
        </Nav>
      </Div>
        <h1>RECIPES</h1>
    </Header>
  )
}