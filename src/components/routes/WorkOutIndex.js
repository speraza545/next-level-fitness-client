import React, { useState, useRef } from 'react'
import OutlineButton from '../shared/OutlineButton.js'
import Chevron from '../Chevron'

const WorkOutIndex = ({ character, date, type, title, reps, minutes, content, deleteWorkOut, editWorkOut, owner, user }) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content2 = useRef(null)

  function toggleAccordion () {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(setActive === 'active' ? '0px' : `${content2.current.scrollHeight}px`)
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate')
  }

  let canEditAndUpdate = ''
  if (owner === user) {
    canEditAndUpdate = (
      <div className='accordion__section'>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className='accordion__title'>Work Out Date: {date} - Type: {type} - Mins: {minutes}</p>
          <Chevron className={ `${setRotate}` } width={10} fill={'#a3aaad'} />
        </button>
        <div ref={content2} style={{ maxHeight: `${setHeight}` }} className='accordion__content'>
          <div className='accordion__text'>
            Title:<br/> {title} <br/><br/>
            Reps:<br/> {reps} <br/><br/>
            Notes:<br/> {content} <br/>
            <br/>
            <OutlineButton size="md" onClick={editWorkOut} variant="dark">Edit</OutlineButton>
            <OutlineButton size="md" onClick={deleteWorkOut} variant="danger">Delete</OutlineButton>
          </div>
        </div>
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
