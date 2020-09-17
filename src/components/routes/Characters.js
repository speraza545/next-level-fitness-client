import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'
import OutlineButton from '../shared/OutlineButton.js'

// This will be our Books Index component (show all books)
class Characters extends Component {
  constructor (props) {
    super(props)

    // setup our initial state
    this.state = {
      // we have zero books, until our API request has finished
      characters: []
    }
  }

  // this is called whenever our component is created and inserted
  // into the DOM (first appears)
  componentDidMount () {
    // make a GET request for all of the books
    axios({
      url: `${apiUrl}/characters`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ characters: res.data.characters }))
      // .then(res => console.log(res))
      .catch(res => this.props.msgAlert({
        heading: 'Character Index Failed',
        message: messages.characterIndexFailure,
        variant: 'danger'
      }))
      // .catch(console.error)
  }
  render () {
    const characters = null
    if (this.state.characters) {
      const characters = this.state.characters.map(character => (
        <div key={character._id} className={character.class}>
          <Link to={`/characters/${character._id}`}>
            {`${character.name} - ${character.class} - total work outs: ${character.workOuts.length}`}
            {console.log(character.workOuts.length)}
          </Link>
        </div>
      ))
      return characters
    }
    return (
      <div className='long'>
        <Link to={`/characters/${this.props.match.params.id}/work-outs`}>
          <OutlineButton variant="dark">Add Work Out</OutlineButton>
        </Link>
        {characters}
      </div>
    )
  }
}

export default withRouter(Characters)
