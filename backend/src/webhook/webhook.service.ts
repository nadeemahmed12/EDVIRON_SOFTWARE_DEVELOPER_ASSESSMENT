// webhook.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webhook } from './webhook.schema';
import { OrderStatus } from 'src/orders/order-status.schema';
import { WebhookDto } from './dto/webhook.dto';

@Injectable()
export class WebhookService {
  constructor(
    @InjectModel(Webhook.name) private webhookModel: Model<Webhook>,
    @InjectModel(OrderStatus.name) private orderStatusModel: Model<OrderStatus>
  ) {}

  async saveWebhook(data: WebhookDto): Promise<Webhook> {
    const webhook = new this.webhookModel({
      rawResponse: data,
      school_id: data.school_id,
      collect_request_id: data.collect_request_id,
      status: data.status,
      amount: data.amount,
    });

    await webhook.save();

    if (data.order_info) {
      const orderInfo = data.order_info;
      await this.orderStatusModel.findOneAndUpdate(
        { collect_id: orderInfo.order_id },
        {
          order_amount: orderInfo.order_amount,
          transaction_amount: orderInfo.transaction_amount,
          payment_mode: orderInfo.payment_mode,
          payment_details: orderInfo.payment_details,
          bank_reference: orderInfo.bank_reference,
          payment_message: orderInfo.payment_message,
          status: orderInfo.status,
          error_message: orderInfo.error_message,
          payment_time: orderInfo.payment_time,
        },
        { upsert: true, new: true }
      );
    }

    return webhook;
  }
}
