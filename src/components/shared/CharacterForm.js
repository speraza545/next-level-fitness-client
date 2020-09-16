import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CharacterForm = ({ character, handleSubmit, handleChange, cancelPath }) => (
  <div className='long'>
    <form onSubmit={handleSubmit}>
      <label>Name:</label><br/>
      <input
        placeholder='Choose your class'
        value={character.name}
        required
        name='name'
        onChange={handleChange}
      /><br/>

      <label>Class:</label><br/>
      <input
        placeholder='Please select a class'
        value={character.class}
        required
        name='class'
        onChange={handleChange}
      /><br/>

      <label>Health:</label><br/>
      <input
        placeholder='health'
        value={character.health}
        required
        name='health'
        onChange={handleChange}
      /><br/>

      <label>Strength:</label><br/>
      <input
        placeholder='strength'
        value={character.strength}
        required
        name='strength'
        onChange={handleChange}
      /><br/>

      <label>Stamina:</label><br/>
      <input
        placeholder='Stamina'
        value={character.stamina}
        required
        name='stamina'
        onChange={handleChange}
      /><br/>

      <label>Magick:</label><br/>
      <input
        placeholder='magick'
        value={character.magick}
        required
        name='magick'
        onChange={handleChange}
      /><br/>

      <label>Healing:</label><br/>
      <input
        placeholder='healing'
        value={character.healing}
        required
        name='healing'
        onChange={handleChange}
      /><br/>

      <OutlineButton size="sm" variant="outline-success" type="submit">Submit</OutlineButton>
      <Link to={cancelPath}>
        <OutlineButton size="sm" variant="outline-dark">Cancel</OutlineButton>
      </Link>
    </form>
  </div>
)

export default CharacterForm
