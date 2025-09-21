
import { Controller, Post, Body } from '@nestjs/common';
import { OrderStatusService } from 'src/orders/order-status.service';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './dto/webhook.dto';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService
  ) {}

  @Post('payment-status')
  async handleWebhook(@Body() payload: WebhookDto) {
    return this.webhookService.saveWebhook(payload);
  }
}
