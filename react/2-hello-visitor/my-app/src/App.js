import React from 'react';
import './App.css';
texta = "test";

function App() {
  return (
    <div className="App">
      <h1>Vad heter du igentligen?</h1>
      <input type="text" onChange={() =>
        console.log(this.testVarible)}/>
    <p>{text}</p>
    </div>
  );
}

export default App;
