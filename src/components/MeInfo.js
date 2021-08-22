import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/juan-2.jpg';

const Section = styled.section`
    /* background: #2274a5; */
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

const ColumnLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 15px;
    justify-content: flex-start;
    padding: 1rem;
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

const ColumnRight = styled.div`
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 850px;
    height: 140%;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        left: 0;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const MeInfo = () => {
   return (
      <Section>
         <Container>
            <Wrap>
               <ColumnLeft>
                  <Content
                     data-aos='fade-right'
                     data-aos-duration='2000'
                     data-aos-anchor-placement='top-bottom'>
                     <h1>Juan Fuenzalida</h1>
                     <p>Born in the woods of Småland, Sweden, currently living in Stockholm. I come from a background of art with dancing, drawing, painting and tattooing. But i wanted to explore something new.</p>
                     <p>Soooo... I am now studying to become a front-end developer at KYH-Stockholm</p>
                  </Content>
               </ColumnLeft>
               <ColumnRight>
                  <Image src={ImageOne}
                     alt='My-Face'
                     data-aos='zoom-in'
                     data-aos-duration='1500'
                     data-aos-anchor-placement='top-bottom'
                  />
               </ColumnRight>
            </Wrap>
         </Container>
      </Section>
   );
};

export default MeInfo;
