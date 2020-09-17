import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CharacterForm = ({ character, handleSubmit, handleChange, cancelPath }) => {
  character.health = ''
  character.strength = ''
  character.stamina = ''
  character.magick = ''
  character.healing = ''

  if (character.class === 'Knight') {
    character.health = 30
    character.strength = 15
    character.stamina = 10
    character.magick = 0
    character.healing = 0
  } else if (character.class === 'Warrior') {
    character.health = 15
    character.strength = 30
    character.stamina = 10
    character.magick = 0
    character.healing = 0
  } else if (character.class === 'Archer') {
    character.health = 10
    character.strength = 10
    character.stamina = 30
    character.magick = 0
    character.healing = 0
  } else if (character.class === 'Mage') {
    character.health = 8
    character.strength = 5
    character.stamina = 6
    character.magick = 30
    character.healing = 0
  } else if (character.class === 'Priest') {
    character.health = 8
    character.strength = 5
    character.stamina = 6
    character.magick = 0
    character.healing = 30
  }

  return (
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
        <select value={character.class} onChange={handleChange} name='class' required className="characterCreateInput">
          <option defaultValue=""></option>
          <option value="Mage">Mage</option>
          <option value="Warrior">Warrior</option>
          <option value="Knight">Knight</option>
          <option value="Priest">Priest</option>
          <option value="Archer">Archer</option>
        </select><br/>
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
}

export default CharacterForm
