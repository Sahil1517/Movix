import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
const Details = () => {
  const {mediaType, id} = useParams();
  
  return (
    <div>Details</div>
  )
}

export default Details