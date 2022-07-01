import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {

  function sendRequest() {
    axios.post('http://localhost:8000/post', {
      firstName: 'Patiphan',
      lastName: 'Phengpao'
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <button onClick={sendRequest}>Send Request</button>
    </div>
  )
}

export default App
