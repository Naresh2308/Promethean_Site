import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimg.jpg";

const Main = styled.div`
  max-width: 320px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 70px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 50px;
  }
`;

const HeroDiv = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 50vh;
  justify-content:center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`;

const Blogging = styled.div`
max-width: 100%;
font-size: 25px;
padding:60px;
margin:45px;
text-align:center;
border-radius:30px;
font-family: ${(props) => props.theme.Fonts.Josefin};
background-color: rgba(255, 255, 255, 0.7);
`;

const BLOG_TEN= () => {
    return (
        <>
          <HeroDiv
             style={{
               backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
             }}
          >
            <Header>Blogs10 Name</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p>
              content
              </p>
             </Blogging>
            </Main>
        </>
    );
};
 
export default BLOG_TEN;
