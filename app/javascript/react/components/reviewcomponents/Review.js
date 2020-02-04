import React from 'react';

const Review = ({ id, fullName, rating, body }) => {
  return (
    <div id={id} className='__list-item'>
      <h4 id='reviewer'>
        <strong>Reviewer Name: </strong>
        {fullName}
      </h4>
      <h4 id='review'>
        <strong>Rating: </strong>
        {rating} <strong>| Review: </strong>
        {body}
      </h4>
      <br />
    </div>
  );
};

export default Review;
