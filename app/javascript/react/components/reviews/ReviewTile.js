import React from 'react';

const ReviewTile = (props) => {
  return(
    <div>
      <h4 id="reviewer"><strong>Reviewer Name: </strong>{props.userName}</h4>
      <h4 id="review"><strong>Rating: </strong>{props.rating} <strong>| Review: </strong>{props.body}</h4>
      <br />
    </div>
  )
}

export default ReviewTile;
