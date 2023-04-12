import React, { useEffect } from 'react'
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";//{}は名前付きインポート
import { db } from "../firebase";

const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // 階層が深いのでdata関数を使うと取得が簡単になる
      // firebaseはdbからの値取得が難しい。
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, [])

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。今はReactの勉強中です、これから頑張ってReactエンジニアとして活躍して行きたいです。
        </div>
        <div className="nameAndDeleteButton">
          <h3>riku-kitakaze</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home