import React from 'react'


// Компонент отвечающий за заголовок
// ему передаются два численных значения: 1 - сколько активных, 2 - сколько сделано
const AppHeader=({toDo, done})=>{
    return(
      <div className="container">
          <div className="row"> 
              <div className="col-6">
               <h1>Список моих дел</h1> 
              </div>

              <div className="col-6 mt-3 text-truncatetext-secondary">
                <h4> {toDo} активно, {done} сделано </h4>
              </div>
          </div>
      </div>
    )
  }

  export default AppHeader;