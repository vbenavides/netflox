import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHero = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 500px;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 5;

  @media (min-width: 460px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 350px;
  }

  @media (min-width: 1440px) {
    height: 500px;
  }

  @media (min-width: 2560px) {
    height: 800px;
  }
`;

const StyledHeroCotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 2%;

  h1 {
    font-family: var(--font-arial);
    font-size: 55px;
    font-weight: 900;
    line-height: 90%;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;

  .play-bt {
    display: flex;
    align-items: center;
    background-color: var(--purple-color-bt);
    font-family: var(--font-arial);
    font-weight: bold;
    color: White;
    width: 25%;
    height: 40px;
    border-radius: 50px;
    margin-right: 2%;
    border: none;
    padding: 0 4%;

    span {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  .list-bt {
    display: flex;
    align-items: center;
    background-color: white;
    font-family: var(--font-arial);
    font-weight: bold;
    width: 25%;
    height: 40px;
    border-radius: 50px;
    border: none;
    padding: 0 4%;

    span {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroCotainer>
        <h1>
          RAYA AND THE <br /> LAST DRAGON
        </h1>
        <StyledButtons>
          <button className='play-bt'>
            <span>
              PLAY <br /> NOW
            </span>
          </button>
          <button className='list-bt'>
            <span>
              WATCH <br /> LIST
            </span>
          </button>
        </StyledButtons>
      </StyledHeroCotainer>
    </StyledHero>
  );
};

export default Hero;
