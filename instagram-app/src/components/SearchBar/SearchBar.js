import React from 'react';

// import styles
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <input
                type='text'
                placeholder='Search'
                name='search-bar'
                className='SearchBar'
            >
            </input>
        );
    }
}

export default SearchBar