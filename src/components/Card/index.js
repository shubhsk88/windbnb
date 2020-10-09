import React from 'react';
import { Container, Description, SuperHost, Rating } from './style';
import { AiFillStar } from 'react-icons/ai';

const Card = (props) => {
  const { photo, title, rating, beds, type, superHost } = props.apt;
  console.log(photo, title);
  return (
    <Container>
      <div className="photo">
        <img src={photo} className="image" alt={title} />
      </div>
      <Description>
        {superHost ? <SuperHost>SuperHost</SuperHost> : null}
        <div className="title">
          {type} {superHost ? <span>{beds} beds</span> : null}
        </div>
        <Rating>
          <AiFillStar />
          <span>{rating}</span>
        </Rating>
      </Description>
      <div className="details">{title}</div>
    </Container>
  );
};

export default Card;
