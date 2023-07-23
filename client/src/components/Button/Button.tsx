import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
    text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, ...props }: Props) => {
    return (
        <button
            className={classNames(
                "px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none disabled:bg-primary-200 disabled:cursor-not-allowed",
            )}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
