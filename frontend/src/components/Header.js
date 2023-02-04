import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: "purple",
}

const Header = ({title}) => {
  return (
    <Navbar style={navbarStyle} variant='dark'>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;

