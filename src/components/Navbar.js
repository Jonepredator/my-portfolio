import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { NavLink, useLocation, Link } from 'react-router-dom';
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

const NavLinks = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 .2rem .3rem;
    margin: 0 .8rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: .1rem;

    &:hover {
        transform: translateY(-2px) scale(1.1);
        transition: all 0.1s ease-in-out;
        border-bottom: 3px solid #E9B872;
    }

    &.active {
      border-bottom: 3px solid #E9B872;
    }
`;

const Logo = styled(Link)`
    ${NavLinks}
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

const NavMenuLinks = styled(NavLink)`
    ${NavLinks}

    &:hover {
        transform: translateY(.1)
    }
    &.active {
      border-bottom: 3px solid #E9B872;
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

            <NavMenuLinks to='/about' activeClassName='active' spy='true' >
               About
               </NavMenuLinks>
            <NavMenuLinks to='/knowledge' activeClassName='active' spy='true' >
               Knowledge
               </NavMenuLinks>
            <NavMenuLinks to='/projects' activeClassName='active' spy='true' >
               Projects
               </NavMenuLinks>

         </NavMenu>
         <NavBtn>
            <Button to='/contact' spy='true' >Contact Me</Button>
         </NavBtn>
      </Nav>
   );
};

export default Navbar;
