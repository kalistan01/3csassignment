import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./useInformation.css";

function UserInformation() {
  const [user, setuser] = useState([]);
  const { id } = useParams();
  // get api by id
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setuser(response.data.data);
    });
  }, []);
  const header = {
    height: "50px",
    width: "100%",
    backgroundColor: "#0194ff",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px"
  };
  return (
    <div>
      <div className="header" style={header}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </div>
      <div className="main" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="image_container">
            <img src={user.avatar} alt="" />
          </div>
          <div className="details">
            <div className="detail_container">
              <div className="title">First Name</div>
              <div className="names">{user.first_name}</div>
            </div>
            <div className="detail_container">
              <div className="title">Last Name</div>
              <div className="names">{user.last_name}</div>
            </div>
            <div className="detail_container">
              <div className="title">E-mail</div>
              <div className="names">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
