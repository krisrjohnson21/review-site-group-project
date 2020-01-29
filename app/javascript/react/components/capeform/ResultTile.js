import React from 'react'


const ResultTile = ({info, checkHero}) => {

//create a function for onclick, when it's clicked, passes info back up
//or write it in search bar and pass it down here
//or

 return (
   <li className='__list-item' onClick={checkHero}>
          {info.name}
      </li>
 )
}

export default ResultTile
