import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import TextField from './TextField'
import ErrorList from './ErrorList'

const ReviewFormContainer = props => {
  const [newReview, setNewReview] = useState({
    rating: 0,
    body: ""
  })

  const [errors, setErrors] = useState({})

  const clearForm = (event) => {
    setNewReview({
      rating: 0,
      body: ""
    })
    setErrors({})
  }

  const handleFieldChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["rating", "body"]
    requiredFields.forEach((field) => {
      if (newReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      let num = parseInt(newReview.rating)
      newReview.rating = num
      props.addNewReview(newReview)
      clearForm()
    }
  }

  return(
    <form className="text-center" onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label>Superhero Rating (1-10)</label>
      <TextField
        type="text"
        fieldName="rating"
        id="rating"
        content={newReview.rating}
        handleChange={handleFieldChange}
      />

      <label>Superhero Review</label>
      <TextField
        type="text"
        fieldName="body"
        id="body"
        content={newReview.body}
        handleChange={handleFieldChange}
      />

      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <input className="button" type="button" value="Clear Form" onClick={clearForm} />
      </div>
    </form>
  )
}

export default ReviewFormContainer
