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
import Blog8 from "../Images/Blog8.jpeg";

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
  height:251px;
  width:375px;
  border-radius:5px;
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
  font-size: 24px;
  text-align:left;
  padding:10px;
  color: ${(props) => props.theme.Colors.Header};
  
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
display:flex;
margin:12px;
border-radius:15px;
flex-wrap:wrap;
width:375px;
height:500px;
background-color:rgb(11, 29, 39,0.5);
border:2px solid #FFFFFF70;
padding:0px;
justify-content:center;
&:hover {
      transform: scale(1.1);
    }
`;

const Para=styled.p`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 300;
  font-size: 20px;
  text-align:left;
  padding:10px;
  color: ${(props) => props.theme.Colors.Header};
  box-shadow: 0px -60px 90px -40px #000000 inset , 0px 11px 30px 2px #000000 ;
  
`;

const Read=styled.h1`
font-family: ${(props) => props.theme.Fonts.Josefin};
font-size: 20px;
text-align:right;
color: #CEE002;
padding:5px;
cursor:pointer;
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
            <a href={ROUTES.BLOG_ONE}><br/><AboutImage src={Blog1}/><br/><Title>Advancing Towards Net-Zero</Title><Para>In the quest for a sustainable future, the urgency to address climate change has never been more pronounced. The Intergovernmental Panel on Climate Change (IPCC) emphasized in its 2022 report on the Mitigation of Climate...</Para> <Read>Read more</Read></a>
          </Link>
        </Section>
         <Section>
         <Link to={ROUTES.BLOG_TWO}>
            <a href={ROUTES.BLOG_TWO}><br/><AboutImage src={Blog2}/><br/><Title>Tech Innovations Powering Environmental Sustainability</Title><Para>In an era marked by rapid technological advancements, the intersection of technology and environmental conservation has become increasingly crucial. Innovations...</Para> <Read>Read more</Read></a>
          </Link>
         </Section>
         <Section>
         <Link to={ROUTES.BLOG_THREE}>
            <a href={ROUTES.BLOG_THREE}><br/><AboutImage src={Blog3}/><br/><Title>Exploring the Impact of Ren-ewable Energy Technologies</Title><Para>The world is facing a significant challenge in combating climate change and reducing reliance on fossil fuels. Renewable energy technologies offer a promising...</Para> <Read>Read more</Read></a>
          </Link>
         </Section>
         <Section>
          <Link to={ROUTES.BLOG_FOUR}>
            <a href={ROUTES.BLOG_FOUR}><br/><AboutImage src={Blog4}/><br/><Title>Revolutionizing Plastics</Title><Para>In a world where the environmental impact of plastic waste is a growing concern, the search for eco-friendly alternatives has become more imperative than ever. One promising solution is the use of starch in the production...</Para> <Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FIVE}>
            <a href={ROUTES.BLOG_FIVE}><br/><AboutImage src={Blog5}/><br/><Title>The Environmental Toll of Car-Centric Infrastructure</Title><Para>In the relentless pursuit of modernization and convenience, many cities worldwide have fallen victim to the pitfalls of car-centric infrastructure. While automobiles undoubtedly supply...</Para> <Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>          
          <Link to={ROUTES.BLOG_SIX}>
            <a href={ROUTES.BLOG_SIX}><br/><AboutImage src={Blog6}/><br/><Title>The Environmental Impacts of Rivers</Title><Para>Rivers, often considered the arteries of our planet, play a crucial role in shaping landscapes and sustaining life. However, their immense importance is acco-mpanied by a range...</Para> <Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SEVEN}>
            <a href={ROUTES.BLOG_SEVEN}><br/><AboutImage src={Blog7}/><br/><Title>Embracing Green Havens</Title><Para>In the hustle and bustle of modern city life, amidst towering skyscrapers and bustling streets, there exists an often overlooked oasis that plays a crucial role in our well-being — urban green spaces. Parks, gardens, and green areas are...</Para> <Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_EIGHT}>
            <a href={ROUTES.BLOG_EIGHT}><br/><AboutImage src={Blog8}/><br<Title>Reviving Urban Biodiversity</Title><Para>In the bustling heart of urban landscapes, amidst the towering structures and bustling streets, lies a silent casualty: the decline of urban biodiversity. As cities expand and concrete conquers once-thriving...</Para><Read>Read more</Read></a>
          </Link>
          </Section>
          {/* <Section>
          <Link to={ROUTES.BLOG_NINE}>
            <a href={ROUTES.BLOG_NINE}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_TEN}>
            <a href={ROUTES.BLOG_TEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_ELEVEN}>
            <a href={ROUTES.BLOG_ELEVEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_TWELVE}>
            <a href={ROUTES.BLOG_TWELVE}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_THIRTEEN}>
            <a href={ROUTES.BLOG_THIRTEEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FOURTEEN}>
            <a href={ROUTES.BLOG_FOURTEEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_FIFTEEN}>
            <a href={ROUTES.BLOG_FIFTEEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SIXTEEN}>
            <a href={ROUTES.BLOG_SIXTEEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section>
          <Section>
          <Link to={ROUTES.BLOG_SEVENTEEN}>
            <a href={ROUTES.BLOG_SEVENTEEN}><br/><AboutImage/><br/><Para></Para><Read>Read more</Read></a>
          </Link>
          </Section> */}
          </Blogging>
        </Main>
    </>
  );
};

export default Blogs;
