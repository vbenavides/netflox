import Image from 'next/image';
import bgImg from './content/bg.jpg';
import styled from 'styled-components';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 195%;
  z-index: -20;

  @media (max-width: 425px) {
    height: 100%;
  }

  @media (max-width: 1440px) {
    height: 175%;
  }

  .bgStyle {
    /* position: fixed; */
    /* margin-top: 50px; */
    /* position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%; */
    /* height: 100%; */
    object-fit: cover;
    /* height: 100%; */
  }
`;

const Background = () => (
  <StyledBackground>
    <Image
      className='bgStyle'
      alt='bg'
      src={bgImg}
      layout='fill'
      // objectFit='cover'
      quality={100}
    />
  </StyledBackground>
);

export default Background;
