import { InputError, StyledInput } from './input.styled';
import { FieldError } from 'react-hook-form';
import React from 'react';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  error?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => (
    <div>
      <StyledInput {...props} error={error} ref={ref} />
      {error && <InputError>{error.message}</InputError>}
    </div>
  ),
);
