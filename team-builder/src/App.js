import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Luke",
      email: "muhammadadams@gmail.com",
      role: "Developer",
    },
  ]);

  return (
    <div className="App">
      <Form />
      <Card />
    </div>
  );
}

export default App;
