import React from 'react';

import './user.styles.scss';

import imageUrls from '../../data/image.data';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const User = (userData) => {
  const { user } = userData;
  const { address: { geo } } = user;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lon}`;
  const userWebsiteFullUrl = `https://${user.website}`;

  return (
    <Card>
      <Card.Img className='user-image' variant='top' src={imageUrls[user.id - 1]} />
      <Card.Body>
        <Card.Title className='text-center name'>{user.name}</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
        <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
        <ListGroup.Item className='text-center'>
          <Card.Link href={userWebsiteFullUrl}>{user.website}</Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button className='text-center' variant="primary" href={googleMapsUrl}>Find Me</Button>
      </Card.Body>
    </Card>
  );
}

export default User;
