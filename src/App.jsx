import { useState } from 'react'
import './App.css'
import MobileDesignComponent from './mobile';
function App() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [inputemail, setInputEmail] = useState("");
  const [showFormatError, setShowFormatError] = useState(false);
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false)

  const validateInput = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

    console.log(email)

    if (email === "") {
      setShowEmptyFieldError(true);
      document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
      document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
      console.log('HIT2')
    } else if (!emailPattern.test(email)) {
      setShowEmptyFieldError(false);
      setShowFormatError(true);
      document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
      document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
    } else {
      document.getElementById("email").style.outline = "1px solid hsl(0, 0%, 83%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
      document.getElementById("email").style.color = "hsl(0, 0%, 30%)";
      setShowSubscribe(false);
      setShowSuccess(true);
      setInputEmail(email);
    }
  }

  return (
    <>
      {
        showSubscribe ? <SubscribeComponent validateInput={validateInput} showFormatError={showFormatError} showEmptyFieldError={showEmptyFieldError} />
          :
          <SuccessComponent inputemail={inputemail} setShowSuccess={setShowSuccess} setShowSubscribe={setShowSubscribe} />
      }
      <MobileDesignComponent />
    </>
  )
}



function SubscribeComponent({ validateInput, showFormatError, showEmptyFieldError }) {
  return (
    <>
      <div className='container-subscribe'>
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
                <div className='labels'>
                  {showEmptyFieldError ?
                    (
                      <>
                        <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
                        <div className='label-right'><label id='error-text' className='error-text' htmlFor='email'>Email required</label></div>
                      </>
                    ) :
                  showFormatError ?
                  (
                  <>
                    <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
                    <div className='label-right'><label id='error-text' className='error-text' htmlFor='email'>Valid email required</label></div>
                  </>
                  ) :

                  (
                  <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
                  )

                  }
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

function SuccessComponent({ inputemail, setShowSuccess, setShowSubscribe }) {
  return (
    <>
      <div className='container-success'>
        <div><img src="../assets/images/icon-success.svg" className='success-icon' /></div>
        <div>
          <p className='heading-success'>Thanks for subscribing!</p>
        </div>
        <div>
          <p className='body-text-success'>
            A confirmation email has been sent to <strong>{inputemail}</strong>. Please open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <div>
          <button className='dismiss' onClick={() => { setShowSuccess(false); setShowSubscribe(true) }}>Dismiss message</button>
        </div>
      </div>
    </>
  )
}

export default App
