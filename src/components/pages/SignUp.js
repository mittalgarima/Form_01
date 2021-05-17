import React from 'react';
import '../../styles/signup.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-div">
            <h1>Relax And Play</h1>
            <p>
         For sure, playing sports is a generally a fantastic way to improve your fitness and health.
             Many of us may not feel at home pounding away
         on a treadmill or working up a sweat in the gym,
         but we’ll happily chase a ball around endlessly while playing a game of some sort.</p>
             <NavLink to='/Form1' exact activeClassName="active"><button>Register</button></NavLink>
        </div>
    )
}

export default SignUp;
