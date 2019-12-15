import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[name, setName] = useState("");
  return (
    <div className="App">
      <h1>Användar information</h1>
      <form>
        <label for="name">Name</label>
        <input name="name" id="name" placeholder="Full name" required autocomplete="name"/>
        <label for="Email">Email</label>
        <input name="enail" type="email" id="Email" placeholder="name@example.com" required autocomplete="email"/>
        <label for="phoneNumber">Phone</label>
        <input name="phoneNumber" type="tel" id="phoneNumber" pattern="[0-9]{10}" placeholder="0000000000" required autocomplete="tel"/>
        <input type="Button"></input>
      </form>
    </div>
  );
}

export default App;
