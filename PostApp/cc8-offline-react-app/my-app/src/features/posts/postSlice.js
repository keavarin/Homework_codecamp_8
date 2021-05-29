import {createSlice} from "@reduxjs/toolkit"

const  postSlice = createSlice ({
    name: "posts",
    initialState:{
        posts: [],
        status: 'idle' //กรณีหน้าเวบ Loading
    },
    reducers: { //reducersรวมตัวctionที่จะเกิดขึ้น
        postLoading: (state)=>{
            if(state.status === 'idle')
            {
                state.status = 'pending'
            }
        },
        postsReceived: (state, action)=> {
            if(state.status === 'pending')
            {
            state.status = 'idle';
            //setStateใหม่
            state.posts = action.payload //ตัวโพสที่ fetch มาต้องใส่ action เข้ามาด้วย
            }
        }, 
    },
})
export const {postsReceived, postLoading} = postSlice.actions;

//export ออกมาเป็น function ได้ เรียก redux thunk(ตัวจัดการ asynchronus flow)
//การเปลี่ยน state เกิดจาก fetch ข้อมูลมาจากฝั่ง server
//getpost functionที่get post return เปน functionอีกที
const getPosts  = ()=> async (dispatch)=> {
    dispatch(postLoading())
    let response = await fetch("http://localhost:8000/posts")
    let posts = await response.json()
    
    //เมื่อข้อมูลเเกะออกมาแล้ว ก้dispatch
    dispatch(postsReceived(posts.data))
    //dispatch แล้วก็มาเข้า reducers
};

export {getPosts}
export default postSlice.reducer