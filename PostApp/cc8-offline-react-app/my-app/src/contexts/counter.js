import React from 'react';
import {useReducer,useContext} from 'react'

const CounterContext = React.createContext();

const INITIAL_STATE={
    counter:0
  }
  
  function counterReducer(state, action){ //stateณตอนนั้นกับ action ที่ส่งเข้ามา
    switch (action.type) {
      case "increment":
        //reducer จะ return object ใหม่ออกไป แต่ reduxสามารถreturnค่าตรงๆได้
        return {counter: state.counter + 1 };
      case "decrement":
        return {counter: state.counter - 1 };
      case "reset":
        return {counter: 0 };
      default:
        return state;
    }
  }

function CounterProvider(props){

    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE) 

    const counterContextValue = {
        state, 
        dispatch
    };

    return (
    <CounterContext.Provider value={counterContextValue}>
        {props.children}
    </CounterContext.Provider>
    )
}

//ต้องอยู่ล่างprovider
function useCounter(){
  const context = useContext(CounterContext)
  return context
}
export {CounterProvider, useCounter}