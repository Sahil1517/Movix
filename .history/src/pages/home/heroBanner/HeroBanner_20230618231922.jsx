import React,{useState} from "react";
import "./style.scss";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

const searchQueryHandeler = (event) =>{

}


  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, Tv shows and people to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
            type="text"
            placeholder="search for a movie or tv show...."
            
            />
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
