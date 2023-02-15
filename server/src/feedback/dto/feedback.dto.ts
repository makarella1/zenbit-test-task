import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class FeedbackDto {
  @IsNotEmpty()
  @MinLength(2, {
    message: "Name's too short, should be at least 2 characters long",
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10, {
    message: 'Message should be at least 10 characters long',
  })
  message: string;
}
