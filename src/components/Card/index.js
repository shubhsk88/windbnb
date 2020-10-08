import React from 'react';
import { Container, Description, SuperHost, Rating } from './style';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ photo, title, rating, beds, type, superHost }) => {
  return (
    <Container>
      <img src={photo} class="image" alt={title} />
      <Description>
        {superHost ? <SuperHost>SuperHost</SuperHost> : null}
        <div class="title">
          {type} {superHost ? <span>{beds}</span> : null}
        </div>
        <Rating>
          <AiFillStar />
          <span>{rating}</span>
        </Rating>
      </Description>
      <div class="details">{title}</div>
    </Container>
  );
};

export default Card;
