import { useState, useEffect } from "react";
import styled from 'styled-components';


const ProgressSection = styled.section`
   margin: auto;

   p {
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: .05rem;
   }

   @media screen and (max-width: 768px) {
      p {
         font-size: .9rem;
      font-weight: 0;
      letter-spacing: .05rem;
      }
   }
`;
const ProgressDiv = styled.div`
   background-color: rgb(177, 214, 206);
   border-radius: 1rem;
   position: relative;
   align-items: flex-end;
`;

const Progress = styled.div`
   background: rgb(31, 108, 86);
   background: linear-gradient(
     90deg,
     rgba(31, 108, 86, 1) 0%,
     rgba(31, 108, 86, 0.6264880952380952) 52%,
     rgba(45, 126, 107, 0.4332107843137255) 100%
   );
 
   height: 15px;
   transition: 1.5s ease;
   transition-delay: 2s;
   border-radius: 1rem;
   margin: 0;
`;

const ProgressBar = ({ width, percent, skills }) => {
   const [value, setValue] = useState(0);

   useEffect(() => {
      setValue(percent * width);
   }, [width, percent]);

   return (
      <>
         <ProgressSection>
            <ProgressDiv style={{ width: width }}>
               <Progress style={{ width: `${value}px` }} />
            </ProgressDiv>
            <p>{skills}</p>
         </ProgressSection>
      </>
   );
};

export default ProgressBar;