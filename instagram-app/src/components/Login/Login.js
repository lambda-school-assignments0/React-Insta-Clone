import React from 'react';

// import styling
import './Login.css';

// import image
import InstagramLogo from '../../assets/instagram_logo_txt.png';

// import reactstrap
import { Button } from 'reactstrap'; // import button from reactstrap
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'; // import card from reactstrap
import { Container, Row, Col } from 'reactstrap'; // import layout from reactstrap
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'; // import form

class Login extends React.Component {
    handleLogin = () => {
        let user = document.getElementsByName('username')[0].value;
        let pass = document.getElementsByName('password')[0].value;

        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
    }

    render() {
        return (
            <div className='Login'>
                <Form>
                    <form className='LoginForm' onSubmit={this.handleLogin}>
                        <img src={InstagramLogo} alt='instagram-logo' />
                        <Input type='text' name='username' id='Username' placeholder='Phone number, username, or email' />
                        <Input type='password' name='password' id='Password' placeholder='Password'/>
                        <Button color='primary'>Login</Button>
                        <a href='#' className='LoginForgotPassword'>Forgot Password?</a>
                    </form>
                </Form>
            </div>
        )
    }
}

export default Login;