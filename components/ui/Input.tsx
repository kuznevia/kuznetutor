import React, { ForwardedRef, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  error?: { error: FieldError; text: string };
  type?: React.HTMLInputTypeAttribute;
  name: string;
};

export const Input = forwardRef(
  (
    { error, type = 'text', name, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={`border-2 rounded-lg p-3 flex ${
            error?.error
              ? 'border-red-500 focus:outline-none'
              : 'border-gray-300 outline-[var(--color-primary)]'
          }`}
          aria-invalid={error?.error ? 'true' : 'false'}
          {...rest}
        />
        {error?.error.type === 'required' && (
          <p role="alert" className="text-red-500">
            {error.text}
          </p>
        )}
      </>
    );
  },
);

Input.displayName = 'Input';
