import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 3.5rem 0 0;
    background: whitesmoke;
`;

export const Container = styled.div`
    height: 100%;
    max-height: 1100px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
    background: whitesmoke;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

  @media screen and (max-width: 768px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        margin-left: 24px;
        margin-top: 70px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 150px 10px 10px 10px;
    }
`;

export const Form = styled.form`
    background: #840032;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 768px) {
        padding: 20px 20px;
    }

    @media screen and (max-width: 600px) {
        height: 500px;
        padding: 20px 10px;
        margin-bottom: 35px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    letter-spacing: .05rem;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    letter-spacing: .05rem;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    background-color: #EBEBEB;

    &:focus {
        background-color: #fff;
     }

    @media screen and (max-width: 768px) {
        padding: 10px 10px;
        margin-bottom: 15px;
    }
`;

export const Textarea = styled.textarea`
    padding: 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    height: 200px;
    font-family: 'Montserrat', sans-serif;
    background-color: #EBEBEB;

    &:focus {
        background-color: #fff;
     }

    @media screen and (max-width: 600px) {
        margin-bottom: 20px;
        height: 150px;
    }
`;

export const FormButton = styled.button`
    background: #45a3d9;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #010606;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .2rem;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #E9B872;
        color: #010606;
        border: none;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        padding: 10px 0;
        font-size: 16px;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;



const ContactForm = () => {
   const [data, setData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const { name, email, message } = data;

   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch(
            'https://v1.nocodeapi.com/jonepredator/google_sheets/kQpqstuivBoibXiL?tabId=Blad1', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify([
               [name, email, message, new Date().toLocaleString()],
            ]),
         }
         );
         await response.json();
         setData({ ...data, name: '', email: '', message: '' });

      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Section>
         <Container>
            <FormWrap>
               <FormContent>
                  <Form action='#' onSubmit={handleSubmit}>
                     <FormH1>Contact me here, or scroll down and contact me on my Socials</FormH1>
                     <FormLabel htmlFor='name'>Name</FormLabel>
                     <FormInput
                        type='text'
                        classname='form-control'
                        name='name'
                        autoComplete='off'
                        value={name}
                        onChange={handleChange}
                        required />
                     <FormLabel htmlFor='email'>Email</FormLabel>
                     <FormInput
                        type='text'
                        classname='form-control'
                        name='email'
                        autoComplete='off'
                        value={email}
                        onChange={handleChange}
                        required />
                     <FormLabel htmlFor='for'>Message</FormLabel>
                     <Textarea
                        type='text'
                        classname='form-control'
                        name='message'
                        autoComplete='off'
                        value={message}
                        onChange={handleChange}
                        required />
                     <FormButton
                        type='submit'
                        value='submit'
                        classname='submit-btn'
                     >Send</FormButton>
                  </Form>
               </FormContent>
            </FormWrap>
         </Container>
      </Section>
   );
};

export default ContactForm;
