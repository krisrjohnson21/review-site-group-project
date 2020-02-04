import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CapeTile from './CapeTile';

const CapesList = () => {
  const [capes, setCapes] = useState([]);

  useEffect(() => {
    fetch('/api/v1/capes.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        setCapes(response.capes);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const capesTiles = capes.map(cape => {
    let id = cape.id;
    return (
      <Link to={`/superheroes/${id}`} key={cape.id}>
        <CapeTile id={cape.id} cape={cape} />
      </Link>
    );
  });

  return <>{capesTiles}</>;
};

export default CapesList;
