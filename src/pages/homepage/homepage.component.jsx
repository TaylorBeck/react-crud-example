import React from 'react';

import { getUsers } from '../../api/UserAPI';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import UserProfilesList from '../../components/user-profiles-list/user-profiles-list.component';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    if (!this.state.users) {
      getUsers()
        .then(usersData => {
          this.setState({ users: usersData });
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        });
    }
  }

  render() {
    const { users } = this.state;
    return (
      <Container fluid='xl'>
        <Row>
          <UserProfilesList users={users} />
        </Row>
      </Container>
    );
  }
}

export default HomePage;
