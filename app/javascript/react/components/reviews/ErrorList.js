import React from 'react'
import _ from 'lodash'

const ErrorList = (props) => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map((reqField) => {
      index++
      return(
        <li key={index}>
          {_.capitalize(reqField)} {props.errors[reqField]}
        </li>
      )
    })

    return(
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList
