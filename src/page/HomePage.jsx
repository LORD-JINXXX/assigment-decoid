import React from 'react';
import "./style.css";
import NavBar from './component/NavBar';

const HomePage = () => {

    return (
        <>
            <main className='main'>
                <div className='alOne'>
                    <div className="title">
                        <h2>Android Large 1</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className='skip'><h3>skip</h3></div>
                        <div className='image'>
                            <img src="/images/track1.png" alt="track your goal" />
                        </div>
                        <div className="trackHeading">
                            <h3>Track Your Goal</h3>
                        </div>
                        <div className="trackContent">
                            <p>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
                        </div>
                        <div className="eclipse2">
                            <div className="eclipse1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='alTwo'>
                    <div className="title">
                        <h2>Android Large 2</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className='skip'><h3>skip</h3></div>
                        <div className='image'>
                            <img src="/images/track2.png" alt="get burn" />
                        </div>
                        <div className="trackHeading">
                            <h3>Get Burn</h3>
                        </div>
                        <div className="trackContent">
                            <p>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
                        </div>
                        <div className="eclipse2">
                            <div className="eclipse1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='alThree'>
                    <div className="title">
                        <h2>Android Large 3</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className="one">
                            Create an account
                        </div>
                        <div className="form">
                            <div className="two">
                                First Name
                            </div>
                            <div className="two">
                                Last Name
                            </div>
                            <div className="two">
                                Email
                            </div>
                            <div className="two">
                                Password
                            </div>
                        </div>
                        <div className="three">
                            <input type="checkbox" />
                            <p>By proceeding, I agree to all <a href="#">T&C</a> and  <a href="#">Privacy Policy</a> </p>
                        </div>

                        <div className="four">Create an Account</div>

                        <div className="five">
                            <div className="line"></div>
                            <div className="logo">Or</div>
                            <div className="line"></div>
                        </div>

                        <div className="six">
                            <div className='logo'>
                                <img src="/images/track3.webp" alt="google" />
                            </div>
                            <div className='logo'>
                                <img src="/images/track4.png" alt="facebook" />
                            </div>
                        </div>

                        <div className="seven">Already have an account? <a>Login</a> </div>

                    </div>
                </div>

                <div className='alFour'>
                    <div className="title">
                        <h2>Android Large 4</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className="one">
                            Welcome Back
                        </div>
                        <div className="form">
                            <div className="two">
                                Email
                            </div>
                            <div className="two">
                                Password

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" /></svg>
                            </div>
                        </div>
                        <div className="three">
                            <p>Forgot your password?</p>
                        </div>

                        <div className="four">Sign In</div>

                        <div className="five">
                            <div className="line"></div>
                            <div className="logo">Or</div>
                            <div className="line"></div>
                        </div>

                        <div className="six">
                            <div className='logo'>
                                <img src="/images/track3.webp" alt="google" />
                            </div>
                            <div className='logo'>
                                <img src="/images/track4.png" alt="facebook" />
                            </div>
                        </div>

                        <div className="seven">Don’t have an account yet? <a>Create an account</a> </div>

                    </div>
                </div>

                <div className='alFive'>
                    <div className="title">
                        <h2>Android Large 5</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className="one">What are your goals?</div>

                        <div className="form">
                            <div className="two">
                                Weight Loss
                                <input className="cbox" type="checkbox" />
                            </div>
                            <div className="two">
                                Muscle Gain
                                <input className="cbox" type="checkbox" />
                            </div>
                            <div className="two">
                                Flexibility and Mobility
                                <input className="cbox" type="checkbox" />
                            </div>
                            <div className="two">
                                General Fitness
                                <input className="cbox" type="checkbox" />
                            </div>
                            <div className="two">
                                Event - specific training
                                <input className="cbox" type="checkbox" />
                            </div>
                            <div className="two">
                                Mindfulness and Mental Health
                                <input className="cbox" type="checkbox" />
                            </div>

                        </div>

                        <div className="three">Confirm</div>

                    </div>
                </div>

                <div className='alSix'>
                    <div className="title">
                        <h2>Android Large 6</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className="one">
                            <div className="left">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            </div>
                            <div className="right">Workout Tracker</div>
                        </div>

                        <div className='two'>
                            <div className='good'>Good job</div>
                            <div className='cal'>less then 320cal</div>
                            <img className='u1' src="/images/track6.png" alt="u1" />
                            <img className='u2' src="/images/track6.png" alt="u2" />
                            <img className='u3' src="/images/track6.png" alt="u3" />
                            <img src="/images/track5.png" alt="chart" />
                        </div>

                        <div className="three">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
                            <p>You've burned fewer calories than yesterday. Time to get moving!</p>
                        </div>

                        <div className="four">
                            <div className="left">Upcoming Workout</div>
                            <div className="right">See more</div>
                        </div>

                        <div className="five">
                            <div className="left"><img src="/images/track7.png" alt="event1" /></div>
                            <div className="middle">
                                <h3>Full Body Workout</h3>
                                <h4>Today 3pm</h4>
                            </div>
                            <div className="right"><img src="/images/track8.png" alt="toggle" /></div>
                        </div>

                        <div className="five">
                            <div className="left"><img src="/images/track9.png" alt="event1" /></div>
                            <div className="middle">
                                <h3>Upper Body Workout</h3>
                                <h4>4 Feb, 3:30 pm</h4>
                            </div>
                            <div className="right"><img src="/images/track8.png" alt="toggle" /></div>
                        </div>

                        <div className="six">What Do You Want to Train</div>

                        <div className="seven">
                            <div className="left">
                                <div className="h3">Full Body Workout</div>
                                <div className="h4">
                                    <span>Arms</span>
                                    <span>Chest</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="image">
                                    <img src="/images/track10.png" alt="Full body workout" />
                                </div>
                            </div>
                        </div>

                        <div className="eight">
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </div>
                            <div className="menu">
                                <img className='home' src="/images/track11.png" alt="home" />
                                <img className='vector' src="/images/track12.png" alt="vector" />
                                <img className='camera' src="/images/track13.png" alt="camera" />
                                <img className='person' src="/images/track14.png" alt="person" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='alSeven'>
                    <div className="title">
                        <h2>Android Large 7</h2>
                    </div>
                    <div className="content">
                        <NavBar />
                        <div className="one">
                            <div className="left">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            </div>
                            <div className="right">Workout Schedule</div>
                        </div>

                        <div className="two">
                            <div className="left">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            </div>
                            <div className="middle">Feb 2024</div>
                            <div className="right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            </div>
                        </div>

                        <div className="three">
                            <div className="date">
                                <span className='day'>Sun</span>
                                <span className='num'>5</span>
                            </div>
                            <div className="dateColor">
                                <span className='day'>Mon</span>
                                <span className='num'>6</span>
                            </div>
                            <div className="date">
                                <span className='day'>Tue</span>
                                <span className='num'>7</span>
                            </div>
                            <div className="date">
                                <span className='day'>Wed</span>
                                <span className='num'>8</span>
                            </div>
                            <div className="date">
                                <span className='day'>Thu</span>
                                <span className='num'>9</span>
                            </div>
                        </div>

                        <div className="four">
                            <div className="timeContainer">
                                <span className='time'>06:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>07:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>08:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>09:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>10:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>11:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>12:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>01:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>02:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>03:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>04:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className="timeContainer">
                                <span className='time'>05:00 AM</span>
                                <span className='line'></span>
                            </div>
                            <div className='contentOne'>
                                <span>Ab Workout, 7:30am</span>
                            </div>
                            <div className='contentTwo'>
                                <span>Upperbody Workout, 9am</span>
                            </div>
                            <div className='contentThree'>
                                <span>Lowerbody Workout, 3pm</span>
                            </div>
                            <div className="lineWhite"></div>
                            <div className="lineBlue"></div>
                            <div className='search'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                            </div>
                        </div>

                        <div className="five">
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </div>
                            <div className="menu">
                                <img className='home' src="/images/track11.png" alt="home" />
                                <img className='vector' src="/images/track12.png" alt="vector" />
                                <img className='camera' src="/images/track13.png" alt="camera" />
                                <img className='person' src="/images/track14.png" alt="person" />
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default HomePage;
