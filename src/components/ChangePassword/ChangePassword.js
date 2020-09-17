import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => msgAlert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <Form onSubmit={this.onChangePassword} className='authForms'>
            <Form.Label><h3>Please Change Password Below</h3></Form.Label>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old password:</Form.Label>
              <Form.Control
                required
                className="smaller-input"
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control
                required
                className="smaller-input"
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="authButton"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
