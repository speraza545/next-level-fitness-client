import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CharacterForm from '../shared/CharacterForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class CharacterEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      character: {
        name: '',
        class: '',
        health: '',
        strength: '',
        stamina: '',
        magick: '',
        healing: ''
      },
      updated: false
    }
  }
  componentDidMount () {
    axios(`${apiUrl}/characters/${this.props.match.params.id}`)
      .then(res => this.setState({ character: res.data.character }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedCharacter = Object.assign({}, prevState.character, updatedField)
      return { character: editedCharacter }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/characters/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { character: this.state.character }
    })
      .then(res => this.setState({ updated: true }))
      .then(res => this.props.msgAlert({
        heading: 'Character Edited Successfully',
        message: messages.characterEditedSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Character Edit Failed',
        message: messages.characterEditFailure,
        variant: 'danger'
      }))
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { character, updated } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (updated) {
      // redirect to the show page (route)
      return <Redirect to={`/characters/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <CharacterForm
          character={character}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/characters/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default withRouter(CharacterEdit)
