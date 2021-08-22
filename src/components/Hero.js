import React from 'react';
import styled from 'styled-components/macro';
import Video from '../videos/swoosh-2.mp4';

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    background: black;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: black;
`;

const HeroBg = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
      font-size: clamp(1rem, 8vw, 2rem);
      font-weight: 400;
      text-transform: uppercase;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      text-align: left;
      margin-bottom: 0.8rem;
    }

    p {
      margin-bottom: 1.2rem;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
    h3 {
      word-spacing: 8px;
    }
`;

const Hero = () => {
   return (
      <HeroSection>
         <HeroWrapper>
            <HeroBg
               playsInline autoPlay loop muted src={Video} type='video/mp4'
            />
            <HeroContent>
               <h1 data-aos='fade-down' data-aos-duration='1600' data-aos-delay='500' >Front-End Developer</h1>
               <p data-aos='fade-right' data-aos-duration='1600' data-aos-delay='1500' >in the making</p>
               <br />
               <h3 data-aos='fade-right' data-aos-duration='1600' data-aos-delay='2000' >Currently searching for an internship from mid November to April</h3>
            </HeroContent>
         </HeroWrapper>
      </HeroSection>
   );
};

export default Hero;
