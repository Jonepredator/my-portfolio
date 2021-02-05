import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { animateScroll as scroll } from 'react-scroll';
import Bars from '../images/bars-1.svg';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem .3rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: .1rem;

    &:hover {
        transform: translateY(-2px) scale(1.1);
        transition: all 0.1s ease-in-out;
        border-bottom: 3px solid #E9B872;
    }
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-weight: bold;
    letter-spacing: .2rem;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;

    &:hover {
        transform: none;
        border-bottom: none;
    }
`;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 878px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 878px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}

    &:hover {
        transform: translateY(.1)
    }
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 878px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
   const [navbar, setNavbar] = useState(false);
   const location = useLocation();

   const changeBackground = () => {
      if (window.pageYOffset >= 150) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };

   useEffect(() => {
      const watchScroll = () => {
         window.addEventListener('scroll', changeBackground);
      };

      watchScroll();

      return () => {
         window.removeEventListener('scroll', changeBackground);
      };
   }, []);

   let style = {
      backgroundColor: navbar || location.pathname !== '/' ? '#2274a5' : 'transparent',
      transition: '1.5s'
   };

   const toggleHome = () => {
      scroll.scrollToTop();
   };



   return (
      <Nav style={style}>
         <Logo onClick={toggleHome} to='/'>JUAN FUENZALIDA</Logo>
         <MenuBars onClick={toggle} />
         <NavMenu>
            {menuData.map((item, index) => (
               <NavMenuLinks to={item.link} key={index}>
                  {item.title}
               </NavMenuLinks>
            ))}
         </NavMenu>
         <NavBtn>
            <Button to='/contact'>Contact Me</Button>
         </NavBtn>
      </Nav>
   );
};

export default Navbar;
