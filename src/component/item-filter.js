import React from 'react'

// Класс который формирует набор кнопок. 
class Itemsfilter extends React.Component{
    render(){
    return (
            <div className="container">
                <div className="btn-group" role="group" >
                    <button className="btn btn-info"> Все </button>
                    <button className="btn btn-outline-secondary"> Активные</button>
                    <button className="btn btn-outline-secondary"> Сделано</button>
                </div>
            </div>
        )
    }
}

export default Itemsfilter
