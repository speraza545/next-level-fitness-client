import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const WorkOutForm = ({ workOut, handleSubmit, handleChange, cancelPath }) => (
  <div className='long'>
    <form onSubmit={handleSubmit} className='authForms'>
      <label><h3>Add Work Out:</h3></label><br/>
      <label>Date:</label><br/>
      <input
        placeholder='mm/dd/yyyy'
        value={workOut.date}
        required
        name='date'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Type:</label><br/>
      <select value={workOut.type} onChange={handleChange} name='type' required className="characterCreateInput">
        <option defaultValue=""></option>
        <option value="strength">strength</option>
        <option value="cardio">cardio</option>
      </select><br/>

      <label>Title:</label><br/>
      <input
        placeholder='Name of Exercise'
        value={workOut.title}
        required
        name='title'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Reps:</label><br/>
      <input
        placeholder='# of reps if applicable'
        value={workOut.reps}
        required
        name='reps'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Minutes:</label><br/>
      <input
        placeholder='time in MINUTES'
        value={workOut.minutes}
        required
        name='minutes'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Notes:</label><br/>
      <input
        placeholder='Additional Notes'
        value={workOut.content}
        required
        name='content'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <br/>
      <OutlineButton size="md" variant="dark" type="submit" className="authButton">Submit</OutlineButton>
      <Link to={cancelPath}>
        <OutlineButton size="md" variant="danger">Cancel</OutlineButton>
      </Link>
    </form>
  </div>
)

export default WorkOutForm
