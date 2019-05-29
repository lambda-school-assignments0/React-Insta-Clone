import React from 'react';

const withAuthenticate = PostPage => LoginPage =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false,
                user: '',
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username') !== null && localStorage.getItem('password')) {
                this.setState({
                    loggedIn: true,
                    user: localStorage.getItem('username'),
                })
            }
        }

        render() {
            console.log(this)
            if (this.state.loggedIn === true) {
                return <PostPage user={this.state.user}/>;
            } else {
                return <LoginPage />;
            }
        }
}

export default withAuthenticate