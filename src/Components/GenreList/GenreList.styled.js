import styled from "styled-components";

export const GenreListContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Genre = styled.span`
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${(props) =>
    props.red ? "red" : "hsl(0deg 1.41% 43.01%)"};
`;
