import { useState, useEffect } from "react";
import {getPosts} from "../features/posts/postSlice"
import {useDispatch, useSelector} from "react-redux"
//สร้างเพื่อเอาโค้ดมา รียูส ในหน้า singlepost กดไปแล้วจะมีposts list
//โดยดึงเอา getPost, deletePostsมา
//ทุกครั้งที่เรา usePosts ฟังชั่นในนี้จะถูกสร้างใช้ใหม่
//จัดการstate posts ต้องสร้าง posts sliceก่อน

export function usePosts(){

    //ก่อนใช้ redux useState
    //const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);
    //เมื่อใช้ redux แล้ว ตัวstate ถูกSelector มาเปนแบบนี้
    const posts = useSelector((state)=> state.posts.posts);
    const isLoading = useSelector((state)=> state.posts.status === 'pending')
    const dispatch = useDispatch();

    useEffect( ()=> {
      //ปิดไว้เพราะถูกใช้งานที่ postSlice
        // async function getPosts() {
        //   try {
        //     let response = await fetch("http://localhost:8000/posts");
        //     let data = await response.json();
        //     setPosts(data.data);
        //   } catch (error) {
        //     setIsError(true);
        //     console.log("error !");
        //   }
        // }
         dispatch(getPosts());
      }, []);

      async function handleDeletePost(postId) {
        // console.log("postId:", postId);
        // let response = await fetch("http://localhost:8000/posts/" + postId, {
        //   method: "DELETE",
        // });
    
        // if (response.ok) {
        //   let newPosts = posts.filter((post) => {
        //     return post.id !== postId;
        //   });
        //   setPosts(newPosts);
        // }
      }

      return {posts, isError,handleDeletePost, isLoading}
}
