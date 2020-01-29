import React from 'react';

const SearchBar = () => {
  // const superheroesUrl = `https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api.php/2937630366248635/search/${query}`;

  const handleChange = () => {
    console.log('hi');
  };

  return (
    <>
      <div className='right'>
        <div>
          <h3>Find an existing Superhero</h3>
          <div className='form-group'>
            <input
              onChange={handleChange}
              className='searchbar field'
              autoComplete='off'
              type='text'
              name='name'
              placeholder='Search... Ex: Superman, Wonderwoman, Spiderman, Goku'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
