import React, { useState } from 'react';
import './App.css';

function App() {
  const[name, setName] = useState("");
  function changeName(e){
    setName(e.target.value)
    console.log(e.target.value);
    console.log(e.target.value==="f")
    if (name==="f"){
      console.log("inne!")
      setName("e.target.value")
    }
    
  }
  return (
    <div className="App">
      <h1>Användar information</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input onChange={changeName} name="name" id="name" placeholder="Full name" required autoComplete="name"/>
        <label htmlFor="Email">Email</label>
        <input name="enail" type="email" id="Email" placeholder="name@example.com" required autoComplete="email"/>
        <label htmlFor="phoneNumber">Phone</label>
        <input name="phoneNumber" type="tel" id="phoneNumber" pattern="[0-9]{10}" placeholder="0000000000" required autoComplete="tel"/>
        <input type="Button"></input>
      </form>
      <p>{name}</p>
    </div>
  );
}

export default App;
