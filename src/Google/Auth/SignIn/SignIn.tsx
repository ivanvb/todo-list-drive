import React from 'react';
import Button from '../../../base/Button';

type Props = {
    signIn(): void;
};
const SignIn: React.FC<Props> = ({ signIn }) => {
    return <Button text="Sign In With Google" onClick={signIn} />;
};

export default SignIn;
