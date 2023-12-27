import styled from "styled-components";
import HeroImg from "../Images/heroimg.jpg";
import React from 'react';
import * as ROUTES from "../Constants/routes";
import { Link } from "react-router-dom";
import Blog1 from "../Images/Blog1.jpeg";
import Blog2 from "../Images/Blog2.jpeg";
import Blog3 from "../Images/Blog3.jpeg";
import Blog4 from "../Images/Blog4.jpeg";
import Blog5 from "../Images/Blog5.webp";
import Blog6 from "../Images/Blog6.jpeg";
import Blog7 from "../Images/Blog7.jpeg";

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
  padding:10px;
  max-height:250px;
  min-height:200px;
  border-radius:40px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-height: 250px;
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

const Title = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  font-size: 18px;
  text-align:center;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 20px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 24px;
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
display:flex;
flex-wrap:wrap;
justify-content:center;
`;

const Section = styled.div`
max-width: 100%;
display:flex;
margin:10px;
border-radius:20px;
flex-wrap:wrap;
max-width:250px;
background-color:rgba(210, 217, 178, 0.4);

justify-content:center;
&:hover {
      transform: scale(1.1);
    }
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
        <Section>
        <Link to={ROUTES.BLOG_ONE}>
            <a href={ROUTES.BLOG_ONE}><br/><AboutImage src={Blog1}/><br/><Title>Advancing Towards Net-Zero</Title><br/></a>
          </Link>
        </Section>
         <Section>
         <Link to={ROUTES.BLOG_TWO}>
            <a href={ROUTES.BLOG_TWO}><br/><AboutImage src={Blog2}/><br/><br/><Title>Tech Innovations Powering Environmental Sustainability</Title></a>
          </Link>
         </Section>
         <Section>
         <Link to={ROUTES.BLOG_THREE}>
            <a href={ROUTES.BLOG_THREE}><br/><AboutImage src={Blog3}/><br/><br/><Title>Exploring the Impact of Renewable Energy Technologies</Title></a>
          </Link>
         </Section>
         <Section>
          <Link to={ROUTES.BLOG_FOUR}>
            <a href={ROUTES.BLOG_FOUR}><br/><AboutImage src={Blog4}/><br/><br/><Title>Revolutionizing Plastics</Title></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FIVE}>
            <a href={ROUTES.BLOG_FIVE}><br/><AboutImage src={Blog5}/><br/><br/><Title>The Environmental Toll of Car-Centric Infrastructure</Title></a>
          </Link>
          </Section>
          <Section>          
          <Link to={ROUTES.BLOG_SIX}>
            <a href={ROUTES.BLOG_SIX}><br/><AboutImage src={Blog6}/><br/><br/><Title>The Environmental Impacts of Rivers</Title></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SEVEN}>
            <a href={ROUTES.BLOG_SEVEN}><br/><AboutImage src={Blog7}/><br/><br/><Title>Embracing Green Havens</Title></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_EIGHT}>
            <a href={ROUTES.BLOG_EIGHT}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_NINE}>
            <a href={ROUTES.BLOG_NINE}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_TEN}>
            <a href={ROUTES.BLOG_TEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_ELEVEN}>
            <a href={ROUTES.BLOG_ELEVEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_TWELVE}>
            <a href={ROUTES.BLOG_TWELVE}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_THIRTEEN}>
            <a href={ROUTES.BLOG_THIRTEEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FOURTEEN}>
            <a href={ROUTES.BLOG_FOURTEEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FIFTEEN}>
            <a href={ROUTES.BLOG_FIFTEEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SIXTEEN}>
            <a href={ROUTES.BLOG_SIXTEEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SEVENTEEN}>
            <a href={ROUTES.BLOG_SEVENTEEN}><br/><AboutImage/><br/><br/></a>
          </Link>
          </Section>
          </Blogging>
        </Main>
    </>
  );
};

export default Blogs;
