import {
  faBrain,
  faFistRaised,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CapeShow = ({ capeData }) => {
  let {
    name,
    full_name,
    gender,
    affiliation,
    intelligence,
    strength,
    speed,
    url
  } = capeData;
  return (
    <>
      <div className='flip'>
        <div className='front'>
          <h1 className='text-shadow'>{name}</h1>
          <img className='show_img' src={url} />
        </div>
        <div className=' back'>
          <h2 className='text-shadow' id='full-name'>
            {full_name}
          </h2>
          <h4>Gender: {gender}</h4>
          <h4>Affiliation: {affiliation}</h4>
          <div className='stats'>
            <div>
              <div className='title'>Intelligence</div>

              <FontAwesomeIcon icon={faBrain} />
              <div className='value'>{intelligence}</div>
            </div>
            <div>
              <div className='title'>Strength</div>

              <FontAwesomeIcon icon={faFistRaised} />
              <div className='value'>{strength}</div>
            </div>
            <div>
              <div className='title'>Speed</div>
              <FontAwesomeIcon icon={faBolt} />

              <div className='value'>{speed}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapeShow;
