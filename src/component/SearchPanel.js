import React from 'react'


// Функция формирует элемент для поиска. В функции указаны различные css свойства для placeholder
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