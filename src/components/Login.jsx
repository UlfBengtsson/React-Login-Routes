import React, {useContext} from 'react';
import {UserContext} from '../App';
import { useNavigate } from "react-router-dom";

function Login(props) {

    const dispatch = useContext(UserContext);
    let navigate = useNavigate();
    
    const fakeLoginHandler = () => {

        dispatch({ type: 'login'});
        navigate('/');
    }

    return (
        <div>
            <h1>Fake login</h1>
            <button onClick={fakeLoginHandler}>Login</button>
        </div>
    );
}

export default Login;