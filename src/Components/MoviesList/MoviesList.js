import React, { useCallback, useRef } from "react";
import { getGenresOfMovie } from "../../Utils/Helper";
import { MovieListContainer } from "./MoviesList.styled";
import MovieCard from "../MovieCard/MovieCard";
import LoadingCmp from "../LoadingCmp/LoadingCmp";

export default function MoviesList({
  movieGenres,
  movies,
  loading,
  descreaseYear,
  increaseYear,
}) {
  const topObserver = useRef();
  const topElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (topObserver.current) topObserver.current.disconnect();
      topObserver.current = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].boundingClientRect.top < 0 &&
            entries[0].isIntersecting
          ) {
            descreaseYear();
          }
        },
        { threshold: 0.1 }
      );

      if (node) topObserver.current.observe(node);
    },
    [descreaseYear, loading]
  );

  const bottomObserver = useRef();
  const bottomElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (bottomObserver.current) bottomObserver.current.disconnect();
      bottomObserver.current = new IntersectionObserver(
        (entries) => {
          const windowHeight = window.innerHeight;
          const isBottomVisible =
            entries[0].boundingClientRect.bottom > windowHeight;

          if (entries[0].isIntersecting && isBottomVisible) {
            increaseYear();
          }
        },
        { threshold: 0.1 }
      );

      if (node) bottomObserver.current.observe(node);
    },
    [increaseYear, loading]
  );

  return (
    <MovieListContainer>
      {movies?.map((v, rowIndex) => {
        return (
          <div key={Number(v.releaseYear)} className="movie-wrapper">
            <h1 className="movie-release-year">{v.releaseYear}</h1>
            <div className="movies-listing">
              {v.list?.map((movie, columnIndex) => {
                if (rowIndex === 0 && columnIndex === 0) {
                  return (
                    <MovieCard
                      ref={topElementRef}
                      key={movie.id}
                      imageUrl={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                      title={movie.original_title}
                      description={movie.overview}
                      genre={getGenresOfMovie(movieGenres, movie.genre_ids)}
                      voteAverage={movie.vote_average}
                    />
                  );
                } else if (
                  movies.length === rowIndex + 1 &&
                  v.list.length === columnIndex + 1
                ) {
                  return (
                    <MovieCard
                      ref={bottomElementRef}
                      key={movie.id}
                      imageUrl={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                      title={movie.original_title}
                      description={movie.overview}
                      genre={getGenresOfMovie(movieGenres, movie.genre_ids)}
                      voteAverage={movie.vote_average}
                    />
                  );
                } else {
                  return (
                    <MovieCard
                      ref={null}
                      key={movie.id}
                      imageUrl={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                      title={movie.original_title}
                      description={movie.overview}
                      genre={getGenresOfMovie(movieGenres, movie.genre_ids)}
                      voteAverage={movie.vote_average}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
      {loading && <LoadingCmp />}
    </MovieListContainer>
  );
}
