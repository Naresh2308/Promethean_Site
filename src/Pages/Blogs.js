import styled from "styled-components";
import HeroImg from "../Images/heroimg.jpg";
import React from 'react';
import * as ROUTES from "../Constants/routes";
import { Link } from "react-router-dom";
import Blog1 from "../Images/Blog1.jpeg";
import Blog2 from "../Images/Blog2.jpeg";
import Blog3 from "../Images/Blog3.jpeg";
import Blog4 from "../Images/Blog4.jpeg"
import Blog5 from "../Images/Blog5.webp";

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

const AboutImage = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-right: 40px;
    width: 350px;
    height: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin: ${(props) => (props.right ? "0 120px 0 0" : "0 0 0 80px")};
  }
`;


const Header = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  font-size: 50px;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 70px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 90px;
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
font-size: 20px;
text-align: center;
font-family: ${(props) => props.theme.Fonts.Josefin};
background-color: rgba(255, 255, 255, 0.7);
cursor: pointer;
`;
const Blogs = () => {
  return (
    <>
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
        }}
      >
        <Header>Blogs</Header>
      </HeroDiv>
        <Main>
        <Blogging>
        <Link to={ROUTES.BLOG_ONE}>
            <a href={ROUTES.BLOG_ONE}><br/><AboutImage src={Blog1}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_TWO}>
            <a href={ROUTES.BLOG_TWO}><br/><AboutImage src={Blog2}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_THREE}>
            <a href={ROUTES.BLOG_THREE}><br/><AboutImage src={Blog3}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_FOUR}>
            <a href={ROUTES.BLOG_FOUR}><br/><AboutImage src={Blog4}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_FIVE}>
            <a href={ROUTES.BLOG_FIVE}><br/><AboutImage src={Blog5}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_SIX}>
            <a href={ROUTES.BLOG_SIX}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_SEVEN}>
            <a href={ROUTES.BLOG_SEVEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_EIGHT}>
            <a href={ROUTES.BLOG_EIGHT}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_NINE}>
            <a href={ROUTES.BLOG_NINE}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_TEN}>
            <a href={ROUTES.BLOG_TEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_ELEVEN}>
            <a href={ROUTES.BLOG_ELEVEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_TWELVE}>
            <a href={ROUTES.BLOG_TWELVE}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_THIRTEEN}>
            <a href={ROUTES.BLOG_THIRTEEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_FOURTEEN}>
            <a href={ROUTES.BLOG_FOURTEEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_FIFTEEN}>
            <a href={ROUTES.BLOG_FIFTEEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_SIXTEEN}>
            <a href={ROUTES.BLOG_SIXTEEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          <Link to={ROUTES.BLOG_SEVENTEEN}>
            <a href={ROUTES.BLOG_SEVENTEEN}><br/><AboutImage src={PrometheanImage}/><br/><br/></a>
          </Link>
          </Blogging>
        </Main>
    </>
  );
};

export default Blogs;
