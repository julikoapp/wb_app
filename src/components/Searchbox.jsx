import React from 'react'


function SeachBox(props){

    return(
    <input 
        className='search-box'
        type='text' 
        value={props.nameLookfor}
        placeholder="search Robots"
        onChange={props.searchingFunction}
        ></input>)
}

export default SeachBox