import React from 'react';
import axios from 'axios';

import './App.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import API_DATA from './services/api.data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alert: ''
    };
  }

  async getUserData() {
    const response = await axios(`${API_DATA.endpoint}/users/1`);
    return response.data;
  }

  componentDidMount() {
    if (!this.state.user) {
      this.getUserData()
        .then(data => {
          this.setState({ user: data, alert: 'User found!' });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const currentUser = this.state.user;
    return (
      <div className='app'>
        <Container className='container'>
          {this.state.alert ?
            <Row>
              <Col>
                <Alert variant='primary'>{this.state.alert}</Alert>
              </Col>
            </Row>
            :
            null
          }
          <Row>
            <Col>
              {currentUser ?
                <div>
                  <h3>USER {currentUser.id}</h3>
                  <h4>{currentUser.name}</h4>
                  <p><strong>Username: {currentUser.username}</strong></p>
                  <em>Email: {currentUser.email}</em>
                  <p>Phone: {currentUser.phone}</p>
                  <p>Website: {currentUser.website}</p>

                  <pre>{JSON.stringify(currentUser)}</pre>
                </div>
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
