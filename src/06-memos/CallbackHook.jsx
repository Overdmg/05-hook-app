import { useState } from "react"
import ShowIncrement from "./ShowIncrement";

export default function CallbackHook() {

   const [counter, setCounter] = useState(10);

   const increment = () => {
        setCounter( counter + 1);
   };

  return (
   <>
        <h1> useCallBack Hook: {counter} </h1>
        <hr/>
        < ShowIncrement  increment={ increment}/>
   </>
  )
}
