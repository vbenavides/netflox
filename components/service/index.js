import axios from 'axios';

const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const popularUrl = `${url}/movie/popular`;
const movieUrl = `${url}/movie`;
const comingSoonUrl = `${url}/movie/upcoming`;

const genreUrl = `${url}/genre/movie/list`;

export const fetchMoviesList = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      category: m['genre_ids'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));
    // console.log(modifiedData);

    return modifiedData;
  } catch (error) {}
};

export const fetchMoviesPopular = async () => {
  try {
    const { data } = await axios.get(popularUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchMoviesComingSoon = async () => {
  try {
    const { data } = await axios.get(comingSoonUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const modifiedData = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name'],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data['results'][0];
  } catch (error) {}
};
