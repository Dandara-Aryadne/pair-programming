import React from "react";
import styled from "styled-components";

const Section = styled.section`
  color: #373737;
  font-size: 3rem;
  background-color: #f2f4f1;
  padding-bottom: 7rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10rem;
  h2 {
    font-size: 2rem;
  }
`;

const Borda = styled.div`
  width: 4rem;
  border-bottom: #373737 solid;
  margin-top: 0.8rem;
`;

const Food = styled.ul`
border: solid;
margin-top: 5rem;
display: flex;
align-items: center;
justify-content: space-evenly;
  img {
    width: 20rem;
    height: 15rem;
  }
`;

const Text = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleImage = styled.h3`
  width: 18rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  padding-top: 1rem;
`

export default function App(){
  return(
    <Section>
      <Title>
        <h2>LATEST RECIPES</h2>
        <Borda></Borda>
      </Title>
      <Food>
        <Item>
          <img src=""alt="bolo"/>
          <Text>
            <Borda></Borda>
            <TitleImage>Red Velvet Cake</TitleImage>
          </Text>
        </Item>
        <Item>
          <img src="" alt="pizza" />
          <Text>
            <Borda></Borda>
            <TitleImage>Margherita Pizza</TitleImage>
          </Text>
        </Item>
        <Item>
          <img src="" alt="smooth" />
          <Text>
            <Borda></Borda>
            <TitleImage>Peanut Smoothie</TitleImage>
          </Text>
        </Item>
      </Food>
    </Section>
  
  )
}