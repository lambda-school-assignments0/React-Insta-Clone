import React from 'react';

// import image
import InstagramLogo from './assets/instagram_logo_txt.png';

// import components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// import data
import dummyData from './data/dummy-data';

// import styles
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      instagramPosts: [],
      searchPosts: '',
    }
  }

  componentDidMount() {
    console.log('CDM running...');
    this.setState( {instagramPosts: dummyData });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSearch = e => {

  }

  render() {
    return (
      <div className="App">
        <header className='Header'>
          <div className='LeftSection'>
              <i className='fab fa-instagram' /><img src={InstagramLogo} alt='instagram-logo' />
          </div>
          <div className='MiddleSection'>
              <SearchBar searchPosts={this.state.searchPosts} handleSearch={this.handleSearch} handleChange={this.handleChange} />
          </div>
          <div className='RightSection'>
              <i className='far fa-compass' />
              <i className='far fa-heart' />
              <i className='far fa-user' />
          </div>
      </header>
        {this.state.instagramPosts.map((post, idx) => (
          <PostContainer post={post} key={idx}/>
        ))}
      </div>
    );
  }
}

export default App;
