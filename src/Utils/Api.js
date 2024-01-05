import axios from "axios";

const ApiKey = "2dca580c2a14b55200e784d157207b4d";

const baseUrl = "https://api.themoviedb.org/3";

export async function fetchMovieGenre() {
  const params = {
    language: "en",
    api_key: ApiKey,
  };
  const url = `${baseUrl}/genre/movie/list`;

  try {
    const response = await axios.get(url, {
      params,
    });

    if (response.status === 200) {
      return response.data.genres;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function fetchMovieList(year) {
  const params = {
    api_key: ApiKey,
    sort_by: "popularity.desc",
    primary_release_year: year,
  };

  const url = `${baseUrl}/discover/movie`;

  try {
    const response = await axios.get(url, {
      params,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
