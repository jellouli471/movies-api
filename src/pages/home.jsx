import "./home.css";

import Side from "../components/side-bar/side";
import Header from "../components/header/header";
import CoverMovie from "../components/coverMovie/coverMovie";
import MoviesL from "../components/moviesList/moviesL";
const Home = () => {
  return (
    <div className="returnto">
      <div className="side-and-header">
        <div className="sidehome">
          <Side />
        </div>
        <div className="header">
          <Header />
          <CoverMovie />
          <MoviesL />
        </div>
      </div>
    </div>
  );
};

export default Home;
