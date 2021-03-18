import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './header.styles.scss';

const Header = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Navbar.Brand href='/'>React Crud Example</Navbar.Brand>
    <Nav className='ml-auto'>
      <Nav.Link href='/'>Users</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
