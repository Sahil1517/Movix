import { useState, useEffect  } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux';
import


getApiConfiguration

function App() {
  

useEffect(()=>{
  apiTesting();
},[])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
