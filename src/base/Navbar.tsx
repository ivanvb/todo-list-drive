import React from 'react';

type Props = {
    signOut(): void;
};
const Navbar: React.FC<Props> = ({ signOut }) => {
    return (
        <nav className="w-full bg-indigo-500 flex justify-between px-8 md:px-16 py-2 text-white">
            <span className="font-bold text-lg">TODO</span>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    );
};

export default Navbar;
