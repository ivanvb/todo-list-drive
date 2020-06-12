import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
};
const TodoInput: React.FC<Props> = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input
                className="px-2 py-2 border rounded-md text-gray-700 leading-tight shadow w-full my-4"
                placeholder="New Task"
                name="task"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
        </>
    );
};

export default TodoInput;
