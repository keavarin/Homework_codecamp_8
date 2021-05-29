import { useState,useReducer} from "react";
import Counter from "../components/Counter";
import {useCounter} from "../contexts/counter"
import ExtraCounter from "../components/ExtraCounter";
import { increment, decrement, reset, addByAmount } from "../features/counter/counterSlice"
import {useSelector, useDispatch} from "react-redux";

//((state)=> state.counter.counter)
//มาจาก store
// {
//   counter: {
//     counter: 0
//   }
// }
// counterReducer ตัวนี้คือ name: "counter",
// initialState: {
//     counter: 0
// },

function CounterPage() {
  //const [counter, setCounter] = useState(0);
  // const counter = useCounter(); 
  //const {state, dispatch} = useCounter() //destructur
  
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();  //useDispatch ตัวแปรที่ทำให้เกิด action
  const counter = useSelector((state)=> state.counter.counter)
  
  //สร้าง state เพื่อรับค่า user amount เข้ามาเองได้
  const [amount, setAmount] = useState(100)

  return (
    <div>
      <h1>Counter page</h1>
      {toggle && <Counter
      //*redux 
      counter={counter} 
      //*reducer
      //counter={counter.state.counter} 
      //*redux
      incrementCounter={()=> dispatch(increment())}
      decrementCounter={()=> dispatch(decrement())}
      resetCounter={()=> dispatch(reset())}
      addByAmountCounter={()=> dispatch(addByAmount(amount))}//สามารถใส่เป็น Obj

      //*reducer//ส่งฟังชั่นincrementCounter โดยเอาตัว dispatchส่งเข้าไปข้างในเป็น action
      // incrementCounter={()=> counter.dispatch({type: "increment"})}
      // decrementCounter={()=> counter.dispatch({type: "decrement"})}
      // resetCounter={()=> counter.dispatch({type: "reset"})}
      
      
      />}
      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default CounterPage;
