import React from "react"

const CapeTile = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Full Name: {props.full_name}</h2>
      <h3>Gender: {props.gender}</h3>
      <h4>Affiliation: {props.affiliation}</h4>
      <h5>Intelligence: {props.intelligence}</h5>
      <h6>Strength: {props.strength}</h6>
      <p>Speed: {props.speed}</p>
      <img src={props.url} />
    </div>
  )
}


export default CapeTile
