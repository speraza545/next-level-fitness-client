import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const WorkOutForm = ({ workOut, handleSubmit, handleChange, cancelPath }) => (
  <div className='long'>
    <form onSubmit={handleSubmit}>
      <label>Work Out:</label><br/>
      <br/>
      <label>Date:</label><br/>
      <input
        placeholder='mm/dd/yyyy'
        value={workOut.date}
        required
        name='date'
        onChange={handleChange}
      /><br/>

      <label>Type:</label><br/>
      <input
        placeholder='Cardio or Strength Training?'
        value={workOut.type}
        required
        name='type'
        onChange={handleChange}
      /><br/>

      <label>Title:</label><br/>
      <input
        placeholder='Name of Exercise'
        value={workOut.title}
        required
        name='title'
        onChange={handleChange}
      /><br/>

      <label>Reps:</label><br/>
      <input
        placeholder='# of reps if applicable'
        value={workOut.reps}
        required
        name='reps'
        onChange={handleChange}
      /><br/>

      <label>Minutes:</label><br/>
      <input
        placeholder='time in MINUTES'
        value={workOut.minutes}
        required
        name='minutes'
        onChange={handleChange}
      /><br/>

      <label>Notes:</label><br/>
      <input
        placeholder='Additional Notes'
        value={workOut.content}
        required
        name='content'
        onChange={handleChange}
      /><br/>

      <br/>
      <OutlineButton variant="success" type="submit">Submit</OutlineButton>
      <Link to={cancelPath}>
        <OutlineButton variant="dark">Cancel</OutlineButton>
      </Link>
    </form>
  </div>
)

export default WorkOutForm
