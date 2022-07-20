import React from 'react';

export default function SearchBar () {
    return (
        <div>
            <input key='searchbar' placeholder='Search...'/>
            <button key='submit-button' type='submit'>🔍</button>
        </div>
    )
}