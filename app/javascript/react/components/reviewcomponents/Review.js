import React from 'react';

const Review = ({ id, fullName, rating, body, count, handleVote }) => {
  return (
    <div id={id} className='__list-item'>
      <div className='vote circle'>
        <div onClick={handleVote} className='increment up'></div>
        <div onClick={handleVote} className='increment down'></div>

        <div className='count'>{count}</div>
      </div>
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
