import React from 'react';
import TodoListItem from './todo-list-item'

//Формирование списка из блоков задач. В функцию перадется список с название задачи, параметром и идентификатором
const TodoList=({todos,onDelete})=>{
    //Функция формирующая элемент списка, потом передается в функцию TodoList
    const el=todos.map((item)=>{
        // Разбиение массива. Идентификатор отдельно, передается в порядковый номер элемента списка
        // Остальная часть массива передется в компонент для формирования задачи.
        const {id,...itemprops}=item;
        return (
            <li key={id} className="list-group-item"> 
                <TodoListItem {...itemprops}
                onDelete={()=>onDelete(id)}  //функция удаления пункта
                />
            </li>
            );
    })

    return (
        <ul className="list-group">
            {el}
        </ul>
    )
}

  export default TodoList;