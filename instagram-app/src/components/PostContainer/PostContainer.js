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
                    {this.props.post.username}
                </div>

                <div className='PostImg'>
                    <img src={this.props.post.imageUrl} alt={this.props.post.imageUrl} />
                </div>

                <div className='PostLikeComment'>
                    <i className='far fa-heart' />
                    <i className='far fa-comment fa-flip-horizontal' />
                    <p>999 likes</p>
                </div>

                <CommentSection comments={this.props.post.comments}/>
            </div>
        );
    }
}

export default PostContainer