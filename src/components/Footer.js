import React from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import Facebook from "./src/img/Facebook.png"
import Instagram from "./src/img/Instagram.png"
import Pinterest from "./src/img/Pinterest.png"
import Twitter from "./src/img/Twitter.png"


const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

 }
`
const Content = styled.div`
 width: 100%;
 display: flex;
 border: solid purple;
 flex-direction: column;
 p{
  text-align: center;
  height: 5vh;
  font-size: 0.7em;
 }
`
const Sub = styled.div`
 width: 100%;
 height: 50vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 color: #373737;
 font-size: 1.5em;
 justify-content: space-evenly;
 background-color: #DFE4DE;
`
const Foot = styled.div`
 width: 100%;
 height: 30vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
`
const Input = styled.input`
 width: 25%;
 height: 12%;
 margin-top:-50px;
 margin-bottom: -30px;
 background-color: #EFF1EE;
 border:none;
 padding:25px;
`
const Button = styled.button`
 width: 100px;
 height: 40px;
 background-color: #DFE4DE;
 border: solid #373737;
`
const Lista = styled.nav`
 width:100%;
 height: 50vh;
 display: flex;
 justify-content: right;
 background-color: #F2F4F1;
 cursor: pointer;
 li{
  list-style:none;
 }
`

export default function App(){
  return(
    <Content>
    <GlobalStyle/>
     <Sub>
       <h2>SUBSCRIBE</h2>
       <p>Sign up for newsletter</p>
       <Input placeholder="your email"/>
       <Button>SUBMIT</Button>
     </Sub>
     <Foot>
        <Lista>
          <img src={Instagram}/>
          <img src={Twitter}/>
          <img src={Facebook}/>
          <img src={Pinterest}/>
         <ul>
           <li>ABOUT</li>
           <li>RECIPES</li>
           <li>SUBSCRIBE</li>
          </ul>
        </Lista>
      </Foot>
      <p style={{backgroundColor:"#446061"}}>Layout produzido por Dandara e Joy para o curso Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
    </Content>
  )
}