import React from 'react';

// import styles
import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        console.log(this);
        return (
            <form onSubmit={this.props.handleSearch}>
                <input
                    type='text'
                    placeholder='Search'
                    name='search-bar'
                    value={this.props.searchPosts}
                    onChange={this.props.handleChange}
                    className='SearchBar'
                />
            </form>
        );
    }
}

export default SearchBar