import React, { useState, useEffect } from 'react'
import SuperheroTile from './SuperheroTile'


const Superheroes = () => {
  const [allSuperheroes, setAllSuperheroes] = useState([])

  const query = "superman"

  const superheroesUrl = `https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api.php/2937630366248635/search/${query}`

  useEffect(() => {
    getSuperheroes(superheroesUrl)
  }, [])

  const getSuperheroes = (url) => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response
      } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setAllSuperheroes(body.results)

      })
  }

  const superheroList = allSuperheroes.map(superhero => {
    return <SuperheroTile
    key={superhero.id}
    remote_id={superhero.id}
    hero_name={superhero.name}
    powerstats={superhero.powerstats}
    full_name={superhero.biography["full-name"]}
    gender={superhero.appearance.gender}
    group_affiliation={superhero.connections["group-affiliation"]}
    image={superhero.image.url}

    />
  })

  return(
    <>
    <h1>Search results list</h1>

    {superheroList}

    </>
  )
}


export default Superheroes;
