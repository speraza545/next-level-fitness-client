import React from 'react'
import OutlineButton from '../shared/OutlineButton.js'

const WorkOutIndex = ({ character, date, type, title, reps, minutes, content, deleteWorkOut, editWorkOut, owner, user }) => {
  let canEditAndUpdate = ''
  if (owner === user) {
    canEditAndUpdate = (
      <div className={character.class}>
        Date:<br/> {date} <br/><br/>
        Type:<br/> {type} <br/><br/>
        Title:<br/> {title} <br/><br/>
        Reps:<br/> {reps} <br/><br/>
        Minutes:<br/> {minutes} <br/><br/>
        Notes:<br/> {content} <br/>
        <br/>
        <OutlineButton size="sm" onClick={editWorkOut} variant="outline-info">Edit</OutlineButton>
        <OutlineButton size="sm" onClick={deleteWorkOut} variant="outline-danger">Delete</OutlineButton>
      </div>
    )
  } else if (owner !== user) {
    canEditAndUpdate = (
      <div className='workOuts'>
        {content}
      </div>
    )
  }

  return (
    canEditAndUpdate
  )
}

export default WorkOutIndex
