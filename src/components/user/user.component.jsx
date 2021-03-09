import React from 'react';

import './user.styles.scss';

import imageUrls from '../../data/image.data';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const User = (userData) => {
  const { user } = userData;
  const userWebsiteFullUrl = `https://${user.website}`;

  const { address } = user;
  const 
  return (
    <Card>
      <Card.Img className='user-image' variant='top' src={imageUrls[user.id - 1]} />
      <Card.Body>
        <Card.Title className='text-center'>{user.name}</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
        <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={userWebsiteFullUrl}>{user.website}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default User;
