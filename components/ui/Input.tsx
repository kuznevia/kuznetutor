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
          className={`border-2 rounded-lg p-3 flex bg-[#c1ffe4] ${
            error?.error
              ? 'border-red-500 focus:outline-none'
              : 'border-[var(--color-primary)] focus:border-[var(--color-secondary)] focus:outline-none'
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
