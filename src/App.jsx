import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DesktopDesign } from "./components/desktop"

function App() {
  const validateInput = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

    if (email === "") {
      document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
      document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
      document.getElementById('error-text').style.display = "none"
    } else if (!emailPattern.test(email)) {
      document.getElementById('error-text').style.display = "inline-block"
      document.getElementById('error-text').style.color = "hsl(0, 100%, 67%)"
      console.log("NOT a match!");
    } else {
      document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
      document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
      document.getElementById('error-text').style.display = "none"
      console.log(`input was NOT empty~`);
      console.log(`input matches regexpattern~`);
    }
  }

  return (
    <>
      <div className='container'>
        <div className='text-div'>
          <p className='heading'>Stay updated!</p>
          <p className='body-text'>
            Join the 60,000+ product managers receiving monthly updates on:
          </p>

          <div>
            <div className='list'>
              <img src="../assets/images/icon-list.svg" className='icon-list' />
              <p>Product discovery and building what matters</p>
            </div>
            <div className='list'>
              <img src="../assets/images/icon-list.svg" className='icon-list' />
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className='list'>
              <img src="../assets/images/icon-list.svg" className='icon-list' />
              <p>And much more!</p>
            </div>
          </div>
          
          <form className='form' id="form" name="email-input" action="" method="" autoComplete='off'>
            <div className='inputs'>
              <div>
                <div className='input-label'>
                  <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
                  <div className='label-right'><label id='error-text' className='error-text' htmlFor='email'>Valid email required</label></div>
                </div>
                <input type="email" placeholder='email@company.com' id="email" />
              </div>
              <div>
                <button type='button' onClick={(e) => { validateInput(e); }}>Subscribe to monthly newsletter</button>
              </div>
            </div>
          </form>

        </div>
        <div className='img'>
          <img src="../assets/images/illustration-sign-up-desktop.svg" />
        </div>
      </div>
    </>
  )
}

export default App
