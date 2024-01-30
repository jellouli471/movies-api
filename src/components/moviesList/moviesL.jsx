import { useEffect, useState } from "react";
import "./moviesL.css";

const MoviesL = () => {
  const apiKey = "484f0218a0692fd52581902570f6b330";
  const [moves, setMoves] = useState([]);
  useEffect(() => {


    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMoves(data.results);
      });
  }, []);


  return (
    <div className="Movies-home">
      <div className="title-sect">
        <p>Movie Liste</p>
      </div>
      <div className="list-movies">
        <div className="card-list">
          {moves.map(item=>(
            <div className="cardd" key={item}>
            <div className="card-img">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path
              }`}
                alt=""
              />
            </div>
            <a href="">
              <div className="card-details">
                <div className="title-card-movies">
                  <h1>{item.title}</h1>
                </div>
                <div className="rete-movie">
                  <h4>imdb : {item.vote_average}</h4>
                </div>
                <div className="movies-categores" key={item}>
                  <div className="cat-1">
                    <span>drama</span>
                  </div>
                  <div className="cat-2">
                    <span>comdey</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default MoviesL;
