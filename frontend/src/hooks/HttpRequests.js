import { useState, useEffect } from 'react'

function useFetch(url) {
  const [request, setRequest] = useState({
    data: null,
    error: null,
    loading: false
  })            
  
  /* Gets called whenever [summonerInfo] is updated */
  useEffect(()=>{
    console.log(url)
    
    /* Reset */
    setRequest({
      data: null,
      error: null,
      loading: true
    })

    fetch(url)
      .then(response => {return response.json()})
      .then(data => {
        console.log(`Successfully Retrieved data: ${data}`)
        setRequest({
          data: data,
          error: null,
          loading: false
        })
      })
      .catch(error => {
        // Resource not found
        console.log(`Failed to Retrieve data: ${error}`)
        setRequest({
          data: null,
          error: error,
          loading: false
        });
      })
  }, [url])

  return request
}

export default useFetch
