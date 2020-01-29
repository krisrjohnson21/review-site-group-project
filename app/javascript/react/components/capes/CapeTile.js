import React from "react"

const CapeTile = ({ cape }) => {
  let { name, full_name, gender, affiliation, intelligence, strength, speed, url } = cape
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Full Name: {full_name}</h2>
      <h3>Gender: {gender}</h3>
      <h4>Affiliation: {affiliation}</h4>
      <h5>Intelligence: {intelligence}</h5>
      <h6>Strength: {strength}</h6>
      <p>Speed: {speed}</p>
      <img src={url} />
    </div>
  )
}


export default CapeTile
