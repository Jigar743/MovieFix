import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body{
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  /* WebKit Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #333;
  }
  /* Firefox Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #333 #f5f5f5;

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #333;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }

`;
