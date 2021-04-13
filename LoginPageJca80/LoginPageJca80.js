import React, { useState } from 'react'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login ({ setToken })
{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div id = "login">
            <h1>FedEx Employee Login</h1>
            <hr /> 
            <form onSubmit = {handleSubmit}>
                <label>
                    <h3>Username</h3>
                    <input type = "text" placeholder = " Input Username" id = "username" onChange = {e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    <h3>Password</h3>
                    <input type = "text" placeholder = " Input Password" id = "password" onChange = {e => setPassword(e.target.value)} />
                </label>
                <br /> <br />
                <button type = "submit">Submit</button>
            </form>
            <br /> 
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;
