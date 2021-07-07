import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledList = styled.section`
  width: 100%;
  /* position: relative; */
  background-color: var(--dark-bg);
  margin: 0;
  overflow: hidden;
  padding-top: 15px;

  span {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  width: max-content;
  /* width: 100%; */
  /* grid-template-columns: repeat(9, minmax(120px, 1fr)); */
  /* grid-template-columns: repeat(9, 220px); */
  /* grid-gap: 1px; */
`;

const StyledCard = styled.div`
  background-color: grey;
  position: relative;
  top: 0;
  left: 0;
  width: 170px;
  height: 230px;
  border: 1px solid rgba(133, 133, 133, 0.2);
  margin-top: 10px;
  margin-right: 15px;
  border-radius: 5px;
  overflow: hidden;

  :hover {
    top: -10px;
    transition: top 0.3s;
  }

  .imgCard {
    width: 100%;
    object-fit: cover;
    z-index: 0;
    /* overflow: hidden; */
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  /* color: transparent; */
  bottom: 0px;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 25;

  :hover {
    display: flex;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h5 {
    color: transparent;
    position: relative;
    top: 0;

    :hover {
      position: relative;
      color: white;
      top: -10px;
      transition: 0.5s;
    }
  }

  /* transition: all 0.5s; */
`;

const Carousel = ({ dataMovies, sliderName }) => {
  // console.log(dataMovie);

  // const internalData = dataaa.slice(0, 5);

  return (
    <StyledList>
      <span>{sliderName}</span>
      <StyledCarouselContainer>
        {dataMovies &&
          dataMovies.slice(0, 9).map((item, i) => (
            <StyledCard key={i}>
              <img className='imgCard' src={item.poster} alt='' />
              <StyledInfo>
                <h5>{item.title}</h5>
                <p>2h 25m</p>
                <span>-------</span>
              </StyledInfo>
            </StyledCard>
          ))}
      </StyledCarouselContainer>
    </StyledList>
  );
};

export default Carousel;
