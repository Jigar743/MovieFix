import styled from "styled-components";

export const StyledMovieCard = styled.div`
  height: 450px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  > .movie-poster {
    width: 100%;
    height: 100%;
    object-fit: fill;
    filter: brightness(0.9);
  }

  > .movie-detail {
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 0;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    > .first-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      > .movie-title {
        font-size: x-large;
        font-weight: 400;
      }
      > .movie-genre {
        font-size: medium;
        font-weight: 300;
      }
    }
    > .movie-vote-average {
      background-color: blue;
      color: white;
      padding: 5px 10px;
      white-space: nowrap;
      border-radius: 5px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  > .movie-description {
    position: absolute;
    z-index: 1;
    width: 85%;
    height: 50%;
    color: white;
    top: 0;
    padding: 30px;
    transform: translate(0, 10%);
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: large;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;
