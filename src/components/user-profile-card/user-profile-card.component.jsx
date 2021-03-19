import React from 'react';

import './user-profile-card.styles.scss';

import imageUrls from '../../data/image.data';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserImage = ({ imageUrl }) => (
  <Card.Img variant='top' src={imageUrl} />
);

const UserName = ({ name }) => (
  <Card.Body>
    <Card.Title title={name}>{name}</Card.Title>
  </Card.Body>
);

const UserContactDetails = ({ email, phone, website }) => {
  const userWebsiteFullUrl = `https://${website}`;
  return (
    <ListGroup className='list-group-flush'>
      <ListGroup.Item title={email}>{email}</ListGroup.Item>
      <ListGroup.Item>📱 {phone}</ListGroup.Item>
      <ListGroup.Item>
        <Card.Link href={userWebsiteFullUrl}>{website}</Card.Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

const UserProfileCard = (userData) => {
  const { user } = userData;

  return (
    <Card className='text-center'>
      <UserImage imageUrl={imageUrls[user.id - 1]} />
      <UserName name={user.name} />
      <UserContactDetails email={user.email} phone={user.phone} website={user.website} />
    </Card>
  );
}

export default UserProfileCard;
