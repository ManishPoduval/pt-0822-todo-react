import React from 'react'
import GoogleLogin from '@caranmegil/react-google-login';

function GoogleButton(props) {
    const {onSuccess, onFailure} = props
   
    return (
        <div>
                <GoogleLogin
                    clientId={'327001794885-f1mjf96r7jjscdsqk4m26koacbcjfilc.apps.googleusercontent.com'}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />,
        </div>
    )
}

export default GoogleButton