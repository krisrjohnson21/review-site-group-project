import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import TextField from '../reviewcomponents/TextField'
import ErrorList from '../reviewcomponents/ErrorList'

const EditCapeFormContainer = props => {
  const [newCape, setNewCape] = useState({
    name: "",
    fullName: "",
    gender: "",
    affiliation: "",
    intelligence: "",
    strength: "",
    speed: "",
    url: ""
  })
  const [errors, setErrors] = useState({})

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

  const handleFieldChange = (event) => {
    setEditedCape({
      ...editedCape,
      [event.currentTarget.id]: event.currentTarget.value
    })
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
        content={props.capeProps.name}
        handleChange={handleFieldChange}
      />

    <label>Real Name</label>
      <TextField
        type="text"
        fieldName="fullName"
        id="fullName"
        content={props.capeProps.fullName}
        handleChange={handleFieldChange}
      />

    <label>Gender</label>
      <TextField
        type="text"
        fieldName="gender"
        id="gender"
        content={props.capeProps.gender}
        handleChange={handleFieldChange}
      />

    <label>Affiliation</label>
      <TextField
        type="text"
        fieldName="affiliation"
        id="affiliation"
        content={props.capeProps.affiliation}
        handleChange={handleFieldChange}
      />

    <label>Image URL</label>
      <TextField
        type="text"
        fieldName="url"
        id="url"
        content={props.capeProps.url}
        handleChange={handleFieldChange}
      />

    <label>Strength</label>
      <TextField
        type="number"
        fieldName="strength"
        id="strength"
        content={props.capeProps.strength}
        handleChange={handleFieldChange}
      />

    <label>Intelligence</label>
      <TextField
        type="number"
        fieldName="intelligence"
        id="intelligence"
        content={props.capeProps.intelligence}
        handleChange={handleFieldChange}
      />

    <label>Speed</label>
      <TextField
        type="number"
        fieldName="speed"
        id="speed"
        content={props.capeProps.speed}
        handleChange={handleFieldChange}
      />

      <div className="button-group">
        <input className="button" type="submit" value="Submit Edits" />
      </div>
    </form>
  )
}

export default EditCapeFormContainer
