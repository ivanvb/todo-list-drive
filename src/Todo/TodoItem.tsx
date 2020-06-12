import React from 'react';

type Props = {
    name: string;
    completed: boolean;
};
const TodoItem: React.FC<Props> = ({ name, completed }) => {
    return (
        <li className="py-2 px-4 border-b border-gray-800 hover:bg-gray-300 cursor-pointer flex justify-between items-center">
            <span>{name}</span>
            <input type="checkbox" />
        </li>
    );
};

export default TodoItem;
