import React, { useEffect, useState } from 'react';
// import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const [posts, setPosts] = useState({})

      useEffect( () => {
          const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setPosts(data))

      },[])
 console.log(posts.title);
  return (
    <div>
      <h1>post here {postId}</h1>
      <p>{posts.id}</p>
      <p>{posts.body}</p>
      <p>{posts.title}</p>
    </div>
  );
};

export default PostDetail;
