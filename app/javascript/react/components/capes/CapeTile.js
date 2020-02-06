import React from 'react';

const CapeTile = ({ cape }) => {
  let { name, url } = cape;
  return (
    <>
      <div className='flip-index'>
        <div className='front'>
          <h1 className='text-shadow text-center' id='name'>{name}</h1>
          <img className='show_img' src={url} />
        </div>
      </div>
    </>
  );
};

export default CapeTile;
