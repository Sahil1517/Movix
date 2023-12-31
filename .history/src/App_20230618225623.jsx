import { useState, useEffect  } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import <Details></Details>

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
  state.home)
console.log(url);
useEffect(()=>{
  apiTesting();
},[])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res ))
    })
  }

  return (
    <>
      <div>app
      {url?.total_pages}
      </div>
      
    </>
  )
}

export default App
