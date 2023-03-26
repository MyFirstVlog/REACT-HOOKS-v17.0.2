import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(20);

    const increment = useCallback(
      (number) => {
        setCounter((value) => value + number);
      },
      [],
    );
    

    return (
    <>  
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}/>

    </>


  )
}
