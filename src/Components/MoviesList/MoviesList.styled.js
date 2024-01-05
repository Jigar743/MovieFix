import styled from "styled-components";

export const MovieListContainer = styled.div`
  margin: 20px 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px 10px;
  margin-top: 200px;

  > .movie-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .movie-release-year {
      font-size: 40px;
    }
    .movies-listing {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 20px;
      margin: 20px 0;
    }
  }
`;
