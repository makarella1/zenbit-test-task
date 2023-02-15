import { BadRequestException, Injectable } from '@nestjs/common';
import { FeedbackDto } from '../dto/feedback.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from '../entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  async createFeedback(feedback: FeedbackDto): Promise<void> {
    const foundUser = this.feedbackRepository.findOne({
      where: { email: feedback.email },
    });

    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }

    await this.feedbackRepository.save(feedback);
  }

  async getFeedback() {
    return this.feedbackRepository.find();
  }
}
