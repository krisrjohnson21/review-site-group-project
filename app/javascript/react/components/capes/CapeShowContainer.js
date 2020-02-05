import React, { useEffect, useState } from 'react';
import Review from '../reviewcomponents/Review';
import ReviewFormContainer from '../reviewcomponents/ReviewFormContainer';
import CapeShow from './CapeShow';

const CapeShowContainer = ({ match }) => {
  const [cape, setCape] = useState({});
  const [reviews, setReviews] = useState([]);
  const capeId = match.params.id;

  useEffect(() => {
    fetch(`/api/v1/capes/${capeId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setCape(response.cape)
      setReviews(response.cape.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addNewReview = formPayload => {
    let capeId = props.match.params.id;
    fetch(`/api/v1/capes/${capeId}/reviews/`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => {
        return response.json();
      })
      .then(newReviewBody => {
        setReviews([...reviews, newReviewBody.review]);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const reviewList = reviews.map(review => {
    return (
      <Review
        key={review.id}
        id={review.id}
        fullName={review.userFullName}
        rating={review.rating}
        body={review.body}
      />
    );
  });

  return (
    <>
      <div className='text-center'>
        <CapeShow key={cape.id} capeData={cape} />
        <hr />
        <h2>
          <strong>Reviews for {cape.name}</strong>
        </h2>
        <div>{reviewList}</div>
      </div>

      <div>
        <hr />
        <h2 className='text-center'>
          <strong>Add a New Review for {cape.name}</strong>
        </h2>
        <ReviewFormContainer
          addNewReview={addNewReview}
          reviews={cape.reviews}
        />
      </div>
    </>
  );
};

export default CapeShowContainer;
