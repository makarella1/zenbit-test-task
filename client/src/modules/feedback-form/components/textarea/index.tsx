import React from 'react';
import { FieldError } from 'react-hook-form';
import { StyledTextarea, TextareaError } from './textarea.styled';

export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
  error?: FieldError;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...props }, ref) => (
    <div>
      <StyledTextarea error={error} ref={ref as any} {...props} />
      {error && <TextareaError>{error.message}</TextareaError>}
    </div>
  ),
);
