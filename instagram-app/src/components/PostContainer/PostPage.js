import React from 'react';

// import image
import InstagramLogo from '../../assets/instagram_logo_txt.png';

// import components
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

// import data
import dummyData from '../../data/dummy-data';

class PostPage extends React.Component {
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
    
      handleSearch = e => {
        e.preventDefault();
        this.setState({
          instagramPosts: dummyData.filter(data => data.username.includes(`${this.state.searchPosts}`))
        })
      }
    
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
    render() {
        return (
            <div className='PostPage'>
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
                    <PostContainer post={post} key={idx} user={this.props.user}/>
                ))}
            </div>
        );
    }
}

export default PostPage;