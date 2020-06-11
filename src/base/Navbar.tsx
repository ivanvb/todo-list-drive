import React from 'react';

type Props = {
    signOut(): void;
};
const Navbar: React.FC<Props> = ({ signOut }) => {
    return (
        <nav className="w-full bg-indigo-600 flex justify-around py-2 text-white">
            <span>Hello</span>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    );
};

export default Navbar;
