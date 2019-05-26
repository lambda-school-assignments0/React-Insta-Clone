import React from 'react';

// import components
import CommentSection from '../CommentSection/CommentSection';

// import styles
import './PostContainer.css';

class PostContainer extends React.Component {

    render() {
        return (
            <div className='PostContainer'>
                <div className='PostHeader'>
                    <img src={this.props.post.thumbnailUrl} alt={this.props.post.username} />
                    <a href={`https://www.instagram.com/${this.props.post.username}/`}>{this.props.post.username}</a>
                </div>

                <div className='PostImg'>
                    <img src={this.props.post.imageUrl} alt={this.props.post.imageUrl} />
                </div>

                <CommentSection likes={this.props.post.likes} comments={this.props.post.comments}/>
            </div>
        );
    }
}

export default PostContainer