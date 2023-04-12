import React, { useEffect, useState } from 'react'
import "./Home.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";//{}は名前付きインポート
import { db, app, auth } from "../firebase";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));// dbへアクセス
      // 階層が深いのでdata関数を使うと取得が簡単になる
      // firebaseはdbからの値取得が難しい。
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [postList]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  }

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
              {/* {isAuth ? (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              ) : (
                <button className='disabledBtn' disabled>削除できません</button>
              )} */}
              {/* オプショナルチェイン演算子を用いてauth.currentUserがnullの場合でもundifindを返しプログラムをクラッシュさせないようにする */}
              {post.auther.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home