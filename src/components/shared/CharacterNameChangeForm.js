import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CharacterForm = ({ character, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='authForms'>
        <label>Name:</label><br/>
        <input
          placeholder='Character Name'
          value={character.name}
          required
          name='name'
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
}

export default CharacterForm
