import React, {useContext} from 'react';
import {UserContext} from '../App';
import { useNavigate } from "react-router-dom";

function Logout(props) {

    const dispatch = useContext(UserContext);
    let navigate = useNavigate();
    
    const fakeLogoutHandler = () => {

        dispatch({ type: 'logout'});
        navigate('/');
    }

    return (
        <div>
            <h1>Fake logout</h1>
            <button onClick={fakeLogoutHandler}>Logout</button>
        </div>
    );
}

export default Logout;