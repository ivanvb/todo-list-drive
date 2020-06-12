import React from 'react';

type Props = {
    text: string;
    onClick?(): void;
    containerClasses?: string;
    classes?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};
const Button: React.FC<Props> = (props) => {
    return (
        <div className={props.containerClasses}>
            <button
                onClick={props.onClick}
                className={`min-w-20 bg-gray-200 border border-gray-500 rounded-md ${props.classes} disabled:opacity-75 disabled:cursor-auto`}
                {...props}
            >
                {props.text}
            </button>
        </div>
    );
};

export default Button;
