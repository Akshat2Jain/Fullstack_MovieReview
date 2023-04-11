import React from "react";
// import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Review from "./components/reviews/Review";
import WatchList from "./components/watchlist/WatchList";

const App = () => {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [loading,setLoading]=useState(true);
  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/movies/${movieId}`
      );

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
    setLoading(true)
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} loading={loading} />} />
          <Route paath="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Review
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
                loading={loading}
              />
            }
          />
          <Route path="/watchList" element={<WatchList movies={movies} loading={loading}/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
