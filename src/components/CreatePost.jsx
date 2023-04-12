import React, { useEffect, useState } from 'react';
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";//{}は名前付きインポート
import { auth, db } from "../firebase";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  // ログインしていないユーザが入ってきた場合リダイレクトさせる。
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    };
  }, []);

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      auther: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });

    navigate("/");
  }

  return (
    <div className='createPostPage'>
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text"
            placeholder='タイトルを記入'
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="inputPost">
          <div>投稿</div>
          <textarea type="text" placeholder='投稿内容を記入'
            onChange={(e) => setPostText(e.target.value)}>

          </textarea>
        </div>

        <button className="postButton" onClick={createPost}>投稿する</button>

      </div>
    </div>
  );
};

export default CreatePost