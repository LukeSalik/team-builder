import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: "",
    },
  ]);

  return (
    <div className="App">
      <Form members={members} />
      <Card />
    </div>
  );
}

export default App;
