import styled from "styled-components";

export const StyledListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #333;
  color: white;
`;

export const RootLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTopbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  width: 100%;
  height: 20vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
  z-index: 1000;
`;

export const StyledNavbar = styled.header`
  margin-top: 10px;
  > span {
    color: red;
    font-size: larger;
    white-space: normal;
    font-weight: 500;
    letter-spacing: 3px;
  }
`;
