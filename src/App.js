import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
`

export default function App(){
  return(
    <>
    <GlobalStyle/>
    < Header />
    < Main />
    <Footer />
    </>
  )
}






