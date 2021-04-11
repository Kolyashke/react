import React from 'react';
import TodoListItem from './todo-list-item'

const TodoList=()=>{
    const items = ['Проснуться', 'Покушать','Пойти в школу']
    return (
            <ul> 
            <li> {items[0]} </li>
            <li> {items[1]} </li>
            <li> {items[2]}</li>
            <li> <TodoListItem label={items[0]} important={true}/></li>
            <li> <TodoListItem label={items[1] }/></li>
        </ul>
    )
  }

  export default TodoList;