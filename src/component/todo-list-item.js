import React from 'react'
import './todo-list-item.css'
// Создается класс для блоков с задачей, иконками и разукрашивает в красный цвет 
class TodoListItem extends React.Component{

    //Объект который хранит состяния нажата ли задача, и важная она или нет. Изначально равна false
   state={
       done: false,
       important: false
    }
    //Функция нажатия на задачу. Смена состяния done на то что она выполнена
    onLabelClick=()=>{ this.setState(({done})=>
    { 
        return{done:!done}
    });
}
    markImportant=()=> {this.setState(({important})=>
    
    {
        return {important:!important}
    })
}
    
    render(){
                const {label,onDelete} = this.props;    //деструктуризация входных функций и переменных
                const {done, important}=this.state;     //деструктуризация объекта state. Создание двух переменных
                let classNames='item-list-base';        // присваивание первоначального класса для каждой задачи
                if (important)                          // в случае изменения параметра важности добавляем класс important
                {
                    classNames+=' important'
                }
                if (done){                             // в случае изменения параметра выполнения задачи добавляем класс done
                    classNames+=' done';
                }
                
                return( 
                        // span - выводим задачу на экран и красим ее. 
                        // далее добавляются кнопки в виде спец. иконок
                        //вызов функции смены важности при нажатии на !
                        //вызов функции удаления при нажатии на мусорное ведро
                        <span className={classNames}>  
                            <span  onClick={this.onLabelClick} > {label} </span>   
                                 
                            <button className="btn btn-outline-success float-right" onClick={this.markImportant}> <i className="fa fa-exclamation"> </i></button>
                            <button className="btn btn-outline-danger float-right" onClick={onDelete}> <i className="fa fa-trash-o"></i></button>
                        </span>
                    )   
            }
}
    export default TodoListItem;