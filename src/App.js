import React from "react";
import "./App.css";

function Food({ favorite }) {
  return <h1>i like {favorite}</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="remen" />
      <Food favorite="samgiopsal" />
    </div>
  );
}

export default App;
