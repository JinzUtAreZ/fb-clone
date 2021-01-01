import React, { useEffect, useState } from "react";
import "../../componentsCss/Layout/Feed.css";
import db from "../connectdb/firebase";
import Post from "../Layout/Post";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);
  //NOTE: check <Post /> for more info
  useEffect(() => {
    // console.log(db);
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    //IMPORTANT: you can use below code = post.profilePic
    // const ref = firebase.firestore().collection("posts");
    // async function fetchData() {
    //   await ref.onSnapshot((querySnapshot) => {
    //     const data = [];
    //     querySnapshot.forEach((doc) => {
    //       data.push(doc.data());
    //     });
    //     setPosts(data);
    //   });
    // }

    // fetchData();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.datausername}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profilePic="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="tester"
        image="https://hosting.photobucket.com/albums/b139/Ms_Marcy/Hayden-Star%20Wars%20Celebration%202017/Hayden%20the%20meme/.highres/4-13-17_Hayden%20amp%20Mark%20meme.jpg"
      />
      <Post
        profilePic="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="tester"
        image="https://hosting.photobucket.com/albums/b139/Ms_Marcy/Hayden-Star%20Wars%20Celebration%202017/Hayden%20the%20meme/.highres/4-13-17_Hayden%20amp%20Mark%20meme.jpg"
      /> */}
    </div>
  );
}

export default Feed;
