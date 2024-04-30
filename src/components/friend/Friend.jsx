import React from "react";
import "./friend.css";

export default function Friend({ user }) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImage" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
