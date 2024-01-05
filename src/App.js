import Layout from "./Components/Layout";
import MovieListingPage from "./Page/MovieListingPage/MovieListingPage";
import { GlobalStyle } from "./styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <MovieListingPage />
      </Layout>
    </>
  );
}

export default App;
