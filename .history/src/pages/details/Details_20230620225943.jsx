import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import video from './videosSection/VideosSection'
const Details = () => {
  const {mediaType, id} = useParams();
  const{data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const{data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    <Cast data={credits?.cast} loading={creditsLoading}/>
    </div>
  );
}

export default Details;