// order-status.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderStatus } from './order-status.schema';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectModel(OrderStatus.name) private orderStatusModel: Model<OrderStatus>,
  ) {}

  // Webhook se update karne ke liye
  async updateFromWebhook(payload: any): Promise<OrderStatus> {
    const { collect_request_id, status, order_amount, transaction_amount, payment_mode, payment_details, bank_reference, payment_message, payment_time, error_message } = payload;

    
    return this.orderStatusModel.findOneAndUpdate(
      { collect_id: collect_request_id },
      {
        status,
        order_amount,
        transaction_amount,
        payment_mode,
        payment_details,
        bank_reference,
        payment_message,
        payment_time,
        error_message,
      },
      { new: true, upsert: true }, 
    ).exec();
  }
}
