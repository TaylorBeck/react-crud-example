import React from 'react';

import UserProfileCard from '../user-profile-card/user-profile-card.component';

import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const UserProfilesList = ({ users }) => (
  users ? users.map(user => {
    return (
      <Col key={user.id} lg={3} md={4} sm={6} xs={12}>
        <UserProfileCard user={user} />
      </Col>
    );
  })
  :
  <Col className='text-center'>
    <Spinner animation='border' role='status' />
  </Col>
);

export default UserProfilesList;
