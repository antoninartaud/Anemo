import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    margin:0;
    flex-flow: column nowrap;
    background: linear-gradient(45deg, rgb(70, 90, 255), rgb(20, 45, 150), rgb(160, 0, 240), rgb(245, 127, 115));
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      text-align: center;
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Log In</li>
            <li>Sign Up</li>
        </Ul>
    )
}

export default RightNav
