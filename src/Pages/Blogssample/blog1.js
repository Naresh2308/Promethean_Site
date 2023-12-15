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

const BLOG_ONE = () => {
  return (
    <>
      <HeroDiv>
        <Header>Advancing Towards Net-Zero</Header>
      </HeroDiv>
        <Main>
        <Blogging>
          <p><br/>
          Introduction:<br/>
          In the quest for a sustainable future, the urgency to address climate change has never been more pronounced. The Intergovernmental Panel on Climate Change (IPCC) emphasized in its 2022 report on the Mitigation of Climate Change that achieving net-zero emissions requires not only a reduction in greenhouse gas emissions but also the implementation of strategies to remove excess carbon dioxide from the atmosphere. This brings us to the pivotal role of Carbon Capture, Removal, and Storage (CCRS) technologies in shaping the path to a more sustainable and climate-resilient future.
          <br/><br/>
          Excess CO2 Removal Imperative:<br/>
          The IPCC's report highlights a sobering reality - current emission rates necessitate the removal of excess carbon dioxide from the atmosphere to meet net-zero goals within the required timeframe. This underscores the importance of developing and deploying effective CCRS technologies to counterbalance the ongoing emissions and mitigate the impacts of climate change.
          <br/><br/>
          Global Initiatives:<br/>
          As of 2020, the Center for Climate and Energy Solutions reported that at least 26 commercial-scale carbon capture projects were operational worldwide. Moreover, 21 projects were in the early stages of development, with an additional 13 in advanced development. This global commitment to CCRS reflects a collective acknowledgment of the technology's potential to make substantial contributions to climate mitigation efforts.
          <br/><br/>
          Carbon Capture Technologies:<br/>
          Carbon capture technologies involve the capture of CO2 emissions directly from industrial processes or power plants before they are released into the atmosphere. Post-capture, the captured CO2 is transported and stored in geological formations underground, preventing its release and mitigating its impact on the climate. Ongoing research and development aim to improve the efficiency and scalability of these technologies to make them more widely applicable.
          <br/><br/>
          Challenges and Opportunities:<br/>
          While the progress in CCRS is promising, challenges persist. Economic viability, public acceptance, and regulatory frameworks are critical factors influencing the widespread adoption of these technologies. However, the increasing number of projects in various stages of development signals a growing recognition of the potential of CCRS and a commitment to overcoming these challenges.
          <br/><br/>
          Conclusion:<br/>
          Carbon Capture, Removal, and Storage stand at the forefront of climate mitigation strategies, offering a promising avenue to offset the continued high rates of emissions. The global community's increasing investment and engagement in CCRS projects signify a shared commitment to achieving net-zero emissions and safeguarding our planet for future generations. As technology continues to advance and global collaboration intensifies, carbon capture technologies may prove to be indispensable tools in the race against climate change.
          <br/><br/>
          </p>
         </Blogging>
        </Main>
    </>
  );
};

export default BLOG_ONE;