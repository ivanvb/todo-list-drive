import React from 'react';
import TodoItem from './TodoItem';

type Props = {
    todos: Array<{ name: string; completed: boolean }>;
};
const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul className="border border-gray-800 rounded-md overflow-hidden max-h-full bg-white h-80 overflow-y-auto">
            {todos.map((todo, i) => (
                <TodoItem key={i} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
