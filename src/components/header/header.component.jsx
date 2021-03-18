import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './header.styles.scss';

const Header = () => (
  <Navbar bg='dark' variant='dark' expand='sm'>
    <Navbar.Brand href='/'>React Crud Example</Navbar.Brand>
    <Navbar.Toggle aria-controls="collapsable-nav" />
    <Navbar.Collapse id='collapsable-nav'>
      <Nav className='ml-auto'>
        <Nav.Link href='/'>Users</Nav.Link>
        <Nav.Link href='/'>Posts</Nav.Link>
        <Nav.Link href='/'>Comments</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
