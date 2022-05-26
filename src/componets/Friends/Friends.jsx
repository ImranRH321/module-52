import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setFriends(json));
  }, []);

  return (
    <div>
      <h1>This is For Friends for friend....</h1>
      <p>
        <small>Parle theka..</small>
      </p>
      {friends.map(friend => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
