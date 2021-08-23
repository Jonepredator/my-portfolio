import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/skills-1.png';

const Section = styled.section`
    /* width: 100%;
    height: 100%;
    padding: 4rem 0rem; */

    /* background: #2D7E6B; */
    background: #1F6C56;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* @media screen and (max-width: 768px) {
       padding: 3rem 0 1rem 0;
    } */
`;

const Container = styled.div`
   background: #fff;
    padding: 3rem 2rem;
    position: relative;
/* 
    padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 300px;
      padding: 1rem calc((100vw - 500px) /2);
    } */
`;

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const ColumnRight = styled.div`   
   display: flex;
    flex-wrap: wrap;
    margin: 0px 15px;
    justify-content: flex-end;
    padding: 1rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #FFF;
    line-height: 1.4;
    padding: 1rem 2rem;
    order:

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
    } */
`;

const Content = styled.div`
    flex: 0 0 50%;

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 250px;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.5;
        font-size: 1.1rem;
        letter-spacing: .05rem;
        font-weight: 500;
    }
`;

const ColumnLeft = styled.div`
    position: absolute;
    top: -80px;
    left: 0;
    max-width: 850px;
    height: 140%;
    width: 45%;
    padding-right: 1rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        right: 0;
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
`;

// const ColumnRight = styled.div`
//     padding: 1rem 2rem;
//     order: ${({ reverse }) => (reverse ? '1' : '2')};
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media screen and (max-width: 768px) {
//         order: ${({ reverse }) => (reverse ? '2' : '1')};
//     }

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;

//         @media screen and (max-width: 768px) {
//             width: 90%;
//             height: 90%;
//         }
//     }
// `;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 5px solid #FFF;
    border-radius: 0 12px 12px 0;

    @media screen and (max-width: 768px) {
      border-radius: 12px;
    }
`;

const Skills = () => {
   return (
      <Section>
         <Container>
            <Wrap>
               <ColumnLeft reverse='false'>
                  <Image src={ImageOne}
                     alt='home'
                     data-aos='fade-right'
                     data-aos-duration='1500'
                     data-aos-delay='200'
                     data-aos-anchor-placement='top-bottom'
                  />
               </ColumnLeft>
               <ColumnRight reverse='false'>
                  <Content
                     data-aos='fade-left'
                     data-aos-duration='1500'
                     data-aos-delay='200'
                     data-aos-anchor-placement='top-bottom'>
                     <h1>Knowledge</h1>
                     <p>This data is probably not that accurate but it is how my brain thinks it is.</p>
                     <p>I am still learning new things everyday and my pursuit for more knowledge is not going to stop any time soon.</p>
                  </Content>
               </ColumnRight>

            </Wrap>
         </Container>
      </Section>
   );
};

export default Skills;
