import styled, { css } from 'styled-components/macro';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const Section = styled.section`
    background: #000d1a;
    color: #fff;
    width: 100%;
    min-height: 250px;
    padding: 1rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
`;

const FooterTop = styled.div`
    display: flex;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Quote = styled.div`
    flex: 1;
    padding: 1rem 0rem;

    h3 {
        font-size: clamp( 1.2rem, 2vw, 5rem );
    }
`;

const SocialIcons = styled.div`
   padding: 1rem 0.8rem;
   display: flex;
   bottom: 0;
   right: 0;
   flex: auto;

    @media screen and (max-width: 768px) {
      padding: .5rem 0 1rem 0;
      margin-bottom: 1rem;
      width: 100%;
      border-right: 0;
    }
`;

const Icons = css`
    font-size: clamp(2rem, 4vw, 3rem);
    margin-right: 1.7rem;
    color: #2274a5;

    &:hover {
        transform: scale(1.15);
        color: #E9B872;
        transition: all 0.3s ease-in-out;
    }
`;

const Instagram = styled(FaInstagram)`
    ${Icons}
    
`;
const Github = styled(FaGithub)`
    ${Icons}
`;
const LinkedIn = styled(FaLinkedinIn)`
    ${Icons}

`;

// const FooterBottom = styled.div`
//     padding: .5rem 0rem;

//     @media screen and (max-width: 768px) {
//     }
// `;

const Footer = () => {
   return (
      <Section>
         <Container>
            <FooterTop>
               <Quote>
                  <h3 data-aos='fade-right' data-aos-duration='2000' data-aos-anchor-placement='top-bottom'>Follow Me <br /> On My Socials</h3>
               </Quote>
               <SocialIcons>
                  <a href='//www.instagram.com/jonepredator/' rel='noopener 
                        noreferrer' target='_blank' data-aos='fade-right' data-aos-duration='2000' data-aos-anchor-placement='top-bottom' data-aos-delay='200'>
                     <Instagram />
                  </a>
                  <a href='//github.com/Jonepredator' rel='noopener 
                        noreferrer' target='_blank' data-aos='fade-right' data-aos-duration='2000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                     <Github />
                  </a>
                  <a href='//www.linkedin.com/in/juan-fuenzalida-2b90321b6/' rel='noopener 
                        noreferrer' target='_blank' data-aos='fade-right' data-aos-duration='2000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                     <LinkedIn />
                  </a>
               </SocialIcons>

            </FooterTop>

         </Container>
      </Section>
   );
};

export default Footer;