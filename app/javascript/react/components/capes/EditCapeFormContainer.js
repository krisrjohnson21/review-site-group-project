import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import TextField from '../reviewcomponents/TextField'
import ErrorList from '../reviewcomponents/ErrorList'

const EditCapeFormContainer = props => {
  const [editedCape, setEditedCape] = useState({
    name: props.capeProps.name,
    fullName: props.capeProps.fullName,
    gender: props.capeProps.gender,
    affiliation: props.capeProps.affiliation,
    intelligence: props.capeProps.intelligence,
    strength: props.capeProps.strength,
    speed: props.capeProps.speed,
    url: props.capeProps.url
  })
  const [errors, setErrors] = useState({})
  debugger

  const handleFieldChange = (event) => {
    setEditedCape({
      ...editedCape,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "fullName", "gender", "affiliation", "intelligence", "strength", "speed", "url"]
    requiredFields.forEach((field) => {
      if (newReview[field].toString().trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.editCapeFunction(editedCape)
    }
  }

  return(
    <form className="text-center" onSubmit={handleEditSubmit}>
      <h2>Edit Your Custom Superhero:</h2>
      <ErrorList errors={errors} />

      <label>Alias</label>
      <TextField
        type="text"
        fieldName="name"
        id="name"
        content={editedCape.name}
        handleChange={handleFieldChange}
      />

    <label>Real Name</label>
      <TextField
        type="text"
        fieldName="fullName"
        id="fullName"
        content={editedCape.fullName}
        handleChange={handleFieldChange}
      />

    <label>Gender</label>
      <TextField
        type="text"
        fieldName="gender"
        id="gender"
        content={editedCape.gender}
        handleChange={handleFieldChange}
      />

    <label>Affiliation</label>
      <TextField
        type="text"
        fieldName="affiliation"
        id="affiliation"
        content={editedCape.affiliation}
        handleChange={handleFieldChange}
      />

    <label>Image URL</label>
      <TextField
        type="text"
        fieldName="url"
        id="url"
        content={editedCape.url}
        handleChange={handleFieldChange}
      />

    <label>Strength</label>
      <TextField
        type="number"
        fieldName="strength"
        id="strength"
        content={editedCape.strength}
        handleChange={handleFieldChange}
      />

    <label>Intelligence</label>
      <TextField
        type="number"
        fieldName="intelligence"
        id="intelligence"
        content={editedCape.intelligence}
        handleChange={handleFieldChange}
      />

    <label>Speed</label>
      <TextField
        type="number"
        fieldName="speed"
        id="speed"
        content={editedCape.speed}
        handleChange={handleFieldChange}
      />

      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default EditCapeFormContainer
