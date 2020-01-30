import React from 'react';

const CapeTile = ({ cape }) => {
  let {
    name,
    full_name,
    gender,
    affiliation,
    intelligence,
    strength,
    speed,
    url
  } = cape;
  return (
    <div>
      <img src={url} />
      <h1>{name}</h1>
      <h5>Intelligence: {intelligence}</h5>
      <h6>Strength: {strength}</h6>
      <p>Speed: {speed}</p>
    </div>
  );
};

export default CapeTile;
