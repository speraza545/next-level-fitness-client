import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import WorkOutForm from '../shared/WorkOutForm'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
// import messages from '../AutoDismissAlert/messages'

class WorkOutEdit extends Component {
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
      updated: false,
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
      url: `${apiUrl}/characters/${this.props.match.params.id}/work-outs/${this.props.match.params.workoutid}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { workOut: this.state.workOut }
    })
      .then(res => this.props.msgAlert({
        heading: 'Work Out Edited Successfully',
        message: messages.workOutEditSuccess,
        variant: 'success'
      }))
      .then(res => this.setState({ updated: true }))
      .catch(() => this.props.msgAlert({
        heading: 'Work Out Edit Failed',
        message: messages.workOutEditFailure,
        variant: 'danger'
      }))
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { workOut, updated } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (updated) {
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

export default withRouter(WorkOutEdit)
