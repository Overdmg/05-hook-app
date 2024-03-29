import { useMemo, useState } from "react";
import { useCounter } from "../hooks";





const heavyStuff =  ( iterationNumber = 10 ) => {
    for(let i = 0; i< iterationNumber; i++) {
        console.log('Total de Iteraciones:')
    }
    return `${ iterationNumber} Iteraciones.. Realizadas.`
}

export const MemoHook = () => {

 const { counter, increment } = useCounter(5000);

 const [ show, setShow ] = useState(true);


 const memorizedValue = useMemo ( () => heavyStuff(counter),[counter] ); 



  return (
   <>
    <h1>Counter:  <small>{ counter }</small>  </h1>
    <hr/>
    <h4> { memorizedValue } </h4>
    <hr/>


    <button
        className="btn btn-primary"
        onClick={  ()=> increment() }
        
     > +1
    </button>
    <button 
        className="btn btn-outline-primary"
        onClick={ ()=> setShow( !show) }
      
    > Show/Hide { JSON.stringify(show)}
    </button>


   </>
     )
}
