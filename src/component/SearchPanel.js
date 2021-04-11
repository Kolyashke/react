import React from 'react'
const SearchPanel=()=>{
    const Text='Ask me everything';
    const TextStyle={
      fontSize:'20px'
    }
    return( <input 
      style={TextStyle}
      placeholder={Text}
      className='MyClass'/>)
  }
  export default SearchPanel;