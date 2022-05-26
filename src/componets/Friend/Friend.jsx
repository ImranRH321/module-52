import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate = useNavigate();

  const showFriendsDetail = () => {
    navigate('/friend/'+id);
  };

  return (
    <div>
      <h1>{name}</h1>
      <Link to={'friend/'+id}>Show Detail</Link>
      <button onClick={showFriendsDetail}>
        {username} id:{id}
      </button>
    </div>
  );
};

export default Friend;
