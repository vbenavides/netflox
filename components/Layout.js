import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Background from '../components/Background';

const StyledContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Background />
      <StyledContent>
        <Nav />
        {props.children}
        <Footer />
      </StyledContent>
    </React.Fragment>
  );
};

export default Layout;
