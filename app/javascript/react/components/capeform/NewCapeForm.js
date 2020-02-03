import _ from 'lodash';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorList from './ErrorList';

const NewCapeForm = () => {
  const defaultForm = {
    name: '',
    full_name: '',
    gender: '',
    affiliation: '',
    intelligence: 1,
    strength: 1,
    speed: 1,
    url: ''
  };

  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [freshCape, setFreshCape] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [duplicateError, setDuplicateError] = useState('');

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = Object.keys(form);

    requiredFields.forEach(field => {
      if (form[field].toString().trim() === '') {
        submitErrors = {
          ...submitErrors,
          [field]: 'is blank'
        };
      }
    });
    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const addSuperhero = () => {
    fetch('/api/v1/capes', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(form),
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
        if (body.errors) {
          setDuplicateError(body.errors[0]);
        } else {
          setFreshCape(body.cape.id);
          setRedirect(true);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const onFormChange = event => {
    const key = event.currentTarget.id;
    const value = event.currentTarget.value;
    setForm({
      ...form,
      [key]: value
    });
  };

  const clearForm = () => {
    setForm(defaultForm);
  };

  const formSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      event.preventDefault();
      addSuperhero();
    }
  };

  if (redirect) {
    let path = `/superheroes/${freshCape}`;
    return <Redirect to={path} />;
  }

  return (
    <>
      <div>
        <h5>{duplicateError}</h5>
      </div>

      <div id='form-main'>
        <div id='form-div'>
          <form onSubmit={formSubmit} id='form1'>
            <ErrorList errors={errors} />
            <h4 className='_form_title'>Create Your Custom Superhero:</h4>
            <div className='grid-container'>
              <div className=' grid-x grid-padding-x'>
                <div className='medium-6 cell'>
                  <label>
                    Alias
                    <input
                      onChange={onFormChange}
                      id='name'
                      name='name'
                      type='text'
                      placeholder='MegaMan'
                      value={form.name}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Real Name
                    <input
                      onChange={onFormChange}
                      id='full_name'
                      name='full_name'
                      type='text'
                      placeholder='Rob Huff'
                      value={form.full_name}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Gender
                    <input
                      onChange={onFormChange}
                      id='gender'
                      name='gender'
                      type='text'
                      placeholder='Male'
                      value={form.gender}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Affiliation
                    <input
                      onChange={onFormChange}
                      id='affiliation'
                      name='affiliation'
                      type='text'
                      placeholder='Planet Krypton'
                      value={form.affiliation}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Image URL
                    <input
                      onChange={onFormChange}
                      id='url'
                      name='url'
                      type='text'
                      placeholder='www.planetkrypton.com/images/megaman.jpeg'
                      value={form.url}
                    />
                  </label>
                </div>
                <div className='medium-6 cell'>
                  <label>
                    Strength
                    <input
                      onChange={onFormChange}
                      id='strength'
                      name='strength'
                      type='number'
                      value={form.strength}
                    />
                  </label>
                </div>

                <div className='medium-6 cell'>
                  <label>
                    Intelligence
                    <input
                      onChange={onFormChange}
                      id='intelligence'
                      name='intelligence'
                      type='number'
                      value={form.intelligence}
                    />
                  </label>
                </div>

                <div className='medium-6 cell'>
                  <label>
                    Speed
                    <input
                      onChange={onFormChange}
                      id='speed'
                      name='speed'
                      type='number'
                      value={form.speed}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className='button-group'>
              <button onClick={clearForm} className='button'>
                Clear
              </button>
              <input type='submit' className='button' value='Submit Hero' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCapeForm;
