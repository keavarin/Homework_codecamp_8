import {configureStore} from '@reduxjs/toolkit'
//configStore ฟังชั่นที่เอาไว้สร้าง store
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postSlice'
//store เป็น Object ก้อนใหญ่ๆ
//state เราเปลี่ยนอะไรอย่าลืมเอามาใส่ที่store 
export default configureStore({

    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
    // //ก้อนนี้ {
    //     counter: counterReducer
    // }คือ State ของapp เราทั้งหมด แบ่งstate ตามreducer
    //reducer ->combine state ให้อยู่ในก้อนเดียว
});