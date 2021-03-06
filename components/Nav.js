import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import UserImg from './content/user.jpg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 4%;
  z-index: 50;
  transition: all ease 0.5s;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  :hover {
    background-color: black;
    transition: all ease 0.5s;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLinks = styled.div`
  display: flex;

  ol {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;

      a {
        padding-right: 10px;
        text-decoration: none;
        color: var(--white-font);

        @media (min-width: 768px) {
          padding-right: 20px;
        }

        @media (min-width: 1024px) {
          padding-right: 25px;
        }
      }
    }
  }
`;

const StyledImg = styled.div`
  display: flex;
  align-items: center;

  .userImg {
    border-radius: 50%;
  }
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <ol>
            <li>
              <a href='/'>HOME</a>
              <a href='/'>MOVIES</a>
              <a href='/'>SERIES</a>
              <a href='/'>KIDS</a>
            </li>
          </ol>
        </StyledLinks>
        <StyledImg>
          <Image
            className='userImg'
            src={UserImg}
            alt='pic'
            width={50}
            height={50}
          />
        </StyledImg>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
