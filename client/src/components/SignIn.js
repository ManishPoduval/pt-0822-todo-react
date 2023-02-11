import React from 'react'
import {Button} from  'react-bootstrap'

function SignIn(props) {
    const{onSignIn} = props
	return (
		<form onSubmit={onSignIn}>
			<input  name="email"  type="text"  placeholder="Enter email"/>
			<input  name="password"  type="password"  placeholder="Enter password"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default SignIn