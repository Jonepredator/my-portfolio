import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/skills-1.png';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
       padding: 3rem 0 1rem 0;
    }
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 300px;
      padding: 1rem calc((100vw - 500px) /2);
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
        line-height: 1.5;
        font-size: 1.1rem;
        letter-spacing: .05rem;
        font-weight: 500;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;


const Skills = () => {
   return (
      <Section>
         <Container>
            <ColumnLeft
               reverse='false'
               data-aos='fade-up' ß
               data-aos-duration='1500'
               data-aos-delay='200'
               data-aos-anchor-placement='top-bottom'>
               <h1>Knowledge</h1>
               <p>This data is probably not that accurate but it is how my brain thinks it is.</p>
               <p>I am still learning new things everyday and my pursue for more knowledge is never ending.</p>
            </ColumnLeft>
            <ColumnRight reverse='false'>
               <img src={ImageOne} alt='home'
                  data-aos='zoom-out'
                  data-aos-duration='1500'
                  data-aos-delay='200'
                  data-aos-anchor-placement='top-bottom'
               />
            </ColumnRight>
         </Container>
      </Section>
   );
};

export default Skills;
