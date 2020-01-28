import React, {useState} from 'react'
import ErrorList from './ErrorList';
import _ from 'lodash'

const NewCapeForm = (props) => {
  const defaultForm = {
    name: "",
    full_name: "",
    gender: "",
    affiliation: "",
    intelligence: 0,
    strength: 0,
    speed: 0,
    url: ""
  }
  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState({});

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = Object.keys(form);
    requiredFields.forEach(field => {
      if (form[field].trim() === '') {
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
  }

  const clearForm = () => {
    setForm(defaultForm);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      console.log("form submission")
    }
  }

  return (
    <>
    <form onSubmit = {onFormSubmit} >
      <ErrorList errors={errors}/>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
        <label>Name
          <input onChange={onFormChange} id="name" name="name" type="text" placeholder="Batman" value={form.name}/>
        </label>
        </div>
        <div className="medium-6 cell">
        <label>Full Name
          <input onChange={onFormChange} id="full_name" name="full_name" type="text" placeholder="Bruce Wayne" value={form.full_name}/>
        </label>
      </div>
      <div className="medium-6 cell">
        <label>Gender
          <input onChange={onFormChange} id="gender" name="gender" type="text" placeholder="Male" value={form.gender}/>
        </label>
      </div>
      <div className="medium-6 cell">
        <label>Affiliation
          <input onChange={onFormChange} id="affiliation" name="affiliation" type="text" placeholder="Justice League" value={form.affiliation}/>
        </label>
      </div>
      <div className="medium-6 cell">
        <label>Image URL
          <input onChange={onFormChange} id="url" name="url" type="text" placeholder="www" value={form.url}/>
        </label>
      </div>
      <div className="cell small-10">
        <div className="slider" data-slider="data-slider" data-initial-start="50">
          <span className="slider-handle" data-slider-handle="data-slider-handle" role="slider" tabIndex="1" aria-controls="sliderOutput1"></span>
          <span className="slider-fill" data-slider-fill="data-slider-fill"></span>
        </div>
      </div>
      <div className="cell small-2">
        <label>Speed
          <input onChange={onFormChange} type="number" id="speed" name="speed" value={form.speed}/>
        </label>
      </div>

      <div className="cell small-10">
        <div className="slider" data-slider="data-slider" data-initial-start="50">
          <span className="slider-handle" data-slider-handle="data-slider-handle" role="slider" tabIndex="1" aria-controls="sliderOutput1"></span>
          <span className="slider-fill" data-slider-fill="data-slider-fill"></span>
        </div>
      </div>
      <div className="cell small-2">
        <label>Intelligence
          <input onChange={onFormChange} type="number" id="intelligence" name="intelligence" value={form.intelligence}/>
        </label>
      </div>

      <div className="cell small-10">
        <div className="slider" data-slider="data-slider" data-initial-start="50">
          <span className="slider-handle" data-slider-handle="data-slider-handle" role="slider" tabIndex="1" aria-controls="sliderOutput1"></span>
          <span className="slider-fill" data-slider-fill="data-slider-fill"></span>
        </div>
      </div>
      <div className="cell small-2">
        <label>Strength
          <input onChange={onFormChange} type="number" id="strength" name="strength" value={form.strength}/>
        </label>
      </div>

        </div>
      </div>

      <div className='button-group'>
        <button onClick={clearForm} className='button'>
          Clear
        </button>
        <input type="submit" className="button" value="Submit Hero"/>
      </div>

  </form>
  </>)

}

export default NewCapeForm
