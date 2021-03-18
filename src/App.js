import React from 'react';
import axios from 'axios';

import './App.scss';

import API_DATA from './data/api.data';

import Container from 'react-bootstrap/Container';
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
        <Container fluid='xl'>
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
