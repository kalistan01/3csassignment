import React, { useEffect, useState } from "react";
import User from "../components/User";
import axios from "axios";

function UserView() {
  const header = {
    height: "50px",
    width: "100%",
    backgroundColor: "#0194ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const users = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridColumnGap: "2em",
    gridRowGap: "2em",
    padding: "30px",
    width: "80%"
  };
  const [content, setContent] = useState([]);
// get api 
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setContent(response.data.data);
    });
  }, []);
  return (
    <div>
      <div className="header" style={header}>
        Title
      </div>
      <div style={{ padding: "10px" }}>
        <div className="title" style={{ marginBottom: "20px" }}>
          Users
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={users}>
            {content &&
              content.length > 0 &&
              content.map((item) => {
                return (
                  <User
                    key={item.id}
                    image={item.avatar}
                    name={item.first_name}
                    email={item.email}
                    userId={item.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;
