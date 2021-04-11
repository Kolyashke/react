import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './component/todo-list'
import AppHeader  from './component/AppHeader'
import SearchPanel from './component/SearchPanel'

const App=()=>{
return(
<div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>
  </div>
  )
}

ReactDom.render(<App/>, document.getElementById('root'))