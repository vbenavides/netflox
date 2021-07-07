import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Category from '../components/sections/Category';
import Carousel from '../components/sections/Carousel';
import {
  fetchMoviesList,
  fetchMoviesPopular,
  fetchMoviesComingSoon,
  fetchGenre,
} from '../components/service/index';
// const StyledMainContainer = styled.main`

// `

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesComing, setMoviesComing] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCategoryList(await fetchGenre());
      setMoviesList(await fetchMoviesList());
      setMoviesPopular(await fetchMoviesPopular());
      setMoviesComing(await fetchMoviesComingSoon());
    };

    fetchAPI();
    // console.log(categoryList);
  }, []);

  // console.log(moviesList);

  return (
    <Layout>
      <main>
        <Hero />
        <Category categoryList={categoryList} />
        <Carousel sliderName={'My List'} dataMovies={moviesList} />
        <Carousel sliderName={'Popular'} dataMovies={moviesPopular} />
        <Carousel sliderName={'Comming Soon'} dataMovies={moviesComing} />
      </main>
    </Layout>
  );
};

export default Home;
