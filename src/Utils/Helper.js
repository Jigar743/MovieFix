export const getGenresOfMovie = (movieGenres, genreIds) => {
  const Genres = genreIds
    .map((id) => {
      return movieGenres.find((v) => v.id === id).name;
    })
    .join(", ");
  return Genres;
};

export const getMovieDescription = (desc) => {
  const words = desc.split(" ");

  if (words.length > 60) {
    var originalDesc = words.slice(0, 60).join(" ");
    return originalDesc + "...";
  }
  return desc;
};
