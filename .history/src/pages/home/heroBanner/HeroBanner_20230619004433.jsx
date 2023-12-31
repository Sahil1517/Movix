import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=> state.home )

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
       const bg = url.backdrop +  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
       setBackground(bg);
  },[data])

const searchQueryHandeler = (event) =>{
if(event.key === "Enter" && query.length > 0) {
     navigate(`/search/${query}`)
}
}


  return (
    <div className="heroBanner">

      <div className="backdrop-img">
      <Img src={background}/>
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
