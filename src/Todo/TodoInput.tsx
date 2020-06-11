import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
};
const TodoInput: React.FC<Props> = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input
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
