import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [serchename, setSerchename] = useState('');

  const keyser = () => {
    const getname = document.querySelector("#serbyname");
    const dataname = getname.value;
    if (dataname.length >= 3) {
      setSerchename(dataname);
    } else {
      console.log("writr abov 3");
    }
  };

  const apiKeySer = "484f0218a0692fd52581902570f6b330";

  const urlSerch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKeySer}&query=${serchename}`;

  const [resserche, setResserche] = useState([]);

  useEffect(() => {
    fetch(urlSerch)
      .then((res) => res.json())
      .then((data) => {
        setResserche(data.results);
      });
  }, [urlSerch]);

  console.log(resserche);

  return (
    <div className="header-sec">
      <div className="serch">
        <div className="sear-ico">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="inp">
          <input
            type="text"
            id="serbyname"
            onKeyUp={keyser}
            placeholder="search everything"
          />
          <div className="resssercheinp">
            {resserche.map((item) => (
              <ul key={item}>
                <li>
                  <a href="">{item.title} </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="prof-notif">
        <div className="message">
          <i className="fa-solid fa-inbox"></i>
        </div>
        <div className="notifc">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="profilee">
          <img
            src="https://i.pinimg.com/originals/ff/56/b2/ff56b24842dee0bfd0faf2775890b45d.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
