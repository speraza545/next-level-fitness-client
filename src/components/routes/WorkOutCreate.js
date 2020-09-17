import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import WorkOutForm from '../shared/WorkOutForm'
import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'

class WorkOutCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      workOut: {
        date: '',
        type: '',
        title: '',
        reps: '',
        minutes: '',
        content: ''
      },
      created: false,
      characterId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedWorkOut = Object.assign({}, prevState.workOut, updatedField)
      return { workOut: editedWorkOut }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/characters/${this.props.match.params.id}/work-outs`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { workOut: this.state.workOut }
    })
      .then(res => this.props.msgAlert({
        heading: 'Work Out Created Successfully',
        message: messages.workOutCreateSuccess,
        variant: 'success'
      }))
      .then(res => this.setState({ created: true }))
      .catch(res => this.props.msgAlert({
        heading: 'Work Out Create Failed',
        message: messages.workOutCreateFailure,
        variant: 'danger'
      }))
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { workOut, created } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (created) {
      // redirect to the show page (route)
      return <Redirect to={`/characters/${this.props.match.params.id}`} />
    }
    return (
      <div>
        <WorkOutForm
          workOut={workOut}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/characters/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default withRouter(WorkOutCreate)
