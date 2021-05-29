import {createSlice} from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    //Slice เราสามารถแก้ไขได้โดยตรงแบบนี้เลย ด้วย reduxToolkit
    reducers: {
        increment: (state)=> {
            state.counter += 1
        },
        decrement: (state)=> {
            state.counter -= 1
        },
        reset: (state)=> {
            state.counter =0
        }, 
        addByAmount: (state, action)=> {
            //console.log(action)
            state.counter += action.payload
        }

    }
});
export const {increment, decrement, reset, addByAmount} = counterSlice.actions //export แบบ name
export default counterSlice.reducer //เอา reducer ไปให้store