import React from 'react';
import styled from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import ProjectOne from '../images/hsida-1.png';
import ProjectTwo from '../images/hsida-2.png';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 768px) {
      padding: 1rem calc((100vw - 700px) /2);
    }
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`;

const Heading = styled.div`
   font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
        font-size: 16px;
        margin-bottom: 0;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 500;
        line-height: 1.5;
        font-size: 1.1rem;
        letter-spacing: .05rem;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        min-height: 350px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    overflow: hidden;
`;

const InfoLink = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
    width: 155px;
    transition: 0.3s;
    list-style: none;
    letter-spacing: .05rem;

    a {
        text-decoration: none;
        list-style: none;
    }

    a:visited {
        text-decoration: none;
        color: #000d1a;
    }

    p { 
        font-weight: 500;
        font-size: .9rem;

        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
            border-bottom: 2px solid #E9B872;
        }
        p:visited {
        text-decoration: none;
        color: #000d1a;
        }
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const ProjectList = () => {
   return (
      <Section>
         <Container>
            <Heading>
               <h1 data-aos='fade-right' data-aos-duration='1500' data-aos-anchor-placement='top-bottom'>Some of my projects</h1>
            </Heading>
            <InfoRow>
               <InfoWrap>
                  <Image data-aos="fade-up-right" data-aos-duration='2000' data-aos-anchor-placement='top-bottom'
                     src={ProjectOne}
                     alt='home'
                  />
                  <h2 data-aos="zoom-out" data-aos-duration='2000' data-aos-anchor-placement='top-bottom'>
                     One of my first projects made with html, css and javascript.
                            </h2>
                  <InfoLink data-aos="fade-up-right" data-aos-duration='2000' data-aos-anchor-placement='top-bottom'>
                     <a href='//jonepredator.github.io/hsida/' rel='noopener 
                                noreferrer' target='_blank'>
                        <p >View Details</p>
                     </a>
                     <Arrow />
                  </InfoLink>
               </InfoWrap>
               <InfoWrap>
                  <Image data-aos='fade-up-left' data-aos-duration='2000' data-aos-anchor-placement='top-bottom'
                     src={ProjectTwo} alt='home'
                     css={`
                            margin-top: 120px;
                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }
                        `}
                  />
                  <h2 data-aos="zoom-out" data-aos-duration='2000' data-aos-anchor-placement="top-bottom">
                     My first Project in React. Movie searcher with API from TMDB.
                            </h2>
                  <InfoLink data-aos="fade-down-left" data-aos-duration='2000' data-aos-anchor-placement="top-bottom">
                     <a href='//glistening-popcorn.surge.sh/' rel='noopener 
                                noreferrer' target='_blank'>
                        <p>View Details</p>
                     </a>
                     <Arrow />
                  </InfoLink>
               </InfoWrap>
            </InfoRow>
         </Container>
      </Section>
   );
};

export default ProjectList;
