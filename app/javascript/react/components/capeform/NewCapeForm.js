import _ from 'lodash';
import React, { useState } from 'react';
import ErrorList from './ErrorList';

const NewCapeForm = props => {
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

  const onFormSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      console.log('form submission');
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <ErrorList errors={errors} />
        <h5>Create Your Own:</h5>
        <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='medium-6 cell'>
              <label>
                Name
                <input
                  onChange={onFormChange}
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Batman'
                  value={form.name}
                />
              </label>
            </div>
            <div className='medium-6 cell'>
              <label>
                Full Name
                <input
                  onChange={onFormChange}
                  id='full_name'
                  name='full_name'
                  type='text'
                  placeholder='Bruce Wayne'
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
                  placeholder='Justice League'
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
                  placeholder='www.batmanimages.com'
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
                  placeholder={1}
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
                  placeholder={1}
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
                  placeholder={1}
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
    </>
  );
};

export default NewCapeForm;
