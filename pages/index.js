import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Category from '../components/sections/Category';
import MyList from '../components/sections/MyList';
import Popular from '../components/sections/Popular';
import ComingSoon from '../components/sections/ComingSoon';

// const StyledMainContainer = styled.main`

// `

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Category />
        <MyList />
        <Popular />
        <ComingSoon />
      </main>
    </Layout>
  );
};

export default Home;
