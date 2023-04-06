import React from 'react';
import {
  Nav,
  NavLink,
  //Bars,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        
  
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Dive' activeStyle>
            Dive
          </NavLink>
          <NavLink to='/Fish' activeStyle>
            Fish
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;