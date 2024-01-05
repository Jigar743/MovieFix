import React, { useState } from "react";
import { StyledMovieCard } from "./MovieCard.styled";
import { getMovieDescription } from "../../Utils/Helper";

function MovieCard({ title, description, imageUrl, genre, voteAverage }, ref) {
  const [hover, setHover] = useState(false);

  return (
    <StyledMovieCard
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
    >
      <img className="movie-poster" src={imageUrl} alt={title} />
      {!hover && (
        <div className="movie-detail">
          <div className="first-section">
            <span className="movie-title">{title}</span>
            <span className="movie-genre">{genre}</span>
          </div>
          <span className="movie-vote-average">Rate: {voteAverage}</span>
        </div>
      )}
      {hover && (
        <div className="movie-description">
          {getMovieDescription(description)}
        </div>
      )}
    </StyledMovieCard>
  );
}

export default React.forwardRef(MovieCard);
