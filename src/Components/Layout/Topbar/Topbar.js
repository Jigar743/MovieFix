import React from "react";
import Header from "../Header/Header";
import LoadingCmp from "../../LoadingCmp/LoadingCmp";
import GenreList from "../../GenreList/GenreList";
import { StyledTopbar } from "../../../styles/MainLayout.styled";

export default function Topbar({
  loading,
  genreList,
  handleSelectedGenreList,
  selectedGenreList,
}) {
  if (loading) {
    return <LoadingCmp />;
  }

  return (
    <StyledTopbar>
      <Header />
      <GenreList
        genreList={genreList}
        handleSelectedGenreList={handleSelectedGenreList}
        selectedGenreList={selectedGenreList}
      />
    </StyledTopbar>
  );
}
