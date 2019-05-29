import React from 'react';

import Login from './components/Login/Login';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './authentication/withAuthenticate';

// import styles
import './App.css';

class App extends React.Component {
  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
