import React from 'react';

import './user.styles.scss';

import imageUrls from '../../data/image.data';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const User = (userData) => {
  const { user } = userData;
  const { address: { geo } } = user;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lng}`;
  const userWebsiteFullUrl = `https://${user.website}`;

  return (
    <Card className='text-center'>
      <Card.Img variant='top' src={imageUrls[user.id - 1]} />
      <Card.Body>
        <Card.Title title={user.name}>{user.name}</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item title={user.email}>{user.email}</ListGroup.Item>
        <ListGroup.Item>📱 {user.phone}</ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href={userWebsiteFullUrl}>{user.website}</Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant='primary' href={googleMapsUrl} target='_blank'>Find Me</Button>
      </Card.Body>
    </Card>
  );
}

export default User;
