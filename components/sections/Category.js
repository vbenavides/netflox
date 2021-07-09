import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Anillo from '../content/category/anillo.jpg';
import ToyStory from '../content/category/toy-story.jpg';
import Mulan from '../content/category/mulan.jpg';
import StarsWar from '../content/category/stars-war.jpg';
import ToyStoryGif from '../content/category/gifs/toy-story.gif';

const StyledCategory = styled.section`
  width: 100%;
  background-color: black;
  margin: 0;
`;
const ToyStory2 = require('../content/category/toy-story.jpg');

const StyledCardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 30px;
  /* justify-content: space-between; */
  overflow: hidden;
  justify-content: center;

  /* display: grid; */
  /* margin: 0 7%;
  padding: 20px 0;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    grid-gap: 30px;
  }
`;

const StyledCard = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  height: 200px;
  /* border: 1px solid red; */
  z-index: 5;
  cursor: pointer;
  margin: 0;

  .img-category {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    z-index: 0;
    :hover {
      background-image: url(${ToyStoryGif});
    }
  }

  h4 {
    z-index: 5;
    margin: 5px 0;
  }
  p {
    z-index: 5;
    margin: 5px 0;
  }
`;

const Category = ({ categoryList }) => {
  // let toyStoryImg = () => document.querySelector('toyStoryImg');
  // toyStoryImg.addEventListener('mouseover', () => {
  //   toyStoryImg.src = { ToyStoryGif };
  // });

  return (
    // ***INTENTÉ HACERLO DINAMICO CON UNA CONSULTA A LA API Y COMBINAR EL RESULTADO DEL ARRAY Y MOSTRARLO CON UN MAP, LASTIMOSAMENTE NO ME SALIÓ :'V ***************
    //***************************************************** */
    // <StyledCategory>
    //   <StyledCardContainer>
    //     {categoryList &&
    //       categoryList.slice(0, 4).map((list) => (
    //         <StyledCard key={list.id}>
    //           <img className='img-category' src='' alt='' />
    //           <h4>{list.name}</h4>
    //           <p>52 Titles</p>
    //         </StyledCard>
    //       ))}
    //   </StyledCardContainer>
    // </StyledCategory>

    <StyledCategory>
      <StyledCardContainer>
        <StyledCard>
          {/* <img className='img-category' src={ToyStory2} alt='' /> */}
          <Image
            className='img-category toyStoryImg'
            src={ToyStory}
            layout='fill'
            alt='anillo'
            quality={100}
            // object-fit='cover'
          />
          <h4>Animation</h4>
          <p>52 Titles</p>
        </StyledCard>
        <StyledCard>
          <Image
            className='img-category'
            src={Mulan}
            layout='fill'
            alt='anillo'
            quality={100}
          />
          <h4>Animation</h4>
          <p>52 Titles</p>
        </StyledCard>
        <StyledCard>
          <Image
            className='img-category'
            src={StarsWar}
            layout='fill'
            alt='anillo'
            quality={100}
          />
          <h4>Animation</h4>
          <p>52 Titles</p>
        </StyledCard>
        <StyledCard>
          <Image
            className='img-category'
            src={Anillo}
            layout='fill'
            alt='anillo'
            quality={100}
          />
          <h4>Animation</h4>
          <p>52 Titles</p>
        </StyledCard>
      </StyledCardContainer>
    </StyledCategory>
  );
};

export default Category;
