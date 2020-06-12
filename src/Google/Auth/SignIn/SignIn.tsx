import React from 'react';
import Button from '../../../base/Button';

type Props = {
    signIn(): void;
};
const SignIn: React.FC<Props> = ({ signIn }) => {
    return (
        <Button
            text="Sign In With Google"
            classes="py-1 px-2 bg-indigo-500 hover:bg-indigo-700 borde-indigo-900 text-white font-bold shadow-md"
            onClick={signIn}
        />
    );
};

export default SignIn;
