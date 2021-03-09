import React from 'react';
import axios from 'axios';

import './App.scss';

import API_DATA from './services/api.data';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import User from './components/user/user.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  async getUserData() {
    const response = await axios(`${API_DATA.endpoint}/users/1`);
    return response.data;
  }

  componentDidMount() {
    if (!this.state.user) {
      this.getUserData()
        .then(userData => {
          this.setState({ user: userData });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div className='app'>
        <Container className='container'>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>React Crud Example</Navbar.Brand>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Users</Nav.Link>
            </Nav>
          </Navbar>
          <Row>
            <Col>
              {user ?
                <User user={user} />
                :
                <em>Retrieving User...</em>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
