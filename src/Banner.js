import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "./axios";
import requests from "./Request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const data = requests.fetchNetflixOriginals;
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(data);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    };

    fetchData();
  }, [data]);

  const trancate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) * "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__content__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My PlayList</button>
        </div>
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
