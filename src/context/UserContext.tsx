import React, { useState, Dispatch } from 'react';
import { LOGGED_STATUS } from '../Google/loggedStatus';

interface UserContextInterface {
    loggedStatus: LOGGED_STATUS;
    setLoggedStatus: Dispatch<any>;
}

const DEFAULT_STATUS = LOGGED_STATUS.LOADING;

export const UserContext = React.createContext<UserContextInterface>({
    loggedStatus: DEFAULT_STATUS,
    setLoggedStatus: () => {},
});

export const UserProvider: React.FC = (props) => {
    const [loggedStatus, setLoggedStatus] = useState<LOGGED_STATUS>(DEFAULT_STATUS);
    return (
        <UserContext.Provider value={{ loggedStatus, setLoggedStatus }}>
            {props.children}
        </UserContext.Provider>
    );
};
