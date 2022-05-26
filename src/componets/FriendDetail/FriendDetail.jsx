import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then(res => res.json())
      .then(friend => setFriend(friend));
  }, []);
  console.log(friend);
  return (
    <div>
      <h1>Ohe bundo kaha kaico ...{friendId}</h1>
      <h3>name: {friend.name}</h3>
      <h4>email: {friend.email}</h4>
      <h4>city: {friend.address?.city}</h4>
      <h6>geo: {friend.address?.geo?.lat}</h6>
    </div>
  );
};

export default FriendDetail;
