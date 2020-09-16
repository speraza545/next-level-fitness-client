import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import WorkOutIndex from './WorkOutIndex'
import OutlineButton from '../shared/OutlineButton.js'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class Character extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our book state will be null, until the API request finishes
      character: null,
      // initially this book has not been deleted yet
      deleted: false

    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/characters/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ character: res.data.character }))
      .catch()
  }

  destroyPost = () => {
    axios({
      url: `${apiUrl}/characters/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // update their `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .then(() => this.props.msgAlert({
        heading: 'Character Deleted Successfully',
        message: messages.characterDeleteSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Character Delete Failed',
        message: messages.characterDeleteFailure,
        variant: 'danger'
      }))
  }
  destroyWorkOut = (workOutId) => {
    axios({
      url: `${apiUrl}/characters/${this.props.match.params.id}/work-outs/${workOutId}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(() => {
        return axios({
          url: `${apiUrl}/characters/${this.props.match.params.id}`,
          method: 'get',
          headers: {
            'Authorization': `Bearer ${this.props.user.token}`
          }
        })
      })
      .then(res => this.setState({ character: res.data.character }))
      .then(() => this.props.msgAlert({
        heading: 'Work Out Deleted Successfully',
        message: messages.workOutDeleteSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Work Out Delete Failed',
        message: messages.workOutDeleteFailure,
        variant: 'danger'
      }))
  }
  editWorkOut = (workOutId) => {
    const newPath = `/characters/${this.props.match.params.id}/work-outs/${workOutId}/edit`
    this.props.history.push(newPath)
  }

  render () {
    const { character, deleted } = this.state

    if (!character) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        pathname: '/characters'
        // state: { message: 'Deleted post successfully' }
      }} />
    }

    const workOutHtml = (
      <div>
        {this.state.character.workOuts.map(workOut => (
          <WorkOutIndex
            key={workOut._id}
            character={this.state.character}
            date={workOut.date}
            type={workOut.type}
            title={workOut.title}
            reps={workOut.reps}
            minutes={workOut.minutes}
            content={workOut.content}
            deleteWorkOut={() => this.destroyWorkOut(workOut._id)}
            editWorkOut={() => this.editWorkOut(workOut._id)}
            owner={workOut.owner}
            user={this.props.user._id}
          />
        ))}
      </div>
    )
    return (
      <div className='long'>
        <div>
          <div className={character.class}>
            <p>Name:<h2>{character.name}</h2></p>
          </div>
          <div className={character.class}>
            <p>Class:<h3>{character.class}</h3></p>
          </div>
          <div className={character.class}>
            <h4>Stats:</h4>
            <p>Health: {character.health}</p>
            <p>Strength: {character.strength}</p>
            <p>Stamina: {character.stamina}</p>
            <p>Magick: {character.magick}</p>
            <p>Healing: {character.healing}</p>
          </div>
          <Link to={`/characters/${this.props.match.params.id}/edit`}>
            <OutlineButton variant="outline-info">Edit</OutlineButton>
          </Link>
          <Link to={`/characters/${this.props.match.params.id}/work-outs`}>
            <OutlineButton variant="outline-info">add work out</OutlineButton>
          </Link>
          <OutlineButton variant= "outline-danger" onClick={this.destroyPost}>Delete Character</OutlineButton>
        </div>
        <h3>Work Outs:</h3>
        {workOutHtml}
      </div>
    )
  }
}

export default withRouter(Character)
