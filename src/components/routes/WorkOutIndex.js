import React from 'react'
import OutlineButton from '../shared/OutlineButton.js'

const WorkOutIndex = ({ date, type, title, reps, minutes, content, deleteWorkOut, editWorkOut, owner, user }) => {
  let canEditAndUpdate = ''
  if (owner === user) {
    canEditAndUpdate = (
      <div className='workOuts'>
        {date} <br/>
        {type} <br/>
        {title} <br/>
        {reps} <br/>
        {minutes} <br/>
        {content} <br/>
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
