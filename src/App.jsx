import { useState } from 'react'
import './App.css'
import MobileDesignComponent from './mobile';
function App() {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [inputemail, setInputEmail] = useState("");

  const validateInput = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

    console.log(email)

    if (email === "") {
      document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
      document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
      document.getElementById('error-text').style.display = "none"
      console.log('HIT2')
    } else if (!emailPattern.test(email)) {
      document.getElementById("email").style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById("email").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
      document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
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
      setShowSubscribe(false);
      setShowSuccess(true);
      setInputEmail(email);
    }
  }

  return (
    <>
      {
        showSubscribe ? <SubscribeComponent validateInput={validateInput} />
          :
          <SuccessComponent inputemail={inputemail} setShowSuccess={setShowSuccess} setShowSubscribe={setShowSubscribe} />
      }

      {/* <MobileDesignComponent showSubscribe={showSubscribe} validateInput={validateInput} inputemail={inputemail} setShowSuccess={setShowSuccess} setShowSubscribe={setShowSubscribe}/> */}

      <MobileDesignComponent />
    </>
  )
}



function SubscribeComponent({ validateInput }) {
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
                <div className='input-label'>
                  <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
                  <div className='label-right'><label id='error-text-mobile' className='error-text-mobile' htmlFor='email'>Valid email required</label></div>
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

// function MobileDesignComponent({ showSubscribe, validateInput, inputemail, setShowSuccess, setShowSubscribe  }) {
//   return (
//     <>
//       {
//         showSubscribe ? <MobileRegularComponent validateInput={validateInput} />
//           :
//           <MobileSuccessComponent inputemail={inputemail} setShowSuccess={setShowSuccess} setShowSubscribe={setShowSubscribe} />
//       }
//     </>
//   )
// }

// function MobileRegularComponent({validateInput}) {
//   return (
//     <>
//          <div className='container-mobile'>
//         <div className='mobile-image-header'>
//           <img src="../assets/images/illustration-sign-up-mobile.svg" />
//         </div>

//         <div className='main-content-mobile'>
//           <div className>
//             <p className='heading-mobile'>Stay updated!</p>
//           </div>
//           <div >
//             <p className='body-text-mobile'>Join the 60,000+ product managers receiving monthly updates on:</p>
//           </div>

//           <div>
//             <div className='list-mobile'>
//               <div><img src="../assets/images/icon-list.svg" className='icon-list' /></div>
//               <div><p>Product discovery and building what matters</p></div>
//             </div>
//             <div className='list-mobile'>
//               <div><img src="../assets/images/icon-list.svg" className='icon-list' /></div>
//               <div><p>Measuring to ensure updates are a success</p></div>
//             </div>

//             <div className='list-mobile'>
//               <div><img src="../assets/images/icon-list.svg" className='icon-list' /></div>
//               <div><p>And much more!</p></div>
//             </div>
//           </div>

//           <form className='form-mobile' id="form-mobile" name="email-input-mobile" action="" method="" autoComplete='off'>
//             <div className='inputs'>
//               <div>
//                 <div className='input-label-mobile'>
//                   <div className='label-left'><label htmlFor='email'>Email address</label><br /></div>
//                   <div className='label-right'><label id='error-text' className='error-text' htmlFor='email'>Valid email required</label></div>
//                 </div>
//                 <input type="email" placeholder='email@company.com' id="email" className='email-input-mobile' />
//               </div>
//               <div>
//                 <button type='button' className='subscribe-button-mobile' onClick={(e) => { validateInput(e); }}>Subscribe to monthly newsletter</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div> 
//     </>
//   )
// }

// function MobileSuccessComponent({ inputemail, setShowSuccess, setShowSubscribe }) {
//   return (
//     <>
//       <div className='container-mobile-success'>
//         <img src="../assets/images/icon-success.svg" />
//       </div>
//     </>
//   )
// }

export default App
