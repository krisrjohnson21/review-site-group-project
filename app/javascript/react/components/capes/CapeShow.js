import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CapeShow = (props) => {
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
      <h1><strong>Detail page for {cape.name}</strong></h1>
      <img src={cape.url} />
      <h4><strong>Full Name: </strong>{cape.full_name}</h4>
      <h4><strong>Gender: </strong>{cape.gender}</h4>
      <h4><strong>Affiliation: </strong>{cape.affiliation}</h4>
      <br />

      <h2><strong>{cape.name} Power Stats </strong></h2>
      <h4><strong>Intelligence: </strong>{cape.intelligence}</h4>
      <h4><strong>Strength: </strong>{cape.strength}</h4>
      <h4><strong>Speed: </strong>{cape.speed}</h4>
    </div>
  )
}

export default CapeShow;
