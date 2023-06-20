import { useState, useEffect  } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, use } from 'react-redux';
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