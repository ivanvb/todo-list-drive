import React from 'react';
import Button from '../base/Button';

type Props = {
    name: string;
    completed: boolean;
    setValue(value: boolean): void;
    remove(): void;
};
const TodoItem: React.FC<Props> = ({ name, completed, setValue, remove }) => {
    return (
        <li className="py-2 px-4 border-b border-gray-800 hover:bg-gray-300 cursor-pointer flex justify-between items-center">
            <span>{name}</span>
            <div className="flex items-center">
                <input
                    className="mx-3"
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => {
                        setValue(e.target.checked);
                    }}
                />
                <Button
                    onClick={remove}
                    text="delete"
                    type="button"
                    classes="bg-red-500 hover:bg-red-700 border-red-900 font-bold px-4 py-1 text-white"
                />
            </div>
        </li>
    );
};

export default TodoItem;
