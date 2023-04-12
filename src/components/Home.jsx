import React, { useEffect, useState } from 'react'
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";//{}は名前付きインポート
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));// dbへアクセス
      // 階層が深いのでdata関数を使うと取得が簡単になる
      // firebaseはdbからの値取得が難しい。
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [])

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.auther.username}</h3>
              <button>削除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home