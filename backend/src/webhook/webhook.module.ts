import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Webhook, WebhookSchema } from './webhook.schema';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { OrderStatus, OrderStatusSchema } from 'src/orders/order-status.schema';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema },
    { name: OrderStatus.name, schema: OrderStatusSchema },
  ]),
OrdersModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
