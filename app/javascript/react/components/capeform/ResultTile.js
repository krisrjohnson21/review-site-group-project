import React from 'react'

const ResultTile = ({info, checkHero}) => {

 return (
   <li className='__list-item' onClick={checkHero}>
          {info.name}
      </li>
 )
}

export default ResultTile
