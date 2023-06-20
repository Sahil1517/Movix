import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
       const bg = data.results[Math.floor(Math.random() * 20)].ba
  },[data])

const searchQueryHandeler = (event) =>{
if(event.key === "Enter" && query.length > 0) {
     navigate(`/search/${query}`)
}
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
            onChange={(e)=> setQuery(e.target.value)
              
            }
            onKeyUp={searchQueryHandeler}
            />
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
