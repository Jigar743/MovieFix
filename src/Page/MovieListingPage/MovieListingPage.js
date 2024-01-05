import React, { useEffect, useReducer, useState } from "react";
import { fetchMovieGenre, fetchMovieList } from "../../Utils/Api";
import MoviesList from "../../Components/MoviesList/MoviesList";
import { movieGenreConstants } from "../../Utils/Constants";
import Topbar from "../../Components/Layout/Topbar/Topbar";
import { StyledListingContainer } from "../../styles/MainLayout.styled";
import { debounce } from "lodash";

const initialState = {
  genreLoading: false,
  genres: [],
  error: false,
  errorMessage: "",
  movies: [],
  moviesLoader: false,
  selectedGenreList: [],
};

const movieGenreReducer = (state, action) => {
  switch (action.type) {
    case movieGenreConstants.GenreLoading:
      return { ...state, loading: action.payload };
    case movieGenreConstants.GenreList:
      return { ...state, genres: action.payload };
    case movieGenreConstants.Error:
      return { ...state, error: action.payload };
    case movieGenreConstants.MoviesLoader:
      return { ...state, moviesLoader: action.payload };
    case movieGenreConstants.MoviesList:
      return { ...state, movies: action.payload };
    case movieGenreConstants.SelectedGenreList:
      return { ...state, selectedGenreList: action.payload };
    default:
      return state;
  }
};

export default function MovieListingPage() {
  const [state, dispatch] = useReducer(movieGenreReducer, initialState);
  const [prevMovieReleaseYear, setPrevMovieReleaseYear] = useState(2012);
  const [nextMovieReleaseYear, setNextMovieReleaseYear] = useState(2012);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: movieGenreConstants.GenreLoading, payload: true });
        const List = await fetchMovieGenre();

        dispatch({ type: movieGenreConstants.GenreList, payload: List });
      } catch (error) {
        dispatch({ type: movieGenreConstants.Error, payload: true });
      } finally {
        dispatch({ type: movieGenreConstants.GenreLoading, payload: false });
      }
    })();
  }, []);

  const fetchMovies = async (year, isTop) => {
    try {
      dispatch({ type: movieGenreConstants.MoviesLoader, payload: true });
      const movies = await fetchMovieList(year);

      const movieObj = {
        releaseYear: year,
        list: movies.results,
      };
      const updatedMovies = state.movies;

      if (isTop) {
        updatedMovies.unshift(movieObj);
      } else {
        updatedMovies.push(movieObj);
      }

      dispatch({
        type: movieGenreConstants.MoviesList,
        payload: updatedMovies,
      });
    } catch (error) {
      dispatch({
        type: movieGenreConstants.Error,
        payload: true,
      });
    } finally {
      dispatch({ type: movieGenreConstants.MoviesLoader, payload: false });
    }
  };

  const debouncedFetchMovies = debounce(fetchMovies, 0);

  useEffect(() => {
    debouncedFetchMovies(2012, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const descreaseYear = () => {
    setPrevMovieReleaseYear((year) => {
      debouncedFetchMovies(year - 1, true);
      return year - 1;
    });
  };

  const increaseYear = () => {
    setNextMovieReleaseYear((year) => {
      debouncedFetchMovies(year + 1, false);
      return year + 1;
    });
  };

  const handleSelectedGenreList = (val) => {
    let updatedSelectedGenreList = state.selectedGenreList;
    if (updatedSelectedGenreList.includes(val)) {
      dispatch({
        type: movieGenreConstants.SelectedGenreList,
        payload: updatedSelectedGenreList.filter((v) => v !== val),
      });
    } else {
      updatedSelectedGenreList.push(val);
      dispatch({
        type: movieGenreConstants.SelectedGenreList,
        payload: updatedSelectedGenreList,
      });
    }
  };

  return (
    <StyledListingContainer>
      <Topbar
        loading={state.genreLoading}
        genreList={state.genres}
        handleSelectedGenreList={handleSelectedGenreList}
        selectedGenreList={state.selectedGenreList}
      />
      <MoviesList
        loading={state.moviesLoader}
        movieGenres={state.genres}
        movies={state.movies}
        descreaseYear={descreaseYear}
        increaseYear={increaseYear}
      />
    </StyledListingContainer>
  );
}
