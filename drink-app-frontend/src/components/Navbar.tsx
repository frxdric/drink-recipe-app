import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  
  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>Luxury Cocktails</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Recipes</NavLink>
        <NavLink href="#">Submit Recipes</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
