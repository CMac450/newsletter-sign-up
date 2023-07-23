import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DesktopDesign } from "./components/desktop"

function App() {
  let email = document.getElementById('email').value;

  const validateInput = (event) => {
    if (email !== "") {
      document.getElementById("email").style.outline
    }
  }

  return (
    <>
      <div className='container'>
        <div className='text-div'>
          <p className='heading'>Stay updated!</p>
          <p className='body-text'>
            Join the 60,000+ product managers receiving monthly updates on:

            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>

          </p>


          <div className='inputs'>
            <div>
              <label htmlFor='email'>Email address</label><br />
              <input type="email" placeholder='email@company.com' id="email" />
            </div>
            <div>
              <button type='button'>Subscribe to monthly newsletter</button>
            </div>
          </div>

        </div>
        <div className='img'>
          <img src="../assets/images/illustration-sign-up-desktop.svg" />
        </div>
      </div>
    </>
  )
}

export default App
