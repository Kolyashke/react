import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './component/todo-list'
import AppHeader  from './component/AppHeader'
import SearchPanel from './component/SearchPanel'
import Itemsfilter from './component/item-filter'
import ItemAdd from './component/item-add'


// Функция, которая объединяет все компоненты вместе
class App extends React.Component{
  maxId=100;
  //Массив с входными параметрами для формирования списка
  state={ todoData:[
    {label:'Покушать', important:true, id:1},
    {label:'Поиграть в футбол', important:false, id:2},
    {label:'Убраться по дому', important:true, id:3},
  ]
};

//Функция удаления в нее передается id элемента
deleteItem=(id)=>{
  this.setState(({todoData})=>{
      const indx=todoData.findIndex((el)=>el.id===id);      //находим элемент по id
      const firstArr=todoData.slice(0,indx);                //разрезаем на первую часть
      const secondArr=todoData.slice(indx+1);               //разрезаем на вторую часть
      const newArray=[...firstArr,...secondArr];            //склеиваем две части вместе
      return{
        todoData:newArray                                   //обновляем массив
      }

  })

}

addItem=(text)=>{               // создание функции addItem
  const NewItem={               //создаем элемент массива с именем, важностью и id
    label:text,
    important:false,
    id: this.maxId++
  };
  this.setState(({todoData})=>            //перезаписваем состояние общего массива
  {
    const newArr=[...todoData,NewItem];   //создаем массив из старого с добавлением нового элемента
    return {
      todoData:newArr
    }
  })
}

render(){
  return(
//передаем в TODOLIST массив с данными и функцию с ID для удаления данных
<div className="container" style={{maxWidth:800}}>
    <AppHeader toDo={3} done={4}/>
    <div className="row pt-2 pb-2">
        <div className="col-6">
          <SearchPanel/>
        </div>
        <div className="col-6">
          <Itemsfilter/>
        </div>
    </div>
  
    <TodoList todos={this.state.todoData}   //передача общего массива в TODOLIST, передача функции удаления и добавления элемента
    onDelete={this.deleteItem}  />            
    <ItemAdd  onAdd={this.addItem}/>
  </div>
  )
}
}

ReactDom.render(<App/>, document.getElementById('root'))