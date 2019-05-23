import React from 'react';

// import styles
import './CommentSection.css';

class CommentSection extends React.Component {
    
    render() {
        console.log(this)
        return (
            <div className='CommentSection'>
                <a href='#'>{this.props.comment.username}</a> {this.props.comment.text}
            </div>
        );
    }
}

export default CommentSection