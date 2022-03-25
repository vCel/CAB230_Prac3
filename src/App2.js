import "./styles.css";
import React, { useState } from "react";

function fetchUser(data) {
  const url = `https://reqres.in/api/users/` + data.id;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

function User(props) {
  return (
    <div className="User">
      <ul>
        <li>First Name: {props.first_name}</li>
        <li>Last Name: {props.last_name}</li>
        <li>E: {props.email}</li>
      </ul>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState([]);
  const janet = {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  };

  return (
    <div className="App">
      <h1>User</h1>
      <User {...user} />
      <button onClick={() => setUser(janet)}>Get User</button>
    </div>
  );
}
