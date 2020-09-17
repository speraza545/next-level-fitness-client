import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CharacterForm = ({ character, handleSubmit, handleChange, cancelPath }) => (
  <div>
    <form onSubmit={handleSubmit} className='authForms'>
      <label>Name:</label><br/>
      <input
        placeholder='Choose your class'
        value={character.name}
        required
        name='name'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Class:</label><br/>
      <input
        placeholder='Please select a class'
        value={character.class}
        required
        name='class'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Health:</label><br/>
      <input
        placeholder='health'
        value={character.health}
        required
        name='health'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Strength:</label><br/>
      <input
        placeholder='strength'
        value={character.strength}
        required
        name='strength'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Stamina:</label><br/>
      <input
        placeholder='Stamina'
        value={character.stamina}
        required
        name='stamina'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Magick:</label><br/>
      <input
        placeholder='magick'
        value={character.magick}
        required
        name='magick'
        onChange={handleChange}
        className="characterCreateInput"
      /><br/>

      <label>Healing:</label><br/>
      <input
        placeholder='healing'
        value={character.healing}
        required
        name='healing'
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

export default CharacterForm
