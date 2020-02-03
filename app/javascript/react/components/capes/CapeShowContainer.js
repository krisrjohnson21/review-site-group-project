import React, { useEffect, useState } from 'react';
import Review from '../reviewcomponents/Review';
import CapeShow from './CapeShow';

const CapeShowContainer = ({ match }) => {
  const [cape, setCape] = useState(0);
  const [reviews, setReviews] = useState([]);
  const capeId = match.params.id;

  useEffect(() => {
    fetch(`/api/v1/capes/${capeId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        setCape(response.cape);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  useEffect(() => {
    let capeId = match.params.id;
    let reviewId = match.params.id;
    fetch(`/api/v1/capes/${capeId}/reviews/${reviewId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        setReviews(response.reviews);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const reviewList = reviews.map(review => {
    return (
      <Review
        key={review.id}
        fullName={review.user_full_name}
        rating={review.rating}
        body={review.body}
      />
    );
  });

  return (
    <div className='text-center'>
      <CapeShow capeData={cape} />
      <hr />
      <div className='__list'>{reviewList}</div>
    </div>
  );
};

export default CapeShowContainer;
