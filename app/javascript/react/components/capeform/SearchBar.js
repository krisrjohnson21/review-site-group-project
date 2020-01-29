import React, { useState } from 'react';
import ResultTile from './ResultTile'

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [clickedId, setClickedId] = useState(null)



  const superheroesUrl = `https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api.php/2937630366248635/search/${query}`;

  const handleChange = (event) => {
    setQuery(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    findHero()
  }

  function findHero(){

    fetch(superheroesUrl).then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => {
      setResults(body.results)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  let checkHero = () => {
console.log(event.target)
   // fetch('/api/v1/capes', {
   //   credentials: 'same-origin',
   //   method: 'POST',
   //   body: JSON.stringify(capeName),
   //   headers: {
   //     Accept: 'application/json',
   //     'Content-Type': 'application/json'
   //   }
   // })
   //   .then(response => {
   //     if (response.ok) {
   //       return response;
   //     } else {
   //       let errorMessage = `${response.status} (${response.statusText})`,
   //         error = new Error(errorMessage);
   //       throw error;
   //     }
   //   })
   //   .then(response => response.json())
   //   .then(body => {
   //     setRedirect(true);
   //     ;
   //   })
   //   .catch(error => console.error(`Error in fetch: ${error.message}`));


  }
    let superHeroes
if(results){
 superHeroes= results.map(hero => {
    // setClickedId()
    //
    // let clicked = false;
    // if (hero.id === clickedId) {
    //   clicked = true;
    // }
    // let handleClickFunc = () => {
    //   if (hero.id === clickedId){
    //     setClickedId(null)
    //   } else {
    //     setClickedId(hero.id)
    //   }
    // };

    return (
      <ResultTile
        key={hero.id}
        info={hero}
        checkHero={checkHero}

        />
    )
  })
}


  return (
    <>
      <div className='right'>
        <div>
          <h3>Find an existing Superhero</h3>
          <div className='form-group'>
            <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className='searchbar field'
              autoComplete='off'
              type='text'
              name='name'
              value={query}
              placeholder='Search... Ex: Superman, Wonderwoman, Spiderman, Goku'
            />
          </form>
          </div>
        </div>
      </div>
      <div className='__list' >
        {superHeroes}
      </div>
    </>
  );
};

export default SearchBar;
