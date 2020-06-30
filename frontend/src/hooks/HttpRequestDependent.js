import { useState, useEffect } from 'react'

function useFetchDependent(url, dependent) {
  
  const [request, setRequest] = useState({
    data: null,
    error: null,
    loading: false
  })            

  /* Gets called whenever [summonerInfo] is updated */
  useEffect(()=>{    

    /* MatchHistory Fetch */
    if (dependent.data && url.includes('/matchhistory')){
      /* Reset */
      setRequest({
        data: null,
        error: null,
        loading: true
      })

      fetch(`${url}${dependent.data.puuid}`)
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
    }
    
    /* RankStats Fetch */
    if (dependent.data && url.includes('/rankinfo')){
      /* Reset */
      setRequest({
        data: null,
        error: null,
        loading: true
      })
      fetch(`${url}${dependent.data.id}`)
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
    }
    

  }, [dependent, url])

  return request
}

export default useFetchDependent
