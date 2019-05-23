import React from 'react';

// import components
import CommentSection from '../CommentSection/CommentSection';

// import styles
import './PostContainer.css';

class PostContainer extends React.Component {

    render() {
        console.log(this)
        return (
            <div className='PostContainer'>
                <div className='PostHeader'>
                    <img src={this.props.post.thumbnailUrl} alt={this.props.post.username} />
                    {this.props.post.username}
                </div>
                <div className='PostImg'>
                    <img src={this.props.post.imageUrl} alt={this.props.post.imageUrl} />
                </div>
                <div className='PostComments'>
                    {this.props.post.comments.map(comment => (
                        <CommentSection comment={comment}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default PostContainer