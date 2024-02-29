
export const TodoList = ({props}) => {



    const delMap = ( ) => {

        console.log('Entro al delMap');

        const newprops =
            
            {
                id: new Date().getTime() * 3,
                description: 'Recolectar la piedra de la Oscuridad',
                done: false,
            }
        
        
        console.log(newprops);

        return(
                props = (newprops)
             
            )


    }

    console.log(props)
   
  return (


    <ul className="list-group">
    {
      props.map( todo => (
        // TodoItem.....
        <li key={ todo.id } className="list-group-item d-flex justify-content-between">
         <span className="align-self-center">Item 1</span>
         <button className='btn btn-danger' onClick={delMap} >Borrar</button>
       </li>
        ))
    }
  </ul>


  )
}




    /*
               <ul className="list-group">
              {
                todos.map( todo => (
                  // TodoItem.....
                  <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                   <span className="align-self-center">Item 1</span>
                   <button className='btn btn-danger'>Borrar</button>
                 </li>
                  ))
              }
            </ul>
    */  