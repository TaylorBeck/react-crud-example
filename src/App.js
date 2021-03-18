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
      users: null
    };
  }

  async getUsersData() {
    try {
      const response = await axios(`${API_DATA.endpoint}/users`);
      return response.data;
    } catch(error) {
      console.error(error);
    }
  }

  componentDidMount() {
    if (!this.state.user) {
      this.getUsersData()
        .then(usersData => {
          this.setState({ users: usersData });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className='app'>
        <Container className='container'>
          <Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>React Crud Example</Navbar.Brand>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Users</Nav.Link>
            </Nav>
          </Navbar>
          <Row>
            {users ? users.map(user => {
              return (
                <Col lg={3} md={4} sm={6} xs={12}>
                  <User key={user.id} user={user} />
                </Col>
              );
            })
            :
              <em>Retrieving Users...</em>
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
