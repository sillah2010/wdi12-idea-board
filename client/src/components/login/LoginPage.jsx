import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpForm from './SignUpForm'

class LoginPage extends Component {
  state = {
    users: []
  }

  componentWillMount () {
      this.getAllUsers()
  }

  getAllUsers = async () => {
    const res = await axios.get('/api/users')
    this.setState({users: res.data})
  }
  
  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.users.map(user => {
          return (<Link key={user._id} to={`/idea/${user._id}`}>{user.userName}</Link>)
        })}
        <SignUpForm />
      </div>
    )
  }
}

export default LoginPage