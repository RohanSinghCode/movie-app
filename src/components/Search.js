import React from 'react'


const Search = ({handleChange,search}) => {
    return(
        <section className='searchbox-wrap'>
        <input 
        type="text" 
        className="searchbox" 
        placeholder='Search...'
        onChange = {handleChange}
        onKeyPress = {search}
        /> 
     </section>
    ) 
}


export default Search;

