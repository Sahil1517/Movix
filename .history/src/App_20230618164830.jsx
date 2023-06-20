import { useState, useEffect  } from 'react'
import {fetchDataFromApi} from "./utils/api"
function App() {
  
  const apiTesting = () => {
    fetchDataFromApi('/m')
  }

  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
