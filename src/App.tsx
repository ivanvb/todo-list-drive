import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { LOGGED_STATUS } from './Google/loggedStatus';
import { GoogleAuth } from './Google/Auth/GoogleAuth';

function App() {
    const { loggedStatus, setLoggedStatus } = useContext(UserContext);
    const auth = new GoogleAuth(setLoggedStatus);
    return (
        <div className="flex justify-center h-screen items-center">
            {loggedStatus === LOGGED_STATUS.LOADING && 'LOADING'}
            {loggedStatus === LOGGED_STATUS.LOGGED_IN && 'I AM IM'}
            {loggedStatus === LOGGED_STATUS.LOGGED_OUT && 'I AM OUT'}
        </div>
    );
}

export default App;
