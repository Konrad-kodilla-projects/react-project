import React from 'react';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';

import { settings } from '../../data/dataStore';

const Info = () => {
  const {title, image, text} = settings.info;
  return (
    <Container>
      <Hero titleText={title} img={image} />
      <h2>Info</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Info;
