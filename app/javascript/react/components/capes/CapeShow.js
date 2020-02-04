import {
  faBolt,
  faBrain,
  faFistRaised
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CapeShow = ({ capeData }) => {
  let {
    name,
    fullName,
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
            {fullName}
          </h2>
          <h4 id='gender'>Gender: {gender}</h4>
          <h4 id='affiliation'>Affiliation: {affiliation}</h4>
          <div className='stats'>
            <div>
              <div className='title'>Intelligence</div>

              <FontAwesomeIcon icon={faBrain} />
              <div className='value' id='intelligence'>
                {intelligence}
              </div>
            </div>
            <div>
              <div className='title'>Strength</div>

              <FontAwesomeIcon icon={faFistRaised} />
              <div className='value' id='strength'>
                {strength}
              </div>
            </div>
            <div>
              <div className='title'>Speed</div>
              <FontAwesomeIcon icon={faBolt} />

              <div className='value' id='speed'>
                {speed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapeShow;
