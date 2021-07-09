import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Category from '../components/sections/Category';
import Carousel from '../components/sections/Carousel';
import MovieDetail from '../components/sections/MovieDetail';
import {
  fetchMoviesList,
  fetchMoviesPopular,
  fetchMoviesComingSoon,
  fetchGenre,
  fetchMovieVideos,
  fetchDiscoverMovie,
} from '../components/service/index';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  position: relative;
`;

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesComing, setMoviesComing] = useState([]);
  const [moviesVideos, setMoviesVideos] = useState([]);
  const [videoItem, setVideoItem] = useState('');
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const handlerClickVideo = async (item) => {
    setVideoItem(item);
    setMoviesVideos(await fetchMovieVideos(item.id));
    setIsOnScreen(true);
  };

  const backToList = () => {
    setMoviesVideos(null);
    setIsOnScreen(false);
    function enableScroll() {
      window.onscroll = null;
    }
    enableScroll();
  };

  const fetchCateryData = async (categoryList) => {
    try {
      const promises = categoryList.map(async (category) => {
        return await fetchDiscoverMovie(category.id);
      });
      const result = await Promise.all(promises);
      const dataa = result.forEach((array) => {
        return array[1];
      });
      console.log(dataa);
      return dataa;
    } catch (err) {}
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setCategoryList(await fetchGenre());
      setMoviesList(await fetchMoviesList());
      setMoviesPopular(await fetchMoviesPopular());
      setMoviesComing(await fetchMoviesComingSoon());
      setCategoryData(await fetchCateryData(categoryList));
    };

    fetchAPI();
  }, []);

  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <Category
          moviesList={moviesList}
          categoryData={categoryData}
          categoryList={categoryList}
        />
        <Carousel
          handlerClickVideo={handlerClickVideo}
          sliderName={'My List'}
          dataMovies={moviesList}
        />
        <Carousel
          handlerClickVideo={handlerClickVideo}
          sliderName={'Popular'}
          dataMovies={moviesPopular}
        />
        <Carousel
          handlerClickVideo={handlerClickVideo}
          sliderName={'Comming Soon'}
          dataMovies={moviesComing}
        />
        <MovieDetail
          isOnScreen={isOnScreen}
          videoItem={videoItem}
          moviesVideos={moviesVideos}
          backToList={backToList}
        />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home;
