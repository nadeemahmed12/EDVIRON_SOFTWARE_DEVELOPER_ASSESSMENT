
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PaymentService } from './payments.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-payment')
  async createPayment(
    @Body('school_id') schoolId: string,
    @Body('amount') amount: string,
    @Body('callback_url') callbackUrl: string
  ) {
    return await this.paymentService.createPayment(schoolId, amount, callbackUrl);
  }

  @Get('status')
  async checkStatus(
    @Query('school_id') schoolId: string,
    @Query('collect_request_id') collectRequestId: string
  ) {
    return await this.paymentService.checkPaymentStatus(schoolId, collectRequestId);
  }
}
