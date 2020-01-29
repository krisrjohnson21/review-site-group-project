import React from "react"
import { Link } from "react-router-dom"

const CapeShow = ({ capeData }) => {
  let { name, fullName, gender, affiliation, intelligence, strength, speed, url } = capeData
  return (
    <div>
      <h1><strong>Detail page for {name}</strong></h1>
      <img src={url} />
      <h4 id="full-name"><strong>Full Name: </strong>{fullName}</h4>
      <h4 id="gender"><strong>Gender: </strong>{gender}</h4>
      <h4 id="affiliation"><strong>Affiliation: </strong>{affiliation}</h4>
      <br />

      <h2><strong>{name} Power Stats</strong></h2>
      <h4 id="intelligence"><strong>Intelligence: </strong>{intelligence}</h4>
      <h4 id="strength"><strong>Strength: </strong>{strength}</h4>
      <h4 id="speed"><strong>Speed: </strong>{speed}</h4>
    </div>
  )
}

export default CapeShow
