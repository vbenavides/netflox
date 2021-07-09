import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// import { ArrowBackIosIcon } from '@material-ui/icons';
// import ArrowBackIosIcon from '@material-ui/icons';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const StyledList = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--dark-bg);
  /* margin: 0; */
  overflow: hidden;
  padding-top: 15px;
  /* padding: 20px 0; */

  /* overflow: scroll; */
  transition: all 1s ease;

  span {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  .sliderArrow {
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    cursor: pointer;
    top: 0;
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
  /* display: flex; */
  /* width: max-content; */
  position: relative;

  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  transition: 450ms opacity;
  padding: 20px 0;

  :hover .styled-card {
    /* opacity: 0.3; */
  }
  :hover .styled-card:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
    /* z-index: 10; */
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

  /* border-radius: 20px; */
  /* overflow: hidden; */
  /* position: relative; */
  display: inline-block;
  /* width: 200px; */
  /* height: 250px; */
  /* margin-right: 10px; */
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
      /* -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0); */
    }
  }
  .imgCard {
    /* position: relative; */
    width: 100%;
    object-fit: cover;
    /* z-index: 20; */
    overflow: hidden;
  }
`;

const StyledInfo = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  /* color: transparent; */
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 25;

  font-size: 10px;
  /* opacity: 0; */
  transition: 450ms opacity;
  /* padding: 10px;
  top: 0; */

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

  /* transition: all 0.5s; */
`;

const Carousel = ({ dataMovies, sliderName, handlerClickVideo }) => {
  // console.log(dataMovie);

  // const internalData = dataaa.slice(0, 5);
  const handleClick = (item) => {
    handlerClickVideo(item);
    // document.getElementsByTagName('html')[0].style.overflow = 'hidden';

    function disableScroll() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    }
    disableScroll();

    // handleFocus();
    // console.log(item);

    // function enableScroll() {
    //   window.onscroll = null;
    // }
  };

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClickArrow = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 35;
    if (direction === 'left' && slideNumber > 0) {
      // if (direction === 'left') {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${168 + distance}px)`;
      console.log(slideNumber);
      // console.log(distance);
    }
    if (direction === 'right' && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-168 + distance}px)`;
      console.log(slideNumber);
    }
    console.log(distance);
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
          dataMovies.slice(0, 9).map((item, i) => (
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
