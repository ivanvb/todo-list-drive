import React, { useState, SyntheticEvent } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { GoogleDrive } from '../Google/Drive/GoogleDrive';
import Button from '../base/Button';

type Props = {
    todos: Array<{ name: string; completed: boolean }>;
};
const Todo: React.FC<Props> = ({ todos }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoItems, setTodoItems] = useState<Array<{ name: string; completed: boolean }>>(todos);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        GoogleDrive.updateFileContent('1-U-pB9O1i1rjxornAQpW_YrSGv32MGln3UZxlbkwlwwNF_Ktjg', [
            ...todoItems,
            { name: inputValue, completed: false },
        ]);
        setTodoItems((prev) => {
            return [...prev, { name: inputValue, completed: false }];
        });

        setInputValue('');
    }

    const isDisabled = inputValue.length === 0;
    return (
        <form onSubmit={submit}>
            <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
            <TodoList todos={todoItems} />
            <Button
                type="submit"
                text="Add New Task"
                classes={`my-4 px-4 bg-green-500 w-full ${
                    isDisabled ? '' : 'hover:bg-green-700'
                } font-bold py-1 focus:outline-none focus:shadow-outline border-green-900 text-white`}
                disabled={isDisabled}
            />
        </form>
    );
};

export default Todo;
