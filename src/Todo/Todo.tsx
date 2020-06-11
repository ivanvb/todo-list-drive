import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { GoogleDrive } from '../Google/Drive/GoogleDrive';

type Props = {
    todos: Array<{ name: string; completed: boolean }>;
};
const Todo: React.FC<Props> = ({ todos }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoItems, setTodoItems] = useState<Array<{ name: string; completed: boolean }>>(todos);

    function submit() {
        setTodoItems((prev) => {
            GoogleDrive.updateFileContent(process.env.REACT_APP_MY_FILE_ID!, [
                ...prev,
                { name: inputValue, completed: false },
            ]);
            return [...prev, { name: inputValue, completed: false }];
        });

        setInputValue('');
    }

    return (
        <div>
            <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
            <TodoList todos={todoItems} />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default Todo;
