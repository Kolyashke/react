import React, {Component} from 'react'
import './item-add.css'


// класс для добавления кнопки, которая создает новую задачу
export default class ItemAdd extends Component{
    render(){
        return(
            <div className="item-add-form"> 
                <button onClick={()=>this.props.onAdd('Новая задача')}
                 className="btn btn-outline-secondary"> Добавить задачу </button>
            </div>
        )
    }
}