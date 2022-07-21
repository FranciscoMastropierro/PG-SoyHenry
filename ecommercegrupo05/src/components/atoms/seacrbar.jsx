import React from 'react';
import search from '../../assets/search.jpg'
import style from '../../styles/searchbar.module.css'

export default function SearchBar () {
    return (
        <div className={style.searchbarContainer}>
            <input key='searchbar' placeholder='search...'/>
            <button type='submit'><img src={search} alt='search-button'/></button>
        </div>
    )
}