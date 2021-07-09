import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const StyledList = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--dark-bg);
  overflow: hidden;
  padding-top: 15px;
  transition: all 1s ease;

  span {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  .sliderArrow {
    width: 50px;
    height: 270px;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    cursor: pointer;
    top: 24px;
    bottom: 0;
    margin: auto;
    transition: all 1s ease;

    &.left {
      left: 3.2%;
      z-index: 1;
    }

    &.right {
      right: 3.2%;
    }
  }
`;

const StyledCarouselContainer = styled.div`
  position: relative;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  transition: 450ms opacity;
  padding: 20px 0;

  :hover .styled-card:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
  }
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
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;

  :hover ~ .styled-card {
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
  :hover {
    top: -10px;
    transition: top 0.3s;

    .info {
      display: flex;
    }
  }
  .imgCard {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const StyledInfo = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 25;
  font-size: 10px;
  transition: 450ms opacity;

  h5 {
    color: transparent;
    position: relative;
    top: 0;
    align-self: flex-start;
    padding-left: 10%;
    margin: 5px 0;
    font-size: 14px;
  }

  p {
    color: transparent;
    position: relative;
    top: 0;
    align-self: flex-start;
    padding-left: 10%;
    margin: 5px 0;
    font-size: 12px;
  }
  span:before {
    content: '';
    width: 20%;
    height: 100%;
    top: 0;
    position: absolute;
    background-color: transparent;
  }
  span {
    width: 80%;
    height: 1%;
    border-radius: 1px;
    background-color: transparent;
    position: relative;
    top: 0;
  }

  :hover {
    display: flex;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;

    h5 {
      position: relative;
      color: white;
      top: -10px;
      transition: 0.5s;
    }
    p {
      position: relative;
      color: gray;
      top: -10px;
      transition: 0.5s;
      font-size: 12px;
      font-weight: bold;
    }
    span:before {
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      background-color: white;
      transition: 0.5s;
    }
    span {
      position: relative;
      color: white;
      top: -10px;
      transition: 0.5s;
      box-shadow: inset 80% 0 0 0 white;
    }
  }
`;

const Carousel = ({ dataMovies, sliderName, handlerClickVideo }) => {
  const handleClick = (item) => {
    handlerClickVideo(item);

    function disableScroll() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    }
    disableScroll();
  };

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClickArrow = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 35;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${168 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 16) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-168 + distance}px)`;
    }
  };

  return (
    <StyledList>
      <span>{sliderName}</span>
      <ArrowLeftIcon
        className='sliderArrow left'
        onClick={() => handleClickArrow('left')}
        style={{ display: !isMoved && 'none' }}
      />
      <StyledCarouselContainer ref={listRef}>
        {dataMovies &&
          dataMovies.map((item, i) => (
            <StyledCard
              className='styled-card'
              onClick={() => handleClick(item)}
              key={i}
            >
              <img className='imgCard' src={item.poster} alt='' />
              <StyledInfo className='info'>
                <h5>{item.title}</h5>
                <p>2h 25m</p>
                <span></span>
              </StyledInfo>
            </StyledCard>
          ))}
      </StyledCarouselContainer>
      <ArrowRightIcon
        className='sliderArrow right'
        onClick={() => handleClickArrow('right')}
      />
    </StyledList>
  );
};

export default Carousel;
