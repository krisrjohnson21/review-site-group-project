import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CapeTile from './CapeTile'

const CapesList = (props) => {
  const [capes, setCapes] = useState([])

  useEffect(() => {
    fetch("/api/v1/capes.json")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = '${response.status} (${response.statusText})',
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setCapes(response)
    })
    .catch(error => console.error('Error in fetch: ${error.message}'))
  }, [])

  const capesTiles = capes.map((cape) => {
    return (
      <CapeTile
        key={cape.id}
        cape={cape}
      />
    )
  })

  return(
    <div>
      <h1>Superheroes</h1>
      <ul>
        {capesTiles}
      </ul>
    </div>
  )
}

export default CapesList;
