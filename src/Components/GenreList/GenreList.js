import React from "react";
import { Genre, GenreListContainer } from "./GenreList.styled";

export default function GenreList({
  genreList,
  handleSelectedGenreList,
  selectedGenreList,
}) {
  const genreSelect = (val) => {
    handleSelectedGenreList(val);
  };

  const isSelectedGenre = (id) => {
    return selectedGenreList?.find((v) => v === id);
  };

  return (
    <GenreListContainer>
      {genreList?.map((v) => (
        <Genre
          red={isSelectedGenre(v.id)}
          onClick={() => genreSelect(v.id)}
          key={v.id}
        >
          {v.name}
        </Genre>
      ))}
    </GenreListContainer>
  );
}
