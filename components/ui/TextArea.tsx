import React, { ForwardedRef, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type TextAreaProps = {
  error?: { error: FieldError; text: string };
  name: string;
  rows: number;
};

export const TextArea = forwardRef(
  (
    { error, name, rows, ...rest }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <>
        <textarea
          id={name}
          name={name}
          ref={ref}
          className={`border-2 rounded-lg p-3 flex ${
            error?.error
              ? 'border-red-500 focus:outline-none'
              : 'border-gray-300 outline-[var(--color-primary)]'
          }`}
          aria-invalid={error?.error ? 'true' : 'false'}
          rows={rows}
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

TextArea.displayName = 'TextArea';
