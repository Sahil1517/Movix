import { useState, useEffect  } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';




function App() {
  const dispatch = useDispatch();

useEffect(()=>{
  apiTesting();
},[])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
      dispatch
    })
  }

  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
