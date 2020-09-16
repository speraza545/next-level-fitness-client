import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CharacterForm from '../shared/CharacterForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class CharacterCreate extends Component {
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
      createdId: null
    }
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
      url: `${apiUrl}/characters`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { post: this.state.character }
    })
      .then(res => {
        this.props.msgAlert({
          heading: 'Character Created Successfully',
          message: messages.characterCreatedSuccess,
          variant: 'success'
        })
        return res
      })
      .then(res => this.setState({ createdId: res.data.post._id }))
      .catch(res => this.props.msgAlert({
        heading: 'Post Create Failed',
        message: messages.characterCreatedFailure,
        variant: 'danger'
      }))
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { character, createdId } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (createdId) {
      // redirect to the show page (route)
      return <Redirect to={`/characters/${createdId}`} />
    }

    return (
      <div>
        <CharacterForm
          character={character}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default withRouter(CharacterCreate)
