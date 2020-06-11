import React from 'react';

type Props = {
    name: string;
    completed: boolean;
};
const TodoItem: React.FC<Props> = ({ name, completed }) => {
    return (
        <li>
            {name} {completed ? '✅' : '❌'}
        </li>
    );
};

export default TodoItem;
