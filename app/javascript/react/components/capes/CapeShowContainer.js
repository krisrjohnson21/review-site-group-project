import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CapeShow from './CapeShow'

const CapeShowContainer = (props) => {
  const [cape, setCape] = useState(0)


  useEffect(() => {
    let capeId = props.match.params.id
    fetch(`/api/v1/capes/${capeId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setCape(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div className="text-center">
      <CapeShow
        capeData={cape}
      />
    </div>
  )
}

export default CapeShowContainer;
