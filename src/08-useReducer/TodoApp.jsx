import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false,
  }
]

export default function TodoApp() {

const  [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
    <h1>Todo App</h1>
    <hr/>
      <div className="row">
        <div className="col-7">
            <ul className="list-group">
               <li className="list-group-item">
                <span>Item 1</span>
                <button>Borrar</button>
              </li>

            </ul>
        </div>
      </div>
    
      <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr/>
          <form>
              <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                />
          </form>

          <button
           type="submit"
           className="btn btn-outline-primary mt-3">
            Agregar
          </button>
      </div>
    </>
  )
}
