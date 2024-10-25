import React from 'react';


const SearchBox = ({ searchField , searchChange }) => {
    return(
        <div>
           <input 
           type='searcbox'
           placeholder='Search Robots'
           className='search-box'
           onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;