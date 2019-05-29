import React from 'react';

class Login extends React.Component {
    handleLogin = e => {
        let user = document.getElementsByName('username')[0].value;
        let pass = document.getElementsByName('password')[0].value;

        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
    }

    render() {
        return (
            <form className='Login' onSubmit={this.handleLogin}>
                <input type='text' name='username' placeholder='username...'></input>
                <input type='text' name='password' placeholder='password...'></input>
                <button>Login</button>
            </form>
        )
    }
}

export default Login;