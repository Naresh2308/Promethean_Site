import react from 'react';
import styled from "styled-components";
import React from 'react';

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
  position: relative;
  height: 50vh;
  justify-content:center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Blogging = styled.div`
max-width: 100%;
font-size: 25px;
text-align:center;
font-family: ${(props) => props.theme.Fonts.Josefin};
background-color: rgba(255, 255, 255, 0.7);
cursor: pointer;
`;

const BLOG_ELEVEN = () => {
    return (
        <>
          <HeroDiv>
            <Header>Blogs11 Name</Header>
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
 
export default BLOG_ELEVEN;