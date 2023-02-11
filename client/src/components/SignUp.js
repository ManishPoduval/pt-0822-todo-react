import React from 'react'
import {Button} from  'react-bootstrap'

function SignUp(props) {
  return (
    <form onSubmit={props.onSignUp}>
         <input  name="username"  type="text"  placeholder="Enter name"/>
        <input  name="email"  type="text"  placeholder="Enter email"/>
        <input  name="password"  type="password"  placeholder="Enter password"/>
        <Button  type="submit"  >Submit</Button>
    </form>
  )
}

export default SignUp