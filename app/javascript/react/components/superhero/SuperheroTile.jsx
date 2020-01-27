import React from 'react'


export const SuperheroTile = ({remote_id, hero_name, powerstats, full_name, gender, group_affiliation, image}) => {


  return (
    <>
    <h3>{hero_name}</h3>
    <img src={image} />
    </>
  )
}

export default SuperheroTile;
