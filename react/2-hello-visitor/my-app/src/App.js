import React, { useState } from 'react';
import './App.css';

function App() {
  const[name, setName] = useState("");

  return (
    <div className="App">
      <h1>Vad heter du igentligen?</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <h1>Hello trevligt o träffas {name}, Akta dig för sparken!</h1>
    </div>
  );
}

export default App;
