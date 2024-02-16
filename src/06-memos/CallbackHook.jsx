import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export default function CallbackHook() {

   const [counter, setCounter] = useState(10);

   const incrementFather = useCallback( 
     () => {
        setCounter( (value) => value + 1);
     },
     [],
   )

  return (
   <>
        <h1> useCallBack Hook: {counter} </h1>
        <hr/>
        < ShowIncrement  increment={ incrementFather }/>
   </>
  )
}
