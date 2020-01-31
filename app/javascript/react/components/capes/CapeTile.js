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
      <h1 id="name">{name}</h1>
      <h4 id="intelligence">Intelligence: {intelligence}</h4>
      <h4 id="strength">Strength: {strength}</h4>
      <h4 id="speed">Speed: {speed}</h4>
    </div>
  );
};

export default CapeTile;
