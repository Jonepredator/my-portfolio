import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Section = styled.section`
    background: #1F6C56;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
   background: #fff;
    padding: 3rem 2rem;
    position: relative;
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

const LeftContainer = styled.div`
   background-color: #FFF;
   padding: 3rem 0;
   display: flex;
   margin: auto;
   flex-direction: column;
   justify-content: space-evenly;
   height: 100%;
   width: 100%;
   border: 5px solid #FFF;
   border-radius: 0 12px 12px 0;

   @media screen and (max-width: 768px) {
      border-radius: 12px;
      padding: 1rem 0;
   }
`;

const Skills = () => {
   return (
      <Section>
         <Container>
            <Wrap>
               <ColumnLeft reverse='false'>
                  <LeftContainer
                     data-aos='fade-right'
                     data-aos-duration='1500'
                     data-aos-delay='200'
                     data-aos-anchor-placement='top-bottom'
                  >
                     <ProgressBar width={200} percent={0.8} skills={'CSS'} />
                     <ProgressBar width={200} percent={0.8} skills={'HTML'} />
                     <ProgressBar width={200} percent={0.5} skills={'JAVASCRIPT'} />
                     <ProgressBar width={200} percent={0.6} skills={'REACTJS'} />
                     <ProgressBar width={200} percent={0.9} skills={'PHOTOSHOP'} />
                     <ProgressBar width={200} percent={1} skills={'FINAL CUT PRO X'} />

                  </LeftContainer>
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
