import React from "react"

const CapeTile = props => {
  let id = {props.cape.id}
  return (
    <div>
      <h1>Name: {props.cape.name}</h1>
      <h2>Full Name: {props.cape.full_name}</h2>
      <h3>Gender: {props.cape.gender}</h3>
      <h4>Affiliation: {props.cape.affiliation}</h4>
      <h5>Intelligence: {props.cape.intelligence}</h5>
      <h6>Strength: {props.cape.strength}</h6>
      <p>Speed: {props.cape.speed}</p>
      <img src={props.cape.url} />
    </div>
  )
}


export default CapeTile
