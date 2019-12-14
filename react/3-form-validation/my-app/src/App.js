import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Användar information</h1>
      <form action="">
        <label for="frmNameA">Name</label>
        <input name="name" id="frmNameA" placeholder="Full name" required autocomplete="name"/>
        <label for="Email">Email</label>
        <input type="email" id="Email" placeholder="name@example.com" required autocomplete="email"/>
        <label for="phoneNumber">Phone</label>
        <input type="tel" id="phoneNumber" pattern="[0-9]{10}" placeholder="0000000000" required autocomplete="tel"/>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default App;
