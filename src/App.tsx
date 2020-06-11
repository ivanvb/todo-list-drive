import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { LOGGED_STATUS } from './Google/loggedStatus';
import { GoogleAuth } from './Google/Auth/GoogleAuth';
import HomeScreen from './HomeScreen/index';
import SignIn from './Google/Auth/SignIn/SignIn';
import Navbar from './base/Navbar';

function App() {
    const { loggedStatus, setLoggedStatus } = useContext(UserContext);
    const auth = new GoogleAuth(setLoggedStatus);
    return (
        <>
            {loggedStatus === LOGGED_STATUS.LOGGED_IN && <Navbar signOut={auth.signOut} />}
            <div className="flex justify-center items-center h-full">
                {loggedStatus === LOGGED_STATUS.LOADING && <p>Loading</p>}
                {loggedStatus === LOGGED_STATUS.LOGGED_OUT && <SignIn signIn={auth.signIn} />}
                {loggedStatus === LOGGED_STATUS.LOGGED_IN && <HomeScreen />}
            </div>
        </>
    );
}

export default App;
