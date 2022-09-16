import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

function User(props) {
  return (
    <Link to={`user/${props.userId}`} className="user">
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="content">
        <div className="first_Name">
          <b>{props.name}</b>
        </div>
        <div className="email" style={{ fontSize: "12px" }}>
          {props.email}
        </div>
      </div>
    </Link>
  );
}

export default User;
