import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ResultTile from './ResultTile';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [showPagePathId, setShowPagePathId] = useState(0);

  let mappedSuperHeroes;
  let externalHero;
  const key = '2937630366248635';
  const superheroesUrl = `https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api.php/${key}/search/${query}`;

  const handleChange = event => {
    console.log(process.env.REACT_APP_API_KEY)

    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    findHero();
  };

  function findHero() {
    fetch(superheroesUrl)
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
      .then(body => {
        setResults(body.results);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  let checkHero = () => {
    let clickedName = event.target.innerHTML;
    results.forEach(hero => {
      if (hero.name === clickedName) {
        let objectKeys = Object.keys(hero.powerstats);
        for (let eachPowerStat of objectKeys) {
          if (hero.powerstats[eachPowerStat] === 'null') {
            hero.powerstats[eachPowerStat] = 1;
          }
        }
        externalHero = {
          name: hero.name,
          full_name: hero.biography['full-name'],
          gender: hero.appearance.gender,
          affiliation: hero.connections['group-affiliation'],
          intelligence: hero.powerstats.intelligence,
          strength: hero.powerstats.strength,
          speed: hero.powerstats.speed,
          url: hero.image.url
        };
      }
    });
    fetch('/api/v1/add-from-external', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(externalHero),
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
      .then(response => response.json())
      .then(body => {
        if (body.name) {
          setShowPagePathId(body.id);
        } else {
          setShowPagePathId(body);
        }
        setRedirect(true);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  if (results) {
    mappedSuperHeroes = results.map(hero => {
      return <ResultTile
                key={hero.id}
                info={hero}
                checkHero={checkHero}
              />;
    });
  }

  if (redirect) {
    let path = `/superheroes/${showPagePathId}`;
    return <Redirect to={path} />;
  }

  return (
    <>
      <div className='right'>
        <div>
          <h4>Find a Superhero:</h4>
          <div className='form-group'>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                className='searchbar field'
                autoComplete='off'
                type='text'
                name='name'
                value={query}
                placeholder='Search... Ex: Superman, Wonder Woman, Spiderman, Goku'
              />
            </form>
          </div>
        </div>
      </div>
      <div className='__list'>{mappedSuperHeroes}</div>
    </>
  );
};
export default SearchBar;
