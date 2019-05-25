import React from 'react';

// import styles
import './CommentSection.css';

class CommentSection extends React.Component {
    
    addNewComment() {
        console.log('adding comment...');
    }

    render() {
        console.log(this)
        return (
            <div className='CommentSection'>
                    {this.props.comments.map(comment => {
                        return( <p><a href='#'>{comment.username}</a> {comment.text}</p> )
                    })}

                    <div className='AddCommentSection'>
                        <input className='AddComment' placeholder='Add a comment...'></input>
                    </div>
            </div>
        );
    }
}

export default CommentSection