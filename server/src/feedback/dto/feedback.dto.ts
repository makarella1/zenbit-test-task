import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class FeedbackDto {
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, {
    message: "Name's too short, should be at least 2 characters long",
  })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(10, {
    message: 'Message should be at least 10 characters long',
  })
  message: string;
}
