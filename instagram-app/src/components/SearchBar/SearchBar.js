import React from 'react';

// import styles
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return (
            <form className='SearchBarForm' onSubmit={this.props.handleSearch}>
                <input
                    type='text'
                    placeholder='Search'
                    name='searchPosts'
                    value={this.props.searchPosts}
                    onChange={this.props.handleChange}
                    className='SearchBarInput'
                />
            </form>
        );
    }
}

export default SearchBar