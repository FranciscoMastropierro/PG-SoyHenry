import React from 'react';
import SearchBar from '../atoms/seacrbar'
import SidebarOptions from '../atoms/sidebaroptions';

export default function NavBar () {
    return (
        <div>
            {/* imagen de marca */}
            {/* switch */}
            <SearchBar/>
            <SidebarOptions/>
        </div>
    )
}