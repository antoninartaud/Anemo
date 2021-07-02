import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(45deg, rgb(70, 90, 255), rgb(20, 45, 150), rgb(160, 0, 240), rgb(245, 127, 115));
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar
