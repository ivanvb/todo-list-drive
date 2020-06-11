import React from 'react';

type Props = {
    text: string;
    onClick(): void;
    containerClasses?: string;
    classes?: string;
};
const Button: React.FC<Props> = (props) => {
    return (
        <div className={props.containerClasses}>
            <button
                onClick={props.onClick}
                className={`min-w-20 h-8 bg-gray-200 border border-gray-500 rounded-md ${props.classes}`}
            >
                {props.text}
            </button>
        </div>
    );
};

export default Button;
