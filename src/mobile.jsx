import { useState } from 'react'
import './App.css'

function MobileDesignComponent({ }) {

    const [showSuccess, setShowSuccess] = useState(false);
    const [showSubscribe, setShowSubscribe] = useState(true);
    const [inputemail, setInputEmail] = useState("");
    const [showFormatError, setShowFormatError] = useState(false);
    const [showEmptyFieldError, setShowEmptyFieldError] = useState(false)

    const validateInput = (event) => {
        event.preventDefault();
        let email = document.getElementById('email-mobile').value;
        let emailPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

        if (email === "") {
            setShowEmptyFieldError(true);
            document.getElementById("email-mobile").style.outline = "1px solid hsl(0, 100%, 67%)";
            document.getElementById("email-mobile").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
            document.getElementById("email-mobile").style.color = "hsl(0, 100%, 67%)";
        } else if (!emailPattern.test(email)) {
            setShowEmptyFieldError(false);
            setShowFormatError(true);
            document.getElementById("email-mobile").style.outline = "1px solid hsl(0, 100%, 67%)";
            document.getElementById("email-mobile").style.backgroundColor = "hsla(4, 100%, 80%, 0.26)";
            document.getElementById("email-mobile").style.color = "1px solid hsl(0, 100%, 67%)";
        } else {
            document.getElementById("email-mobile").style.outline = "1px solid hsl(0, 0%, 83%)";
            document.getElementById("email-mobile").style.backgroundColor = "hsla(4, 100%, 80%, 0)";
            document.getElementById("email-mobile").style.color = "hsl(0, 0%, 30%)";
            setShowSubscribe(false);
            setShowSuccess(true);
            setInputEmail(email);
        }
    }

    return (
        <>
            {
                showSubscribe ? <MobileRegularComponent validateInput={validateInput} showFormatError={showFormatError} showEmptyFieldError={showEmptyFieldError} />
                    :
                    <MobileSuccessComponent inputemail={inputemail} setShowSuccess={setShowSuccess} setShowSubscribe={setShowSubscribe} />
            }
        </>
    )
}

function MobileRegularComponent({ validateInput, showFormatError, showEmptyFieldError }) {
    return (
        <>
            <div className='container-mobile'>
                <div className='mobile-image-header'>
                    <img src="../assets/images/illustration-sign-up-mobile.svg" alt="Two llustrated desktop screens overlapping each other on a red gradient background."/>
                </div>

                <div className='main-content-mobile'>
                    <div className>
                        <p className='heading-mobile'>Stay updated!</p>
                    </div>
                    <div >
                        <p className='body-text-mobile'>Join the 60,000+ product managers receiving monthly updates on:</p>
                    </div>

                    <div>
                        <div className='list-mobile'>
                            <div><img src="../assets/images/icon-list.svg" className='icon-list' alt="A small red circle with a white check mark in its center"/></div>
                            <div><p>Product discovery and building what matters</p></div>
                        </div>
                        <div className='list-mobile'>
                            <div><img src="../assets/images/icon-list.svg" className='icon-list' alt="A small red circle with a white check mark in its center"/></div>
                            <div><p>Measuring to ensure updates are a success</p></div>
                        </div>

                        <div className='list-mobile'>
                            <div><img src="../assets/images/icon-list.svg" className='icon-list' alt="A small red circle with a white check mark in its center"/></div>
                            <div><p>And much more!</p></div>
                        </div>
                    </div>

                    <form className='form-mobile' id="form-mobile" name="email-input-mobile" action="" method="" autoComplete='off'>
                        <div className='inputs'>
                            <div>
                                <div className='labels'>
                                    {showEmptyFieldError ?
                                        (
                                            <>
                                                <div className='label-left-mobile'><label htmlFor='email'>Email address</label></div>
                                                <div className='label-right-mobile'><label class="error-text-mobile" htmlFor='email'>Email required</label></div>
                                            </>
                                        ) :
                                        showFormatError ?
                                            (
                                                <>
                                                    <div className='label-left-mobile'><label htmlFor='email'>Email address</label></div>
                                                    <div className='label-right-mobile'><label class="error-text-mobile" htmlFor='email'>Valid email required</label></div>
                                                </>
                                            ) :
                                            (
                                                <div className='label-left-mobile'><label htmlFor='email'>Email address</label></div>
                                            )
                                    }

                                </div>
                                <input type="email" placeholder='email@company.com' id="email-mobile" className='email-input-mobile' />
                            </div>
                            <div>
                                <button type='button' className='subscribe-button-mobile' onClick={(e) => { validateInput(e); }}>Subscribe to monthly newsletter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function MobileSuccessComponent({ inputemail, setShowSuccess, setShowSubscribe }) {
    return (
        <>
            <div className='container-mobile-success'>
                <div>
                    <img src="../assets/images/icon-success.svg" />
                </div>
                <div className>
                    <p className='heading-mobile'>Thanks for subscribing!</p>
                </div>
                <div className='body-text-success'>
                    <p >
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

export default MobileDesignComponent