import React from 'react';
import Button from '../../../base/Button';

type Props = {
    signOut(): void;
};
const SignIn: React.FC<Props> = ({ signOut }) => {
    return <Button text="Sign Out" onClick={signOut} />;
};

export default SignIn;
