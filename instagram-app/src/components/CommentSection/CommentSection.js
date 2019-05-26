import React from 'react';

// import styles
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        const initialState = {
            comments: this.props.comments,
            newComment: '',
        }

        this.state = initialState
    }

    

    handleChanges = e => {
        console.log('handling changes...')
        this.setState( {newComment: e.target.value });
    };

    addNewComment = e => {
        e.preventDefault();
        console.log('adding comment...');
        this.setState({
            comments: [...this.state.comments, {username: 'curr_user', text: this.state.newComment}],
            newComment: ''
        })
    };

    render() {
        return (
            <div className='CommentSection'>
                    {this.state.comments.map(comment => {
                        return( <p><a href='#'>{comment.username}</a> {comment.text}</p> )
                    })}

                    <div className='AddCommentSection'>
                        <form onSubmit={this.addNewComment}>
                            <input className='AddComment' type='text' value={this.state.newComment} onChange={this.handleChanges} placeholder='Add a comment...'></input>
                        </form>
                    </div>
            </div>
        );
    }
}

export default CommentSection