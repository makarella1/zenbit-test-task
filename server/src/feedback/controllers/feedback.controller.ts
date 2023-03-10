import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackDto } from '../dto/feedback.dto';
import { FeedbackService } from '../services/feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  createFeedback(@Body() feedback: FeedbackDto): Promise<void> {
    return this.feedbackService.createFeedback(feedback);
  }
}
