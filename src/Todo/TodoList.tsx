import React, { Dispatch, SetStateAction } from 'react';
import TodoItem from './TodoItem';
import { GoogleDrive } from '../Google/Drive/GoogleDrive';

type Props = {
    todos: Array<{ name: string; completed: boolean }>;
    setTodoItems: Dispatch<SetStateAction<{ name: string; completed: boolean }[]>>;
};
const TodoList: React.FC<Props> = ({ todos, setTodoItems }) => {
    return (
        <ul className="border border-gray-800 rounded-md overflow-hidden max-h-full bg-white h-80 overflow-y-auto">
            {todos.map((todo, i) => (
                <TodoItem
                    key={i}
                    {...todo}
                    setValue={(value: boolean) => {
                        const clone = [...todos];
                        clone[i].completed = value;
                        GoogleDrive.updateFileContent(clone);
                        setTodoItems((items) => {
                            return clone;
                        });
                    }}
                    remove={() => {
                        const clone = [...todos];
                        clone.splice(i, 1);
                        GoogleDrive.updateFileContent(clone);
                        setTodoItems((items) => {
                            return clone;
                        });
                    }}
                />
            ))}
        </ul>
    );
};

export default TodoList;
