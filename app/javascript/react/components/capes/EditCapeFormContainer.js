import React, { useState } from 'react'
import _ from 'lodash'

import TextField from '../reviewcomponents/TextField'
import ErrorList from '../reviewcomponents/ErrorList'

const EditCapeFormContainer = props => {
  let className = "hidden"
  const [finishedEdit, setFinishedEdit] = useState(false)
  const [editedCape, setEditedCape] = useState({
    name: "",
    fullName: "",
    gender: "",
    affiliation: "",
    intelligence: 1,
    strength: 1,
    speed: 1,
    url: "",
    durability: 1,
    power: 1,
    combat: 1
  })
  const [errors, setErrors] = useState({})

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "fullName", "gender", "affiliation", "intelligence", "strength", "speed", "url", "durability", "power", "combat"]
    requiredFields.forEach((field) => {
      if (editedCape[field].toString().trim() === "") {
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

  if (finishedEdit === true){
    className="hidden"
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.editCapeFunction(editedCape)
      setFinishedEdit(true)
    }
  }

  if (props.capeProps.currentUser === true && finishedEdit === false) {
    className = ""
  }

  return(
    <div className={className}>
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

    <label>Durability</label>
      <TextField
        type="number"
        fieldName="durability"
        id="durability"
        content={editedCape.durability}
        handleChange={handleFieldChange}
      />

    <label>Power</label>
      <TextField
        type="number"
        fieldName="power"
        id="power"
        content={editedCape.power}
        handleChange={handleFieldChange}
      />

    <label>Combat</label>
      <TextField
        type="number"
        fieldName="combat"
        id="combat"
        content={editedCape.combat}
        handleChange={handleFieldChange}
      />

      <div className="button-group">
        <input className="button" type="submit" value="Submit Edits" />
      </div>
    </form>
    </div>

  )
}

export default EditCapeFormContainer
