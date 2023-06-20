import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
const Genres = ({data}) =>{
    const {genres} = useSelector((state)=> state.home);
    return (
        <div className="genres">
            {data?.map((g)=>{
                
            })}
        </div>
    )
}

        
 

export default Genres;