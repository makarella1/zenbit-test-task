import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { Success } from '@/modules/feedback-form/components/success';
import { Input } from '@/modules/feedback-form/components/input';
import { Textarea } from '@/modules/feedback-form/components/textarea';
import { StyledFeedbackForm } from './feedback-form.styled';
import { StyledSubmitButton } from '@/modules/feedback-form/components/submit-button';
import { Feedback } from '@/modules/feedback-form/lib/validators';
import { createFeedback } from '@/modules/feedback-form/api';

import React from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const FeedbackForm = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: classValidatorResolver(Feedback),
  });

  const onSubmit = async (formData: FormValues) => {
    const { data, error } = await createFeedback(formData);

    if (error && error.message) {
      setError('email', { message: error.message });
    }

    if (data.success) {
      setIsSuccess(data.success);
    }
  };

  return !isSuccess ? (
    <StyledFeedbackForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Your name *"
        {...register('name')}
        error={errors.name}
      />
      <Input
        placeholder="Your e-mail *"
        {...register('email')}
        error={errors.email}
      />
      <Textarea
        placeholder="Your message *"
        {...register('message')}
        error={errors.message}
      />
      <StyledSubmitButton>Send Message</StyledSubmitButton>
    </StyledFeedbackForm>
  ) : (
    <Success />
  );
};
