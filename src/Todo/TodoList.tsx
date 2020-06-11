import React from 'react';
import TodoItem from './TodoItem';

type Props = {
    todos: Array<{ name: string; completed: boolean }>;
};
const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoItem key={i} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
