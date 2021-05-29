import { useEffect } from "react";
import {useHistory} from "react-router-dom"

function Counter(props) {

  const history = useHistory();
  
  useEffect(() => {
    console.log("Test effect");
  });

  useEffect(() => {
    console.log("Effect is running");

    return () => {
      // cleanup function
      console.log("clean up !");
    };
  }, [props.counter]);

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.incrementCounter}>add</button>
      <button onClick={props.decrementCounter}>subtract</button>
      <button onClick={props.resetCounter}>reset</button>
      <button onClick={()=>history.push('/')}>GO HOME</button>
      <button onClick={props.addByAmountCounter}>Add Counter by Amount</button>
    </div>
  );
}

export default Counter;
