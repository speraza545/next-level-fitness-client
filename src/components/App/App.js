import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Characters from '../routes/Characters'
import CharacterCreate from '../routes/CharacterCreate'
import Character from '../routes/Character'
import CharacterEdit from '../routes/CharacterEdit'
import WorkOutCreate from '../routes/WorkOutCreate'
import WorkOutEdit from '../routes/WorkOutEdit'
import { withRouter } from 'react-router'
import Home from '../routes/Home'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/characters' render={ () => (
            <Characters user={user} />
          )}/>
          <AuthenticatedRoute user={user} exact path='/characters-create' render={ () => (
            <CharacterCreate user={user} msgAlert={this.msgAlert} setCreatedId={this.setCreatedId}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/characters/:id' render={ (props) => (
            <Character {...props} user={user} msgAlert={this.msgAlert} setDeleted={this.setDeleted}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/characters/:id/edit' render={ (props) => (
            <CharacterEdit {...props} user={user} msgAlert={this.msgAlert} setUpdated={this.setUpdated}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/characters/:id/work-outs' render={ (props) => (
            <WorkOutCreate {...props} user={user} msgAlert={this.msgAlert} setCreated={this.setCreated}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/characters/:id/work-outs/:workoutid/edit' render={ (props) => (
            <WorkOutEdit {...props} user={user} msgAlert={this.msgAlert} setUpdated={this.setUpdated}/>
          )}/>
          <Route exact path='/' component={Home} />
        </main>
      </Fragment>
    )
  }
}

export default withRouter(App)
