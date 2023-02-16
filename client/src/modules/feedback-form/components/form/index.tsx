import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { Input } from '../input';
import { Textarea } from '../textarea';
import { StyledFeedbackForm } from './feedback-form.styled';
import { StyledSubmitButton } from '../submit-button';
import { Feedback } from '../../lib/validators';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: classValidatorResolver(Feedback),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(JSON.stringify(data));

    await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
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
  );
};
