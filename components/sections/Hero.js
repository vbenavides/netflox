import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// import bgImg from '../content/bg.jpg';

const StyledHero = styled.section`
  margin: 0;
  background-image: url('../content/bg.jpg');

  .bgImg {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      {/* <Image src={bgImg} className='bgImg' /> */}
      <p>Hero</p>
    </StyledHero>
  );
};

export default Hero;
