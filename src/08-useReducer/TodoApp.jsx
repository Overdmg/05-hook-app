import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'



const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra de la vida',
    done: false,
  }
]

export default function TodoApp() {

const  [todos, dispatch] = useReducer(todoReducer, initialState)

//console.log(todos)

const handlerNewTodo = ( todos ) => {

    //console.log({ todos })

}


  return (
    <>
    <h1>Todo App: 10, <small>pendientes: 2</small> </h1>
    <hr/>
      <div className="row">
        <div className="col-7">

          {/* TodoList - Componente */}       
        {
          <TodoList props = {todos}/>
        }      
          {/* fin TodoList - Componente */}      

        </div>

      <div className="col-5">


          <h4> Agregar TODO </h4>
          <hr/>
       
        {/*  TodoAdd onNewTodo (todo) */}
         {/* {   id: new Date().getTime(),
                 description: '',
                 done: false
              } 
        */}
       
       <TodoAdd />
          
          {/*  TodoAdd */}

       </div>
      </div>
    
    </>
  )
}
