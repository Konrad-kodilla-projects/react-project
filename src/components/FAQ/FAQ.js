import React from 'react';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';

import { settings } from '../../data/dataStore';

const FAQ = () => {
  const {title, image, text} = settings.FAQ;
  return (
    <Container>
      <Hero titleText={title} img={image} />
      <h2>FAQ</h2>
      <p>{text}</p>
    </Container>
  );
};

export default FAQ;
