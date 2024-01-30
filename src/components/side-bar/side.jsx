import { useEffect, useState } from "react";
import "./side.css";

const Side = () => {
  const api = "484f0218a0692fd52581902570f6b330";
  const urlTrend = "https://api.themoviedb.org/3/trending/movie/week?api_key=";

  const [trendmo, setTrendmo] = useState([]);

  useEffect( () => {
     fetch(`${urlTrend}${api}`)
      .then((res) => res.json())
       .then((data) => {
        setTrendmo(data.results);
      });
      
  },[]);
  if (trendmo[0] === 'title') {
  return  console.log(true); 
  }else{
    console.log(false);
  }
  return (
    <div className="sidd">
      <div className="logo-brows">
        <div className="logo">
          <h1>
            Abdo.<span>Dev</span>
          </h1>
        </div>
        <div className="links">
          <a href="">
            <i className="fa-brands fa-safari"></i>Browse
          </a>
          <a href="">
            <i className="fa-regular fa-heart"></i>Watchlist
          </a>
        </div>
      </div>
      {/*this part for card top moves */}
      <div className="top-moves">
        <div className="title-sec">
          <h4>
            Top <span>Moves</span>
          </h4>
        </div>
        <div className="moves-lis">
          <div className="top-card">
            <div className="img-mov">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </div>
            <div className="nam-mov">
              <p>shadow and bone</p>
            </div>
          </div>
          <div className="top-card">
            <div className="img-mov">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </div>
            <div className="nam-mov">
              <p>shadow and bone</p>
            </div>
          </div>
          <div className="top-card">
            <div className="img-mov">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </div>
            <div className="nam-mov">
              <p>shadow and bone</p>
            </div>
          </div>
          <div className="top-card">
            <div className="img-mov">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </div>
            <div className="nam-mov">
              <p>shadow and bone</p>
            </div>
          </div>
          <div className="top-card">
            <div className="img-mov">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY0ZjliOGUtMDFiZS00YzcwLWFiZWYtMzg4MWZkMWIwYzYwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </div>
            <div className="nam-mov">
              <p>shadow and bone</p>
            </div>
          </div>
        </div>
      </div>

      {/*this part for login  */}
      <div className="log-in">
        <a href="">
          <i className="fa-solid fa-door-open"></i>Log Out
        </a>
      </div>
    </div>
  );
};

export default Side;
